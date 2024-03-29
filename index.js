window.addEventListener("DOMContentLoaded", () => {
  const deadLine = "2024-02-29";

  function getZero(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    let days, hours, minutes, seconds;

    if (t <= 0) {
      return {
        total: 00,
        days: 00,
        hours: 00,
        minutes: 00,
        seconds: 00,
      };
    } else {
      (days = getZero(Math.floor(t / (1000 * 60 * 60 * 24)))),
        (hours = getZero(Math.floor((t / (1000 * 60 * 60)) % 24))),
        (minutes = getZero(Math.floor((t / (1000 * 60)) % 60))),
        (seconds = getZero(Math.floor((t / 1000) % 60)));
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadLine);
});
