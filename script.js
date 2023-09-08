const date = new Date();
const dayOfTheWeek = date.toLocaleString("en-US", {
    weekday: "long",
});
const utcTime = date.getTime();
const currentDayOfTheWeek = document.querySelector(
    "[data-testid=currentDayOfTheWeek]"
);
const currentUTCTime = document.querySelector(
    "[data-testid=currentUTCTime]"
);
currentDayOfTheWeek.innerHTML = dayOfTheWeek;
currentUTCTime.innerHTML = utcTime;