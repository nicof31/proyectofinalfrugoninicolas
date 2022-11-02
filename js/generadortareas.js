
class Tarea {
    constructor(lineaProducto, tipoTarea, tiempoTarea, precioHoraTarea, cantidadTecnico){
        this.lineaProducto = lineaProducto;
        this.tipoTarea = tipoTarea;
        this.tiempoTarea = tiempoTarea;
        this.precioHoraTarea = precioHoraTarea;
        this.cantidadTecnico = cantidadTecnico;  
    }
}

for (let i=0; i < 1; i+=1) {

    const generadorTarea= [];
generadorTarea.push(new Tarea(prompt("Ingrese linea producto: PM / NM / GESTYA / VIESA / VITRAN / COBLOW"),prompt("Ingrese tipo de tarea: instalación / chequeo / reparación / desinstalación "),parseFloat(prompt("Ingrese tiempo (Hs) para realizar la tarea: ")),parseFloat(prompt("Ingrese precio de la hora de acuerdo a la tarea: ")) , parseFloat(prompt("Ingrese la cantidad de RRHH a utilizar para realizar tarea: "))))

generadorTarea.push(new Tarea(prompt("Ingrese linea producto: PM / NM / GESTYA / VIESA / VITRAN / COBLOW"),prompt("Ingrese tipo de tarea: instalación / chequeo / reparación / desinstalación "),parseFloat(prompt("Ingrese tiempo (Hs) para realizar la tarea: ")),parseFloat(prompt("Ingrese precio de la hora de acuerdo a la tarea: ")) ,parseFloat(prompt("Ingrese la cantidad de RRHH a utilizar para realizar tarea: "))))
  
generadorTarea.push(new Tarea(prompt("Ingrese linea producto: PM / NM / GESTYA / VIESA / VITRAN / COBLOW"),prompt("Ingrese tipo de tarea: instalación / chequeo / reparación / desinstalación "),parseFloat(prompt("Ingrese tiempo (Hs) para realizar la tarea: ")),parseFloat(prompt("Ingrese precio de la hora de acuerdo a la tarea: ")) ,parseFloat(prompt("Ingrese la cantidad de RRHH a utilizar para realizar tarea: "))))

console.log("-----------------------------");
console.log(generadorTarea);
console.log("-----------------------------");

console.log("--------map--------");

const lineaProducto = generadorTarea.map((item0) => item0.lineaProducto)
console.log(lineaProducto);

const tipoTarea = generadorTarea.map((item3) => item3.tipoTarea)
console.log(tipoTarea);

const tiempoTarea = generadorTarea.map((item) => item.tiempoTarea)
console.log(tiempoTarea);

const precioTarea = generadorTarea.map((item1) => item1.precioHoraTarea)
console.log(precioTarea);

const cantidadTecnico = generadorTarea.map((item2) => item2.cantidadTecnico)
console.log(cantidadTecnico);


console.log("------DATOS TAREA 1--------")

let lineaproductoT1 = lineaProducto[0];
console.log("Línea producto a intervenir: " + lineaproductoT1);

let tipotareaT1 = tipoTarea[0];
console.log("Tipo de tarea a realizar: " + tipotareaT1);

let tiempoT1 = tiempoTarea[0];
console.log("El tiempo para realizar la tarea es: " + tiempoT1 + "(Hs)");

let preciohoraT1 = precioTarea[0];
console.log("El precio por hora de mano de obra es: $ " + preciohoraT1);

let cantidadtecnicoT1 = cantidadTecnico[0];
console.log("La cantidad de técnicos para realizar la tarea es: " + cantidadtecnicoT1);

let preciomanoobrat1 = preciohoraT1 * (tiempoT1 * cantidadtecnicoT1);

console.log("El precio total de mano de obra es: $ " + preciomanoobrat1);


document.write('<div class="card_juego_3"><h2>DATOS TAREA 1</h2><br><h5>Línea producto a intervenir: ' +  lineaproductoT1 + '</h5><br><h5>Tipo de tarea a realizar: ' +  tipotareaT1 + '</h5><br><h5>El tiempo para realizar la tarea es: ' +  tiempoT1 + '  Hs</h5><br><h5>El precio por hora de mano de obra es: $ ' +  preciohoraT1 + '</h5><br><h5>La cantidad de técnicos para realizar la tarea es: ' +  cantidadtecnicoT1 + '</h5><br><h5>El precio total de mano de obra es: $  ' +  preciomanoobrat1 + '</h5><br></div>');


console.log("------DATOS TAREA 2-------")

let lineaproductoT2 = lineaProducto[1];
console.log("Línea producto a intervenir: " + lineaproductoT2);

let tipotareaT2 = tipoTarea[1];
console.log("Tipo de tarea a realizar: " + tipotareaT2);

let tiempoT2 = tiempoTarea[1];
console.log("El tiempo para realizar la tarea es: " + tiempoT2 + "(Hs)");

let preciohoraT2 = precioTarea[1];
console.log("El precio por hora de mano de obra es: $ " + preciohoraT2);

let cantidadtecnicoT2 = cantidadTecnico[1];
console.log("La cantidad de técnicos para realizar la tarea es: " + cantidadtecnicoT2);

let preciomanoobrat2 = preciohoraT2 * (tiempoT2 * cantidadtecnicoT2);

console.log("El precio total de mano de obra es: $ " + preciomanoobrat2);

document.write('<div class="card_juego_3"><h2>DATOS TAREA 2</h2><br><h5>Línea producto a intervenir: ' +  lineaproductoT2 + '</h5><br><h5>Tipo de tarea a realizar: ' +  tipotareaT2 + '</h5><br><h5>El tiempo para realizar la tarea es: ' +  tiempoT2 + '  Hs</h5><br><h5>El precio por hora de mano de obra es: $ ' +  preciohoraT2 + '</h5><br><h5>La cantidad de técnicos para realizar la tarea es: ' +  cantidadtecnicoT2 + '</h5><br><h5>El precio total de mano de obra es: $  ' +  preciomanoobrat2 + '</h5><br></div>');


console.log("------DATOS TAREA 3-------")

let lineaproductoT3 = lineaProducto[1];
console.log("Línea producto a intervenir: " + lineaproductoT2);

let tipotareaT3 = tipoTarea[2];
console.log("Tipo de tarea a realizar: " + tipotareaT3);

let tiempoT3 = tiempoTarea[2];
console.log("El tiempo para realizar la tarea es: " + tiempoT3 + "(Hs)");

let preciohoraT3 = precioTarea[2];
console.log("El precio por hora de mano de obra es: $ " + preciohoraT3);

let cantidadtecnicoT3 = cantidadTecnico[2];
console.log("La cantidad de técnicos para realizar la tarea es: " + cantidadtecnicoT3);

let preciomanoobrat3 = preciohoraT3 * (tiempoT3 * cantidadtecnicoT3);

console.log("El precio total de mano de obra es: $ " + preciomanoobrat3);

document.write('<div class="card_juego_3"><h2>DATOS TAREA 2</h2><br><h5>Línea producto a intervenir: ' +  lineaproductoT3 + '</h5><br><h5>Tipo de tarea a realizar: ' +  tipotareaT3 + '</h5><br><h5>El tiempo para realizar la tarea es: ' +  tiempoT3 + '  Hs</h5><br><h5>El precio por hora de mano de obra es: $ ' +  preciohoraT3 + '</h5><br><h5>La cantidad de técnicos para realizar la tarea es: ' +  cantidadtecnicoT3 + '</h5><br><h5>El precio total de mano de obra es: $  ' +  preciomanoobrat3 + '</h5><br></div>');

console.log("------DATOS GERENCIALES-------")

let ganaciasTaller = preciomanoobrat1 + preciomanoobrat2 + preciomanoobrat3

console.log("Las ganancias generadas son de: $ " + ganaciasTaller);

document.write('<div class="card_juego_3"><h2>DATOS GERENCIALES</h2><br><h3>Las ganancias generadas son de: $  '+ ganaciasTaller +'</h3><br></div>');


console.log("------------------------------")



}