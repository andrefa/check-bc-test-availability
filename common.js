const fetch = require('node-fetch');
const { differenceInCalendarDays, format, parse, startOfTomorrow } = require('date-fns');
const { exec } = require("child_process");

function daysFromToday(date) {
  console.log(date);
  const parsed = parse(date, 'yyyy-MM-dd', new Date());
  const diff = differenceInCalendarDays(parsed, new Date());

  return diff;
}

function tomorrowFormatted() {
  return format(startOfTomorrow(), 'yyyy-MM-dd');
}

function playAlarm() {
  exec("say 'Novos horários disponíveis para agendamento!'");
}

async function doFetch({ url, method, body = {}, authorization, returnAuthorization = false }) {
  const configuration = {
    "headers": {
      "authorization": authorization,
      "content-type": "application/json",
    },
    "body": method == "GET" ? null : JSON.stringify(body),
    "method": method,
  };

  const res = await fetch(url, configuration);
  const responseBody = await res.json();

  if (returnAuthorization) {
    const responseAuthorization = res.headers.get("authorization")
    return { ...responseBody, authorization: responseAuthorization }
  }
  return responseBody;
}

module.exports = {
  daysFromToday,
  fetch : doFetch,
  playAlarm,
  tomorrowFormatted,
}
