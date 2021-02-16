const { daysFromToday, tomorrowFormatted } = require('./common');
const { fetchUser, fetchLatLng, fetchLocations, fetchSlots } = require('./road-test-api');


const USER = {
  address: '',
  lastName: '',
  licenceNumber: '',
  keyword: ''
}

const CONFIG = {
  examType: '5-R-1',
  preferableDaysOfWeek: '[0,1,2,3,4,5,6]',
  preferablePartsOfDay: '[0,1]',
  ignoreReserveTime: false,
  maximumKmDistance: 20,
  minWaitDays: 4,
  maxWaitDays: 20,
}


async function gatherData() {
  const startDate = tomorrowFormatted();
  const { address, lastName, licenceNumber, keyword } = USER;
  const { examType, preferableDaysOfWeek, preferablePartsOfDay, ignoreReserveTime, maximumKmDistance } = CONFIG;

  const { authorization } = await fetchUser({ lastName, licenceNumber, keyword })
  const { lat, lng } = await fetchLatLng({ address });

  const locations = await fetchLocations({ lat, lng, examType, startDate, authorization, maximumKmDistance });
  const locationIds = Array.from(locations.keys());

  const availableSlots = await fetchSlots({ 
    locationIds, 
    licenceNumber, 
    examType, 
    startDate, 
    authorization,
    lastName,
    preferableDaysOfWeek,
    preferablePartsOfDay,
    ignoreReserveTime
  });

  const data = {
    locations,
    availableSlots
  }

  return data;
}

async function run() {
  const data = await gatherData();
  data.availableSlots.forEach(slot => {
    slot.location = data.locations.get(slot.posId);
    slot.daysFromToday = daysFromToday(slot.date);
  });

  const result = data.availableSlots
    .filter(slot => slot.daysFromToday >= CONFIG.minWaitDays && slot.daysFromToday <= CONFIG.maxWaitDays)
    .sort((a, b) => {
      return a.date.localeCompare(b.date) 
        || a.location.distance - b.location.distance
        || a.startTm.localeCompare(b.startTm) ;
    })
    .map(slot => ({
      dayOfWeek: slot.dayOfWeek,
      date: slot.date,
      startTime: slot.startTm,
      address: slot.location.address,
      distance: Math.round( slot.location.distance * 1000 + Number.EPSILON ) / 1000,
      daysFromToday: slot.daysFromToday,
    }));

  console.log(result);
}

run();