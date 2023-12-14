// // Initialize the map
// let map = L.map('map').setView([51.505, -0.09], 2);

// // Set up the OSM layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
// }).addTo(map);

// // carregue o nome de todos os paises utilizando a API restcountries.com
// //e adicione-os ao elemento <select id="paises">
// // ver exercicio 1.8

// // associe o evento change do elemento <select id="paises"> a uma função que
// // mude a vista do mapa para o país selecionado
// //crie uma variavel latitudeLongitude que pega a lat e long do pais selecionado 
// // e utilize-a para mudar a vista do mapa

// //Ex de uma versao estatica
// // let latLong = [-14.794851092521004, -39.25978803993592];
// // map.setView(latLong, 8);

// // Get the select element
// let selectPaises = document.getElementById('paises');

// // Add change event listener to the select element
// selectPaises.addEventListener('change', function () {
//   // Get the selected country name
//   let selectedCountry = this.value;

//   // Show the selected country name on the map
//   showCountryOnMap(map, selectedCountry);
// });

// // Fetch the list of countries from the API
// fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
//     // Populate the select element with country names
//     data.forEach(country => {
//       let option = document.createElement('option');
//       option.value = country.name.common;
//       option.text = country.name.common;
//       selectPaises.appendChild(option);
//     });
//   })
//   .catch(error => console.error('Error fetching countries:', error));

// // Function to show the selected country on the map
// function showCountryOnMap(map, countryName) {
//   // Find the country object in the data array
//   let selectedCountryData = data.find(country => country.name.common === countryName);

//   // Check if the country data is available
//   if (selectedCountryData && selectedCountryData.latlng) {
//     // Extract latitude and longitude
//     let latitudeLongitude = selectedCountryData.latlng;

//     // Set the map view to the selected country
//     map.setView(latitudeLongitude, 8);

//     // Display the country name on the map (you can customize this part)
//     L.popup()
//       .setLatLng(latitudeLongitude)
//       .setContent(`<p>${countryName}</p>`)
//       .openOn(map);
//   }
// }


document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map
  let map = L.map('map').setView([0, 0], 2);

  // Set up the OSM layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  // Get the select element
  let selectPaises = document.getElementById('paises');

  // Add change event listener to the select element
  selectPaises.addEventListener('change', function () {
    // Get the selected country name
    let selectedCountry = this.value;

    // Show the selected country on the map
    showCountryOnMap(map, selectedCountry);
  });

  // Fetch the list of countries from the API
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      // Populate the select element with country names
      data.forEach(country => {
        let option = document.createElement('option');
        option.value = country.name.common;
        option.text = country.name.common;
        selectPaises.appendChild(option);
      });
    })
    .catch(error => console.error('Error fetching countries:', error));

  // Function to show the selected country on the map
  function showCountryOnMap(map, countryName) {
    // Find the country object in the data array
    let selectedCountryData = data.find(country => country.name.common === countryName);

    console.log(selectedCountryData.latlng)
    // Check if the country data is available
    if (selectedCountryData && selectedCountryData.latlng) {
      // Extract latitude and longitude
      let latitudeLongitude = selectedCountryData.latlng;

      // Set the map view to the selected country
      map.setView(latitudeLongitude, 9);

      // Display the country name on the map (you can customize this part)
      L.popup()
        .setLatLng(latitudeLongitude)
        .setContent(`<p>${countryName}</p>`)
        .openOn(map);
    }
  }


  // let latLong = [-14.794851092521004, -39.25978803993592];
  // map.setView(latLong, 8);
});

