
//JUEGO PELEA ROCKY vs DRAGO

let combate = confirm("Bienvenido al combate ROCKY vs DRAGO, para comenzar haga click en ACEPTAR");

//FUERZA + CALCULO RANDOM

if(combate == true){

let fuerzaRocky = parseFloat(prompt("Por favor ingreses el valor de FUERZA que le quiere asignar a ROCKY para la pelea, valor valido entre 1 y 100"));
let fuerzaDrago = parseFloat(prompt("Por favor ingreses el valor de FUERZA que le quiere asignar a DRAGO para la pelea, valor valido entre 1 y 100"));

if(fuerzaRocky <= 100 && fuerzaDrago<= 100){
console.log(fuerzaRocky);
console.log(fuerzaDrago);

//POTENCIA DEL GOLPE + CALCULO RANDOM
const MIN_POTENCIA = Math.ceil(Math.random() * 10+10);
const MAX_POTENCIA = Math.ceil(Math.random() * 10+30);
let round = 0;

//solcita ingresar un valor para dar inicio al juego
let inicio = prompt("Por favor ingreses tipee inicio si quiere comenzar el juego");

if(inicio !=null){
switch(inicio.toLowerCase()){
        case "inicio": 
            console.log("Tipeo: " + inicio);
            document.write('<div class="card_juego"><h2>Incio Pelea</h2><img src="../imgf/iniciopelea.webp" /></div>');
            
while (fuerzaDrago > 0 && fuerzaRocky > 0){
    round = round + 1;
let golpeDrago = Math.ceil(Math.random() * (MAX_POTENCIA - MIN_POTENCIA) + MIN_POTENCIA);
console.log("Golpe Drago " + golpeDrago);
let golpeRocky = Math.ceil(Math.random() * (MAX_POTENCIA - MIN_POTENCIA ) + MIN_POTENCIA);
console.log("Golpe Rocky " + golpeRocky);

if(golpeDrago === golpeRocky){
    fuerzaRocky -= golpeDrago;
    fuerzaDrago -= golpeRocky;
}else if(golpeRocky > golpeDrago) {
    document.write('<div class="card_juego"><h5>Round N° ' + round + ': Fuerza Rocky:  ' + fuerzaRocky + ' vs ' + 'Fuerza Drago: '+ fuerzaDrago + '</h5><img src="../imgf/pegarocky.webp" /></div>');
    fuerzaDrago -= golpeRocky;
} else {
    fuerzaRocky -= golpeDrago;
    document.write('<div class="card_juego"><h5>Round N° ' + round + ': Fuerza Rocky:  ' + fuerzaRocky + ' vs ' + 'Fuerza Drago: '+ fuerzaDrago + '</h5><img src="../imgf/pegadrago.webp" /></div>');
}

document.write('<br>');
console.log("Round Nº " + round);
console.log("Fuerza Rocky " + fuerzaRocky);
console.log("Fuerza Drago " + fuerzaDrago);
}
default: 
console.log("RESULTADO COMBATE:");
}
} else if (inicio == null) {
    alert("PARA COMENZAR JUEGO DEBE TIPEAR INICIO");
}

if(fuerzaDrago === fuerzaRocky){
    console.log("Empate técnico por error de tipeo incio");
}else if(fuerzaDrago>0){
    console.log("Gano Drago");
    document.write('<div class="card_juego"><h5>Gano Drago</h5><img src="../imgf/ganodrago.webp" /></div>');
    document.write('<div class="card_juego"><h2>Fin pelea</h2><img src="../imgf/finpelea.webp" /></div>');
}else {
    console.log("Gano Rocky");
    document.write('<div class="card_juego"><h5>Gano Rocky</h5><img src="../imgf/ganorocky.webp" /></div>');
    document.write('<div class="card_juego"><h2>Fin pelea</h2><img src="../imgf/finpelea.webp" /></div>');
}
}else {
    alert("Vuelva a recargar la pagina para iniciar nuevamente, verifique de tipear los valores solicitados");
}
}
