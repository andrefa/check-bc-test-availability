
const { daysFromToday, fetch, playAlarm } = require('./common')

const servicePublicId = 'da8488da9b5df26d32ca58c6d6a7973bedd5d98ad052d62b468d3b04b080ea25';

const URLS = {
  base: 'https://onlinebusiness.icbc.com/qmaticwebbooking/rest/schedule/branches',
  availablePlaces: () => `${URLS.base}/available;servicePublicId=${servicePublicId}`,
  availableDays: (addressId) => `${URLS.base}/${addressId}/dates;servicePublicId=${servicePublicId};customSlotLength=15`,
  availableTimes: (addressId, date) => `${URLS.base}/${addressId}/dates/${date}/times;servicePublicId=${servicePublicId};customSlotLength=15`
}

const INTERESTING_ADDRESSES = [
  { id: '7ca7e51b73b388a05f1d86a1d69f113272388294d514d3bfb71e8a2cc11db379', name: 'Abbotsford' },
  { id: '53851ce8b410de56e26a0f0d2eda5a3e8d8cf4e05cc1b21af70121f53ef53b5d', name: 'Burnaby' },
  { id: '0ab916058f4b572eae9dfbdf0693fa9f2f97a34a19bee6c68d09cb28b78ac3c3', name: 'East Van' },
  { id: '050a91560b08e8aedfef609cb69e0c41469b56e575f325681f98196495169661', name: 'Guildford' },
  { id: '09863cca687e2a677911a7e9d1b88c55eaba7b13c862bd9da8eca1426855ef1d', name: 'Langley-Willowbrook' },
  { id: 'e879cd70e75ba8db2fb03b3d2060bf7c1c74e5d879ebea3cc585fd2d707a278d', name: 'Metrotown' },
  { id: '80a96ca1218413463f6601d41d2e97391e2b9da1aadaf033220be663264db0f3', name: 'North Vancouver' },
  { id: '542161df66423009309050c01dcc17f7d1db1ef8e7cea3012331509b79ea6959', name: 'Point Grey' },
  { id: 'b40103f18229d5654343c6813aa147e8057cb2838e460530f136e3851bf5fa41', name: 'Port Coquitlam' },
  { id: 'b1d4daefba2458c80d880e3931798ef508477d19f6cf1652327459a4a1a27ee3', name: 'Richmond' },
  { id: 'ea01f5e5ba07af767a739c1d66730bef9663a1a307b84e4674cffcd93caad1b5', name: 'Royal Centre' },
  { id: 'd8225a23dd9830e9684fb00f8aea2fff279c892cb1065244aaa0ae05396a0fe2', name: 'Surrey' }
];

async function run() {
  const addresses = INTERESTING_ADDRESSES;
  const availability = [];
  for (const address of addresses) {
    const availableDays = await fetch({ url: URLS.availableDays(address.id), method: "GET" });
    const closeAvailableDays = availableDays.map(obj => obj.date).filter(d => daysFromToday(d) < 14);

    if(closeAvailableDays.length) {
      playAlarm();
    }
    availability.push({
      where: address.name,
      when: closeAvailableDays[0] || null,
      also: closeAvailableDays.slice(1,closeAvailableDays.length+1),
    });
  }

  console.log('Availability:', availability);
}

run();
setInterval(() => run(), 15_000);