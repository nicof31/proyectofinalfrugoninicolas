
//realizar conversión de monedas

let iniciar = confirm("Bienvenido al convertidor de divisas, si desea realizar la conversión haga click en ACEPTAR");

if (iniciar == true){
cambio();

function cambio () {
    let resultado;
    alert("Este conversor es de pesos argentinos a dólar estadounidenses");

    let pesosAr = parseFloat(prompt("Por favor ingreses cantidad PESOS ARGENTINOS que desea convertir"));
    let dolarUsa =  parseFloat(prompt("Por favor ingreses valor de cotización DOLAR USA que quiere utilizar"));
    console.log(pesosAr);
    console.log(dolarUsa);
    
    if(pesosAr > 0 && dolarUsa > 0){
         resultado = pesosAr / dolarUsa;   
    console.log("El valor de pesos argentinos ingresados $ " + pesosAr + " a un monto de conversión USD $ " + dolarUsa +  " equivale a USD $ " + resultado.toFixed(2));
    document.write('<div class="card_juego"><h5>El valor de pesos argentinos ingresados $ ' + pesosAr + ' a un monto de conversión USD $ ' + dolarUsa + ' equivale a USD $ ' + resultado.toFixed(2)+ '</h5></div>');
    console.log(resultado.toFixed(2));
}else {
    console.log("Vuelva a inicializar nuevamente la operación e ingresar valores mayor a 0");
}
    } 
    }else {
        console.log("Vuelva a recargar la pagina para iniciar nuevamente");
        alert("Vuelva a recargar la pagina para iniciar nuevamente");
}

