
//GENERAR N° QUINI

let iniciar = confirm("Bienvenido al generador N° para jugada Quini 6, para iniciar haga click en ACEPTAR");

if (iniciar == true){

    const VAL_C1 = 5;
    const VAL_C2 = 60;
    

//let n1 = Math.ceil(Math.random() * (VAL_C2 - VAL_C1) + VAL_C1 );

let numerosGenerado = [];
for (let i=0; i < 6; i+=1) {

   
    let n1 = Math.ceil(Math.random() * 100);
    //console.log("N° Generado automaticamente : " + n1.toFixed(0));
        if (n1 < 45) {
            n1 = n1 ;
            console.log("N° Procesado para jugada : " + n1.toFixed(0));    
            numerosGenerado.push(n1.toFixed(0))
        } else if (n1 < 110) {
            n1 = (n1 - 25) / 2
            console.log("Nb° Procesado para jugada: " + n1.toFixed(0));
            numerosGenerado.push(n1.toFixed(0))
        } else {
            console.log("Nc° Procesado para jugada: " + n1.toFixed(0));
            numerosGenerado.push(n1.toFixed(0))
        }  
            
}

function comparar (a,b){return a-b};
console.log("N° Procesado para jugada arrays : " + numerosGenerado.sort(comparar)) ;
document.write('<div class="card_juego_2"><h5>"N° Procesado para jugada : ' + numerosGenerado.sort(comparar) + ' </h5></div>');

}
