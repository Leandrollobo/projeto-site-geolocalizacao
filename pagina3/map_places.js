// Inicializa e adiciona o mapa na tela
let map, infoWindow;

async function initMap() {
  // Pino de Localização proximo a dois supermercados para testes
  const position = { lat: -23.6609907249838, lng: -46.707127135618975 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  //const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // Aqui instanciamos um novo mapa(construtor) O mapa, centralizado na latitude e longitude informadas na linha 6
  //Ainda aqui no construtor podemos usar as propriedadas do Google Maps.
  //Link para as propriedades
  //https://developers.google.com/maps/documentation/javascript/reference/map?hl=pt-br#Map
  map = new google.maps.Map(document.getElementById("map"), {
    //propriedades google
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
    controlSize: 25,
  });

  // Adiciona um marcador para a localização do usuário no mapa

  // Cria uma instância do InfoWindow
  infoWindow = new google.maps.InfoWindow();

  // Cria um botão de controle personalizado para obter a localização em tempo real
  var locationButton = document.createElement("button");
  locationButton.textContent = "Ir para localização em tempo real";
  locationButton.classList.add("custom-map-control-button");
  // Adiciona o botão ao mapa na posição TOP_CENTER
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  // Adiciona um ouvinte de eventos ao botão
  locationButton.addEventListener("click", function () {
    // Tenta obter a localização usando a geolocalização HTML5
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Em caso de sucesso, exibe a localização no mapa
          var userLocation = {
            lat: -23.6609907249838 /*position.coords.latitude*/,
            lng: -46.707127135618975 /*position.coords.longitude*/,
          };

          infoWindow.setPosition(userLocation);
          infoWindow.setContent("Localização encontrada.");
          infoWindow.open(map);
          map.setCenter(userLocation);

          // Adiciona um marcador para a localização do usuário no mapa
          var userMarker = new google.maps.Marker({
            position: userLocation,
            map: map,
            title: "Compras na sua rota",
          });

          // Configuração da pesquisa próxima
          var request = {
            location: userLocation,
            radius: 1000, // Raio em metros (1 km)
            types: ["supermarket"], // Especifica o tipo de lugar que você está procurando (supermercado)
          };

          // Cria o serviço de lugares
          var service = new google.maps.places.PlacesService(map);

          // Realiza a pesquisa próxima
          service.nearbySearch(request, callback);

          // Função de retorno para manipular os resultados
          function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                // Cria marcadores para os resultados da pesquisa
                createMarker(results[i]);
              }
              //LEANDRO
              //Aqui chamamos a função para avisar o usuario apos ele clicar no botão da localização
              console.log(results);
              avisarUsuarioNote(results);
            }
          }

          // Função para criar marcadores
          function createMarker(place) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              title: place.name,
            });
          }
        },

        function () {
          // Em caso de erro, chama a função de tratamento de erro
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Se o navegador não suportar a geolocalização, chama a função de tratamento de erro
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

// Função de tratamento de erro para geolocalização
function handleLocationError(browserHasGeolocation, infoWindow, userLocation) {
  infoWindow.setPosition(userLocation);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Erro: O serviço de Geolocalização falhou."
      : "Erro: Seu navegador não suporta geolocalização."
  );
  infoWindow.open(map);
}

//função avisar o usuario
function avisarUsuario(results) {
  if (minhaLista.length > 0 && results.length > 0) {
    alert("Aproveite para comprar o que precisa, tem supermercados proxímos");
  } else {
    console.log("Você não tem nenhuma lista de compras");
    alert("Você esta livre, não precisa comprar nada!");
  }
}

//LEANDRO
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

// Substitua 'caminho/do/som/notificacao.mp3' pelo caminho real do seu arquivo de som

//LEANDRO teste

window.initMap = initMap;
initMap();
