// Inicializa e adiciona o mapa na tela
let map, infoWindow;

async function initMap() {
  const position = { lat: -23.6609907249838, lng: -46.707127135618975 };
  const { Map } = await google.maps.importLibrary("maps");

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
    controlSize: 25,
  });

  infoWindow = new google.maps.InfoWindow();

  var locationButton = document.createElement("button");
  locationButton.textContent = "Ir para localização em tempo real";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var userLocation = {
            lat: /*-23.6609907249838*/ position.coords.latitude,
            lng: /*-46.707127135618975*/ position.coords.longitude,
          };

          infoWindow.setPosition(userLocation);
          infoWindow.setContent("Localização encontrada.");
          infoWindow.open(map);
          map.setCenter(userLocation);

          var userMarker = new google.maps.Marker({
            position: userLocation,
            map: map,
            title: "Compras na sua rota",
          });

          var request = {
            location: userLocation,
            radius: 1000,
            types: ["supermarket"],
          };

          var service = new google.maps.places.PlacesService(map);

          service.nearbySearch(request, callback);

          function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
              }
              console.log(results);
              avisarUsuarioNote(results);
            }
          }

          function createMarker(place) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              title: place.name,
            });
          }
        },

        function () {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, userLocation) {
  infoWindow.setPosition(userLocation);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Erro: O serviço de Geolocalização falhou."
      : "Erro: Seu navegador não suporta geolocalização."
  );
  infoWindow.open(map);
}

function avisarUsuario(results) {
  if (minhaLista.length > 0 && results.length > 0) {
    alert("Aproveite para comprar o que precisa, tem supermercados proxímos");
  } else {
    console.log("Você não tem nenhuma lista de compras");
    alert("Você esta livre, não precisa comprar nada!");
  }
}

const ulAviso = document.querySelector(`.container-aviso`);
const audio = new Audio("./assets/aviso.mp3");

function avisarUsuarioNote(results) {
  if (minhaLista.length > 0 && results.length > 0) {
    let novaLi1 = `
    <h5>Avisos na minha rota:</h5>
    <h5>Aproveite para realizar compras na sua rota, existem supermercados próxmos.</h5>
    <li>
      <h5>Estabelecimento mais próximo:</h5>
      <h5>${results[4].name}</h5>
      <h5>Endereço: ${results[4].vicinity}</h5>
    </li>
      `;
    ulAviso.innerHTML = novaLi1;

    audio.play();
  } else {
    let novaLi1 = `
    <h5>Avisos na minha rota:</h5>
    <h5>Você não possui nenhuma lista cadastrada.</h5>
      `;
    ulAviso.innerHTML = novaLi1;
  }
}

window.initMap = initMap;
initMap();
