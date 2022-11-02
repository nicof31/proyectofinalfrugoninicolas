
//--------------PARTE LOGICA------------
        //utitilizacion concepto JSON y LocalStorage
let tareaList = [];

function addTareaToSystem(porden, pfecha, plinea, ptipo, ptiempo, pprecioHora, pcantRrhh){
    let newTarea = {
        orden : porden,
        fecha: pfecha,
        linea : plinea,
        tipo : ptipo,
        tiempo : ptiempo,
        precioHora : pprecioHora,
        cantidadRrhh : pcantRrhh,
    };
    console.log(newTarea);
    tareaList.push(newTarea);
    localStoragetareaList(tareaList);
}

function getTareaList(){
    let storedList= localStorage.getItem('localtareaList');
    if(storedList == null){
        tareaList = []; 
    }else{
        tareaList  = JSON.parse(storedList);
    }
    return tareaList ;
}

//GUARDO LA LISTA GENERADA POR LOCAL STORAGE
function localStoragetareaList(plist){
    localStorage.setItem('localtareaList', JSON.stringify(plist))
}

//--------------PARTE FUNCIONAL-------------

document.querySelector('#btnGuardartarea').addEventListener('click', guardarTarea);
drawTareasTabla();
document.querySelector('#btnBorrarDatos').addEventListener('click', borrarDatos);

function borrarDatos(){
        let storedList1= localStorage.getItem('localtareaList');
        if(storedList1 == null){
            tareaList = []; 
        }else{
            localStorage.clear(),
            sessionStorage.clear();
            location. reload();
        }
        return tareaList;
    }
    
    
function guardarTarea(){
    let sorden = document.querySelector('#txtOrden').value,
        sfecha = document.querySelector('#txtFecha').value,
        slinea = document.querySelector('#txtLinea').value,
        stipo = document.querySelector('#txtTipo').value,
        stiempo= document.querySelector('#txtTiempo').value,
        sprecioHora= document.querySelector('#txtPrecio').value,
        scantRrhh= document.querySelector('#txtCantidadRhhh').value;


    addTareaToSystem(sorden, sfecha, slinea, stipo, stiempo, sprecioHora, scantRrhh)
    drawTareasTabla();
}

function drawTareasTabla(){
    let list = getTareaList(),
     tbody = document.querySelector('#tablaTareas tbody');

     tbody.innerHTML = '';
     let precioTotalTarea = [];

     for (let i=0; i < list.length; i+=1){

        let row = tbody.insertRow(i),
            idCell = row.insertCell(0),
            ordenCell = row.insertCell(1),
            fechaCell = row.insertCell(2),
            lineaCell = row.insertCell(3),
            tipoCell = row.insertCell(4),
            tiempoCell = row.insertCell(5),
            precioHoraCell = row.insertCell(6),
            cantidadRrhhCell = row.insertCell(7),
            precioTareaCell = row.insertCell(8),
            selectCell = row.insertCell(9);

             //Inserto datos en columna
            idCell.innerHTML = precioTotalTarea.length+1;
            ordenCell.innerHTML = list[i].orden;
            fechaCell.innerHTML = list[i].fecha;
            lineaCell.innerHTML = list[i].linea;
            tipoCell.innerHTML = list[i].tipo;
            tiempoCell.innerHTML = list[i].tiempo;
            precioHoraCell.innerHTML = list[i].precioHora;
            cantidadRrhhCell.innerHTML = list[i].cantidadRrhh;
            precioTareaCell.innerHTML = parseFloat(list[i].tiempo) * (parseFloat(list[i].precioHora) * parseFloat(list[i].cantidadRrhh)) ;
               
            //Creo un select para id para agregar nueva funcionalidad
        let inputSelect = document.createElement('input');
            inputSelect.type = 'radio';
            inputSelect.value = precioTotalTarea.length+1;
            
            selectCell.appendChild(inputSelect);  
            tbody.appendChild(row);

            //Calculo precio por Tarea
            precioTotalTarea.push(parseFloat(precioTareaCell.innerHTML));
            console.log(precioTotalTarea);
            console.log("----------------------------------")

            //Calculo precio Total Tarea
            let sumaTotal = 0;
            for (let j = 0; j <  precioTotalTarea.length; j+=1) {
                sumaTotal +=  precioTotalTarea[j];
            }
            console.log(sumaTotal);
            document.getElementById("resultado").innerHTML="Las ganancias generadas son de: $ "+ sumaTotal.toFixed(2);
           
            //Calculo cantidad de tareas 
            let cantidadTareasDiarias = precioTotalTarea;
            console.log(cantidadTareasDiarias.length);
            document.getElementById("cantidadTareas").innerHTML="Cantidad de tareas generadas: "+ cantidadTareasDiarias.length;
        }
}
console.log("----------------------------------")





