const { fetch } = require('./common');
const { getPosByRadius, getAvailableSlots, addresses, webLogin } = require('./stubs');


const DEV_MODE = false;

const URLS = {
  base: 'https://onlinebusiness.icbc.com/deas-api/v1',
  login: () => `${URLS.base}/webLogin/webLogin`,
  findLatLng: (address) => `https://geocoder.api.gov.bc.ca/addresses.json?minScore=65&matchPrecision=occupant,unit,site,civic_number,block,locality&maxResults=5&echo=false&locationDescriptor=accessPoint&brief=true&autoComplete=true&addressString=${address}`,
  availableLocations: () => `${URLS.base}/web/getPosByRadius`,
  availableSlots: () => `${URLS.base}/web/getAvailableSlots`,
}


async function fetchUser({ lastName: drvrLastName, licenceNumber, keyword }) {
  const body = { drvrLastName, licenceNumber, keyword };
  const user = DEV_MODE ? webLogin : await fetch({ url: URLS.login(), method: "PUT", body, returnAuthorization: true });

  return user;
}

async function fetchLatLng({ address }) {
  const res = DEV_MODE ? addresses : await fetch({ url: URLS.findLatLng(address), method: "GET" });
  const coordinates = res.features[0].geometry.coordinates;

  return { lng: coordinates[0], lat: coordinates[1] };
}

async function fetchLocations({ lat, lng, examType, startDate, authorization, maximumKmDistance }) {
  const body = { lat, lng, radius: 100, examType, startDate };
  const res = DEV_MODE ? getPosByRadius : await fetch({ url: URLS.availableLocations(), method: "PUT", body, authorization });

  const locations = Object.values(res).filter( l => l ? l.distance < maximumKmDistance : false );
  const locationMap = new Map();
  locations.forEach(l => locationMap.set(l.pos.posId, { distance: l.distance, ...l.pos }));

  return locationMap;
}

async function fetchSlots({ 
  locationIds: posIDs, 
  licenceNumber: licenseNumber, 
  examType, 
  startDate: examDate, 
  authorization,
  lastName,
  preferableDaysOfWeek: prfDaysOfWeek,
  preferablePartsOfDay: prfPartsOfDay,
  ignoreReserveTime
}) {
  const body = { posIDs, examType, examDate, ignoreReserveTime, prfDaysOfWeek, prfPartsOfDay, lastName, licenseNumber };
  const slots = DEV_MODE ? getAvailableSlots : await fetch({ url: URLS.availableSlots(), method: "POST", body, authorization });

  return slots.flatMap(outer => outer.map(slot => ({
    ...slot.appointmentDt,
    ...slot.dlExam,
    startTm: slot.startTm,
    endTm: slot.endTm,
    posId: slot.posId,
    resourceId: slot.resourceId,
    lemgMsgId: slot.lemgMsgId,
  })));
}

module.exports = {
  fetchUser,
  fetchLatLng,
  fetchLocations,
  fetchSlots,
}