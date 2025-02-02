function handleSearch(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#searchCity");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchCity.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

let currentCityElement = document.querySelector("#city");
currentCity.innerHTML = response.data.city;
