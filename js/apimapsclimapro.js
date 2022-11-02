
/**************************MAPA************************************************************* */
// opcion responsive
var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

// capas de mapas por tipo
var basemaps = {
    
    'calles': L.tileLayer.wms('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        layers: '© OpenStreetMap',
    }),

    'Topography': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
        layers: 'TOPO-OSM-WMS',
    }),

    'Places': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
        layers: 'SRTM30-Colored-Hillshade'
    }),

    'Topography, then places': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
        layers: 'TOPO-WMS,OSM-Overlay-WMS'
    }),

    'Places, then topography': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
        layers: 'OSM-Overlay-WMS,TOPO-WMS'
    })

};

L.control.layers(basemaps).addTo(map);

basemaps.calles.addTo(map); //mapa que carga por defecto



//mesaje que solicita usar la ubicacion del dispositivo y te centra el mapa en tu ubicacion

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("su posición actual es: " + e.latlng.toString()).openPopup();
        
   // L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

//mensaje pasa solicitar información 

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);


//mensaje emergente en vez de usar el mensaje tipo alerta punto anterior
// poscion al hacer clicj

var popup = L.popup();


function onMapClick(e) {
    popup 
        .setLatLng(e.latlng)
        .setContent("su posicon seleccionada es: " + e.latlng.toString())
        .openOn(map);
        console.log(e.latlng);
        let marcaUsu = e.latlng;
        console.log("prueba" + marcaUsu);
        L.marker(e.latlng).addTo(map);   
    
}

map.on('click', onMapClick);

document.querySelector('#btnRecargarMapa').addEventListener('click', recargarMapa);

document.querySelector('#btnborrarPuntosMapa').addEventListener('click', borrarPuntosMapa);

//para volver a generar posicion actual
function recargarMapa(){
    location. reload();
        }

//para volver a generar posicion actual
function borrarPuntosMapa(){
    popup.remove(); 
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker)
        {
            map.removeLayer(layer)
             
        }
    })
      }
     

/**************************CLIMA TIEMPO REAL + POSICION************************************************************* */
const API_KEY = 'e5f47f5c63f48a3b0d07bcf68c07b654';

const fetchData = position => {
    const {latitude, longitude} = position.coords;
    //consulta clima tiempo actual
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => seteoDataClima(data))
        .catch(err => console.log(err))
}


const fetchData2 = position => {
    const {latitude, longitude} = position.coords;  
    //consulta clima pronostico a 5 días
    fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response1 => response1.json())
        .then(data1 => seteoDataClima1(data1))
        //.catch(errB => console.log(errB))
}

const seteoDataClima = data => {
    console.log(data);
    
    const weatherData = {
        location: `${'Ciudad:'} ${data.name}`,
        country: `${'País:'} ${data.sys.country}`,
        description: `${'Cielo:'} ${data.weather[0].main}`,
        humidity: `${'Humedad:'} ${(data.main.humidity).toFixed(1)}${'%'}`,
        temperature: `${'Temp:'} ${Math.round(data.main.temp).toFixed(1)}${'°'}`,
        feels_like: `${'Sensación:'} ${Math.round(data.main.feels_like)}${'°'}`,
        wind: `${'Viento:'} ${data.wind.speed}${'km/h'}`,
        idIcon: `${'Icono Clima:'} ${data.weather[0].icon}`,
        imgIcon: `${data.weather[0].icon}`,
       }     
      let conIconClima = '<img src="https://openweathermap.org/img/wn/'+ weatherData.imgIcon + '@2x.png" alt="" width="100" height="100"></img>';
      console.log(conIconClima);
      document.getElementById("imgClima").innerHTML = conIconClima;

       //matriz de varibles data
    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).innerHTML = `<span>${weatherData[key]}</span>`
})

    //se traducen palabras en ingles al español para incertar en DOM
    if (weatherData.description == "Cielo: Rain"){
        document.getElementById("description").innerHTML = "Condición: Lluvia";
    } else if (weatherData.description == "Cielo: Clear"){
        document.getElementById("description").innerHTML = "Condición: Claro";
    } else if (weatherData.description == "Cielo: Thunderstorm"){
        document.getElementById("descriptionA").innerHTML = "Condición: Tormenta";
    } else if (weatherData.description == "Cielo: Drizzle"){
        document.getElementById("description").innerHTML = "Condición: Llovizna";
    } else if (weatherData.description == "Cielo: Snow"){
        document.getElementById("description").innerHTML = "Condición: Nieve";
    } else if (weatherData.description == "Cielo: Clear"){
        document.getElementById("description").innerHTML = "Condición: Claro";
    } else if (weatherData.description == "Cielo: Clouds"){
        document.getElementById("descriptionA").innerHTML = "Condición: Nubes";
    } else if (weatherData.description == "Cielo: Mist"){
        document.getElementById("description").innerHTML = "Condición: Neblina";
    } else if (weatherData.description == "Cielo: Smoke"){
        document.getElementById("description").innerHTML = "Condición: Humo";
    }  else if (weatherData.description == "Cielo: Haze"){
        document.getElementById("description").innerHTML = "Condición: Bruma";
    } else if (weatherData.description == "Cielo: Dust"){
        document.getElementById("description").innerHTML = "Condición: Polvo";
    } else if (weatherData.description == "Cielo: Fog"){
        document.getElementById("description").innerHTML = "Condición: Niebla";
    } else if (weatherData.description == "Cielo: Sand"){
        document.getElementById("description").innerHTML = "Condición: Arena";
    } else if (weatherData.description == "Cielo: Ash"){
        document.getElementById("description").innerHTML = "Condición: Ceniza";
    } else if (weatherData.descriptionA == "Cielo: Squall"){
        document.getElementById("description").innerHTML = "Condición: Chubasco";
    } else if (weatherData.description == "Cielo: Tornado"){
        document.getElementById("description").innerHTML = "Condición: Tornado";
    } else {
        document.getElementById("description").innerHTML = "Condición: Sin Datos";
    }
}

    //carga de datos
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
    navigator.geolocation.getCurrentPosition(fetchData2);
    fechaHoraActual();
}

    //para volver a regenerar posicion actual y datos actualizados
document.querySelector('#btnnuevaConsulta').addEventListener('click', regenerDatosClima);
function regenerDatosClima(){
    return onLoad(),
    location. reload();
        }

/**************************CLIMA PRONOSTICO 5 DIAS + POSICION************************************************************* */

const seteoDataClima1 = data1 => {
    console.log(data1); {

        const weatherDataDiaA = {
            fechaHoraPrediccionA: `${'Fecha y Hora Predicción:'} ${data1.list[6].dt_txt}`,
            temperatureA: `${'Temp:'} ${Math.round(data1.list[6].main.temp).toFixed(1)}${'°'}`,
            humidityA: `${'Humedad:'} ${(data1.list[6].main.humidity).toFixed(1)}${'%'}`,
            descriptionA: `${'Cielo:'} ${data1.list[6].weather[0].main}`,
            imgIconA: `${data1.list[6].weather[0].icon}`,
           }     
           console.log (weatherDataDiaA);

           const weatherDataDiaB = {
            fechaHoraPrediccionB: `${'Fecha y Hora Predicción:'} ${data1.list[14].dt_txt}`,
            temperatureB: `${'Temp:'} ${Math.round(data1.list[14].main.temp).toFixed(1)}${'°'}`,
            humidityB: `${'Humedad:'} ${(data1.list[14].main.humidity).toFixed(1)}${'%'}`,
            descriptionB: `${'Cielo:'} ${data1.list[14].weather[0].main}`,
            imgIconB: `${data1.list[14].weather[0].icon}`,
           }     
           console.log (weatherDataDiaB);

           const weatherDataDiaC = {
            fechaHoraPrediccionC: `${'Fecha y Hora Predicción:'} ${data1.list[22].dt_txt}`,
            temperatureC: `${'Temp:'} ${Math.round(data1.list[22].main.temp).toFixed(1)}${'°'}`,
            humidityC: `${'Humedad:'} ${(data1.list[22].main.humidity).toFixed(1)}${'%'}`,
            descriptionC: `${'Cielo:'} ${data1.list[22].weather[0].main}`,
            imgIconC: `${data1.list[22].weather[0].icon}`,
           }     
           console.log (weatherDataDiaC);

           //icono clima mapa predicción
                //dia a
         let conIconClimaA = '<img src="https://openweathermap.org/img/wn/'+ weatherDataDiaA.imgIconA + '@2x.png" alt="" width="100" height="100"></img>';
         console.log(conIconClimaA);
         document.getElementById("imgClimaA").innerHTML = conIconClimaA;
            //dia b
         let conIconClimaB = '<img src="https://openweathermap.org/img/wn/'+ weatherDataDiaB.imgIconB + '@2x.png" alt="" width="100" height="100"></img>';
         console.log(conIconClimaB);
         document.getElementById("imgClimaB").innerHTML = conIconClimaB;
            //dia c
            let conIconClimaC = '<img src="https://openweathermap.org/img/wn/'+ weatherDataDiaC.imgIconC + '@2x.png" alt="" width="100" height="100"></img>';
            console.log(conIconClimaC);
            document.getElementById("imgClimaC").innerHTML = conIconClimaC;

    
           //matriz de varibles data que se imprimen en DOM
        Object.keys(weatherDataDiaA).forEach(keyA => {
            document.getElementById(keyA).innerHTML = `<span>${weatherDataDiaA[keyA]}</span>`
    })
         Object.keys(weatherDataDiaB).forEach(keyB => {
        document.getElementById(keyB).innerHTML = `<span>${weatherDataDiaB[keyB]}</span>`
    })
        Object.keys(weatherDataDiaC).forEach(keyC => {
            document.getElementById(keyC).innerHTML = `<span>${weatherDataDiaC[keyC]}</span>`
        })

    }
}

/**************************DATOS FECHA Y HORA POSICION ACTUAL (DATA ZONE)************************************************************* */




function fechaHoraActual(){
     const separoDia = new Date();
    const date1 = separoDia.getDate();
    console.log(date1);

    const separoMes = new Date();
    const date2 = separoMes.getMonth();
    console.log(date2);
    
    const separoAnio = new Date();
    const date3 = separoAnio.getFullYear();
    console.log(date3);

    const fechaConsultaPa = date1 + "/" + date2 + "/" + date3;
    console.log(fechaConsultaPa);

    document.getElementById("fechaHoraActual").innerHTML = fechaConsultaPa
   
     }

/**************************API LUXON MEDIANTE DATOS  HORA POSICION ACTUAL (DATA ZONE)************************************************ 

const DateTime = luxon.DateTime;
const dt = DateTime.now();
console.log(dt.toISO())
console.log(dt.toUTC().toISO())
console.log(dt.toJSDate().toISOString())
console.log(new Date().toISOString())

*/

const outputs = document.querySelectorAll('output')

const tick = function(){

   outputs.forEach(output => {
        const tz = output.getAttribute("data-tz")
       
        const now = luxon.DateTime.now().setZone(tz)
       
        const format = luxon.DateTime.TIME_WITH_SHORT_OFFSET

        const formatoHora = now.toLocaleString(format)

        document.getElementById("fechaHoraActualLuxon").innerHTML = formatoHora

   })
   requestAnimationFrame(tick);
}

tick()



   