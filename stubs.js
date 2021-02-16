const getAvailableSlots = [[{"appointmentDt":{"dayOfWeek":"Tuesday","date":"2021-02-16"},"startTm":"08:40","endTm":"09:30","posId":275,"resourceId":15285,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Tuesday","date":"2021-02-16"},"startTm":"10:30","endTm":"11:20","posId":275,"resourceId":15288,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Tuesday","date":"2021-02-16"},"startTm":"12:45","endTm":"13:35","posId":275,"resourceId":15689,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Wednesday","date":"2021-02-17"},"startTm":"09:25","endTm":"10:15","posId":275,"resourceId":15284,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Wednesday","date":"2021-02-17"},"startTm":"14:40","endTm":"15:30","posId":275,"resourceId":15285,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Thursday","date":"2021-02-18"},"startTm":"10:30","endTm":"11:20","posId":275,"resourceId":15284,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Thursday","date":"2021-02-18"},"startTm":"11:20","endTm":"12:10","posId":275,"resourceId":15288,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Thursday","date":"2021-02-18"},"startTm":"12:45","endTm":"13:35","posId":275,"resourceId":15689,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Thursday","date":"2021-02-18"},"startTm":"14:35","endTm":"15:25","posId":275,"resourceId":15284,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Thursday","date":"2021-02-18"},"startTm":"14:40","endTm":"15:30","posId":275,"resourceId":15689,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Monday","date":"2021-02-22"},"startTm":"09:25","endTm":"10:15","posId":275,"resourceId":15288,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Monday","date":"2021-02-22"},"startTm":"10:35","endTm":"11:25","posId":275,"resourceId":15285,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Tuesday","date":"2021-04-06"},"startTm":"15:25","endTm":"16:15","posId":275,"resourceId":15288,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35},{"appointmentDt":{"dayOfWeek":"Tuesday","date":"2021-04-06"},"startTm":"15:30","endTm":"16:20","posId":275,"resourceId":15292,"dlExam":{"code":"5-R-1","description":"5-R-ROAD"},"lemgMsgId":35}]];

const getPosByRadius = [{"pos":{"posId":275,"lat":49.254742,"lng":-123.0870899,"address":"999 Kingsway, Vancouver, BC V5V 4Z7","address1":"999 Kingsway","city":"Vancouver","province":"BC","postcode":"V5V 4Z7","agency":"Vancouver claim centre (Kingsway)","url":"https://www.google.com/maps/search/?api=1&query=49.254742,-123.087090&query_place_id=ChIJE4j3x1VxhlQRj0P0ndmEuOQ"},"distance":3.65506591516537},{"pos":{"posId":9,"lat":49.249811,"lng":-123.1675491,"address":"4126 Macdonald St, Vancouver, BC V6L 2P2","address1":"4126 Macdonald St","city":"Vancouver","province":"BC","postcode":"V6L 2P2","agency":"Vancouver driver licensing (Point Grey)","url":"https://www.google.com/maps/search/?api=1&query=49.249811,-123.167549&query_place_id=ChIJ89T8ygtzhlQRTtNUkgClv50"},"distance":4.545992495573685},{"pos":{"posId":8,"lat":49.3201396,"lng":-123.0727959,"address":"104 - 125 13th St E, North Vancouver, BC V7M 2H7","address1":"104 - 125 13th St E","city":"North Vancouver","province":"BC","postcode":"V7M 2H7","agency":"North Vancouver driver licensing","url":"https://www.google.com/maps/search/?api=1&query=49.320140,-123.072796&query_place_id=ChIJ8ejut0dwhlQRaG9T4K5k92Y"},"distance":6.342717759031414},{"pos":{"posId":2,"lat":49.2652384,"lng":-123.0184072,"address":"3880 Lougheed Hwy, Burnaby, BC V5C 6N4","address1":"3880 Lougheed Hwy","city":"Burnaby","province":"BC","postcode":"V5C 6N4","agency":"Burnaby driver licensing","url":"https://www.google.com/maps/search/?api=1&query=49.265238,-123.018407&query_place_id=ChIJD_mJJyp3hlQRYkFoaqoVauo"},"distance":8.337127089190489},{"pos":{"posId":274,"lat":49.2445556,"lng":-122.9989364,"address":"4399 Wayburne Drive, Burnaby, BC V5G 3X7","address1":"4399 Wayburne Drive","city":"Burnaby","province":"BC","postcode":"V5G 3X7","agency":"Burnaby claim centre (Wayburne Drive)","url":"https://www.google.com/maps/search/?api=1&query=49.244556,-122.998936&query_place_id=ChIJa2jWXx53hlQR2eFId44dYEw"},"distance":10.387904137598548},{"pos":{"posId":93,"lat":49.175914,"lng":-123.1309482,"address":"5300 No 3 Rd #402, Richmond, BC V6X 2X9","address1":"5300 No 3 Rd #402","city":"Richmond","province":"BC","postcode":"V6X 2X9","agency":"Richmond driver licensing (Lansdowne Centre mall)","url":"https://www.google.com/maps/search/?api=1&query=49.175914,-123.130948&query_place_id=ChIJl9aTsDF1hlQRRbDIVa8snKc"},"distance":11.097751491498938},{"pos":{"posId":273,"lat":49.1717068,"lng":-123.1480613,"address":"7200 Elmbridge Way, Richmond, BC V6X 2Y1","address1":"7200 Elmbridge Way","city":"Richmond","province":"BC","postcode":"V6X 2Y1","agency":"Richmond claim centre (Elmbridge Way)","url":"https://www.google.com/maps/search/?api=1&query=49.171707,-123.148061&query_place_id=ChIJpf1Vg80KhlQR9x2fYW5Fhbk"},"distance":11.717892874201734},{"pos":{"posId":276,"lat":49.2015359,"lng":-122.9288899,"address":"1320 3rd Avenue, New Westminster, BC V3M 5T4","address1":"1320 3rd Avenue","city":"New Westminster","province":"BC","postcode":"V3M 5T4","agency":"New Westminster claim centre (3rd Avenue)","url":"https://www.google.com/maps/search/?api=1&query=49.201536,-122.928890&query_place_id=ChIJY6CbknvYhVQReuRlZMRXfcw"},"distance":17.413471290643635},{"pos":{"posId":272,"lat":49.234565,"lng":-122.8769683,"address":"100 Blue Mountain Street, Coquitlam, BC V3K 1A2","address1":"100 Blue Mountain Street","city":"Coquitlam","province":"BC","postcode":"V3K 1A2","agency":"Coquitlam claim centre (Blue Mountain Street)","url":"https://www.google.com/maps/search/?api=1&query=49.234565,-122.876968&query_place_id=ChIJczxFhw54hlQR34zua3Fz_YU"},"distance":19.972135976682274},{"pos":{"posId":11,"lat":49.1442064,"lng":-122.8505881,"address":"13426 78 Ave, Surrey, BC V3W 8J6","address1":"13426 78 Ave","city":"Surrey","province":"BC","postcode":"V3W 8J6","agency":"Surrey driver licensing","url":"https://www.google.com/maps/search/?api=1&query=49.144206,-122.850588&query_place_id=ChIJAV2yFIfZhVQR5-jLwWAMcMM"},"distance":26.03701751697691},{"pos":{"posId":269,"lat":49.1891018,"lng":-122.8001985,"address":"10262 152A Street, Surrey, BC V3R 6T8","address1":"10262 152A Street","city":"Surrey","province":"BC","postcode":"V3R 6T8","agency":"Surrey claim centre (152A St.)","url":"https://www.google.com/maps/search/?api=1&query=49.189102,-122.800199&query_place_id=ChIJWU8UzBTXhVQRvkqWkdXIpOg"},"distance":27.279729273113812},{"pos":{"posId":271,"lat":49.1317207,"lng":-122.8427533,"address":"13665 68 Avenue, Surrey, BC V3W 0Y6","address1":"13665 68 Avenue","city":"Surrey","province":"BC","postcode":"V3W 0Y6","agency":"Newton claim centre (68 Avenue)","url":"https://www.google.com/maps/search/?api=1&query=49.131721,-122.842753&query_place_id=ChIJ3XwJEcvbhVQRNW1kVDhu9ps"},"distance":27.343739800005277},{"pos":{"posId":73,"lat":49.2632298,"lng":-122.7679056,"address":"1930 Oxford Connector, Port Coquitlam, BC V3C 0A4","address1":"1930 Oxford Connector","city":"Port Coquitlam","province":"BC","postcode":"V3C 0A4","agency":"Port Coquitlam driver licensing","url":"https://www.google.com/maps/search/?api=1&query=49.263230,-122.767906&query_place_id=ChIJdZzMj1Z_hlQRGFX-2i1aMNs"},"distance":28.092758373848568},{"pos":{"posId":220,"lat":49.4005939,"lng":-123.5090474,"address":"474 S Fletcher Rd, Gibsons, BC V0N 1V0","address1":"474 S Fletcher Rd","city":"Gibsons","province":"BC","postcode":"V0N 1V0","agency":"Gibsons: Town of Gibsons driver licensing","url":"https://www.google.com/maps/search/?api=1&query=49.400594,-123.509047&query_place_id=ChIJo-tj-84_hlQRXWVQD704aN8"},"distance":33.49584825298283},{"pos":{"posId":153,"lat":49.1162992,"lng":-122.6700928,"address":"19950 Willowbrook Dr j7, Langley, BC V2Y 1K9","address1":"19950 Willowbrook Dr j7","city":"Langley","province":"BC","postcode":"V2Y 1K9","agency":"Langley driver licensing (Willowbrook Center)","url":"https://www.google.com/maps/search/?api=1&query=49.116299,-122.670093&query_place_id=ChIJSRmvldTPhVQRsL0ufG2BLM4"},"distance":39.99000123147129},{"pos":{"posId":270,"lat":49.1104075,"lng":-122.6722642,"address":"6000 Production Way, Langley City, BC V3A 6L5","address1":"6000 Production Way","city":"Langley City","province":"BC","postcode":"V3A 6L5","agency":"Langley claim centre (Production Way)","url":"https://www.google.com/maps/search/?api=1&query=49.110408,-122.672264&query_place_id=ChIJjTC2-inQhVQRFvuclgjPgFA"},"distance":40.13370198445151},{"pos":{"posId":6,"lat":49.2197708,"lng":-122.5998728,"address":"22470 Dewdney Trunk Rd #175, Maple Ridge, BC V2X 5Z6","address1":"22470 Dewdney Trunk Rd #175","city":"Maple Ridge","province":"BC","postcode":"V2X 5Z6","agency":"Maple Ridge Service BC centre","url":"https://www.google.com/maps/search/?api=1&query=49.219771,-122.599873&query_place_id=ChIJ9_0orV_ThVQRh6rpeKMKdBM"},"distance":41.8261687552217},{"pos":{"posId":256,"lat":49.7021157,"lng":-123.1531441,"address":"1325 Pemberton Ave, Squamish, BC V8B 0J8","address1":"1325 Pemberton Ave","city":"Squamish","province":"BC","postcode":"V8B 0J8","agency":"Squamish: SCU (Squamish) Insurance Services","url":"https://www.google.com/maps/search/?api=1&query=49.702116,-123.153144&query_place_id=ChIJnVfibxb4hlQR7DVSUDXI3lw"},"distance":47.491246171538585},{"pos":{"posId":252,"lat":49.4718331,"lng":-123.7610302,"address":"5755 Cowrie St, Sechelt, BC V0N 3A0","address1":"5755 Cowrie St","city":"Sechelt","province":"BC","postcode":"V0N 3A0","agency":"Sechelt: Westland Insurance","url":"https://www.google.com/maps/search/?api=1&query=49.471833,-123.761030&query_place_id=ChIJaak6l286hlQRoET6jtArgfc"},"distance":54.84398515383729},{"pos":{"posId":1,"lat":49.0499872,"lng":-122.3390917,"address":"31935 S Fraser Way #150, Abbotsford, BC V2T 5N7","address1":"31935 S Fraser Way #150","city":"Abbotsford","province":"BC","postcode":"V2T 5N7","agency":"Abbotsford driver licensing (Clearbrook Plaza)","url":"https://www.google.com/maps/search/?api=1&query=49.049987,-122.339092&query_place_id=ChIJ9ztqUJ5KhFQR4sX5EOJvG7g"},"distance":66.98978428569272},{"pos":{"posId":277,"lat":49.0547075,"lng":-122.3276593,"address":"2885 Trethewey Street, Abbotsford, BC V2T 3R2","address1":"2885 Trethewey Street","city":"Abbotsford","province":"BC","postcode":"V2T 3R2","agency":"Abbotsford claim centre (Trethewey Street)","url":"https://www.google.com/maps/search/?api=1&query=49.054708,-122.327659&query_place_id=ChIJ_UBxfkY1hFQR8F6u02bf5q4"},"distance":67.63505405031738},{"pos":{"posId":214,"lat":48.7807082,"lng":-123.706573,"address":"5785 Duncan St, Duncan, BC V9L 3W6","address1":"5785 Duncan St","city":"Duncan","province":"BC","postcode":"V9L 3W6","agency":"Duncan Service BC centre","url":"https://www.google.com/maps/search/?api=1&query=48.780708,-123.706573&query_place_id=ChIJ-4ATn15Pj1QRQxW99R0OVCE"},"distance":71.98389813928173},{"pos":{"posId":113,"lat":49.2335383,"lng":-124.0468719,"address":"6475 Metral Dr, Nanaimo, BC V9T 2L9","address1":"6475 Metral Dr","city":"Nanaimo","province":"BC","postcode":"V9T 2L9","agency":"Nanaimo driver licensing","url":"https://www.google.com/maps/search/?api=1&query=49.233538,-124.046872&query_place_id=ChIJb7da_ciYiFQRBjgZiNEFDYU"},"distance":73.21361297366192},{"pos":{"posId":114,"lat":48.4713155,"lng":-123.3606209,"address":"1150 McKenzie Ave #1, Victoria, BC V8P 2L7","address1":"1150 McKenzie Ave #1","city":"Victoria","province":"BC","postcode":"V8P 2L7","agency":"Victoria driver licensing","url":"https://www.google.com/maps/search/?api=1&query=48.471316,-123.360621&query_place_id=ChIJS9RVIMZzj1QR0j1WIeb6REk"},"distance":91.41797813279156},{"pos":{"posId":3,"lat":49.1612197,"lng":-121.9504116,"address":"46052 Chilliwack Central Rd, Chilliwack, BC V2P 1J6","address1":"46052 Chilliwack Central Rd","city":"Chilliwack","province":"BC","postcode":"V2P 1J6","agency":"Chilliwack driver licensing","url":"https://www.google.com/maps/search/?api=1&query=49.161220,-121.950412&query_place_id=ChIJu_C1vns_hFQRlzdQz-JPAOI"},"distance":93.66068861192421},{"pos":{"posId":265,"lat":50.12,"lng":-122.957502,"address":"4370 Lorimer Rd #232, Whistler, BC V0N 1B4","address1":"4370 Lorimer Rd #232","city":"Whistler","province":"BC","postcode":"V0N 1B4","agency":"Whistler: Westland Insurance","url":"https://www.google.com/maps/search/?api=1&query=50.120000,-122.957502&query_place_id=ChIJu9voJ7I8h1QR8mbRAq58bo8"},"distance":94.78484999070133}];

const addresses = {"features":[{"type":"Feature","geometry":{"type":"Point","crs":{"type":"EPSG","properties":{"code":4326}},"coordinates":[-125.263245,50.0268793]},"properties":{"fullAddress":"1155 Homewood Rd, Campbell River, BC","score":72,"matchPrecision":"BLOCK","precisionPoints":99,"faults":[{"value":"HOME","element":"STREET_NAME","fault":"partialMatch","penalty":1},{"value":"","element":"LOCALITY","fault":"missing","penalty":10},{"value":"HOMER","element":"STREET_NAME","fault":"spelledWrong","penalty":2},{"value":"HOME","element":"STREET_NAME","fault":"isAlias","penalty":1},{"value":"","element":"STREET_TYPE","fault":"missing","penalty":6},{"value":"","element":"PROVINCE","fault":"missing","penalty":1},{"value":"","element":"FAULTS","fault":"tooMany","penalty":6}],"localityType":"City","electoralArea":"","locationPositionalAccuracy":"low","locationDescriptor":"accessPoint","siteID":"","blockID":566693,"accessNotes":"","siteStatus":""}}]};

const webLogin = {"drvrId":1,"lastName":"DOE","firstName":"JOHN","licenseNumber":"1234567","phoneNum":"1231231234","email":"driver@email.com"};

module.exports = {
  getPosByRadius,
  getAvailableSlots,
  addresses,
  webLogin,
}