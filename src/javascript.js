//date and time

function updateClock() {
  let local = moment().locale("nb").format("LLLL");

  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = `I dag er det ${local}`;
}

updateClock();

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"];

  return days[date.getDay()];

  // search

  function handleSearch(event) {
    event.preventDefault();
    let searchCity = document.querySelector("#searchCity");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchCity.value;
  }

  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearch);
}

