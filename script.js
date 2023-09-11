document.addEventListener("DOMContentLoaded", function () {
  // Get elements by data-testid attributes
  const slackUserName = document.querySelector('[data-testid="slackUserName"]');
  const slackDisplayImage = document.querySelector(
    '[data-testid="slackDisplayImage"]'
  );
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  const myTrack = document.querySelector('[data-testid="myTrack"]');

  // Get current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  currentDayOfTheWeek.textContent = dayOfWeek;

  // Get current UTC time in milliseconds
  const utcTime = today.getTime();
  currentUTCTime.textContent = utcTime;
});
