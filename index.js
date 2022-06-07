
let nombre = prompt("Ingrese su nombre");
const h3 = document.getElementsByTagName("h3")[0];
h3.innerText = 'Bienvenido: ' + nombre; 

let seguro = parseInt(prompt("Ingrese el seguro que desea para su auto:  1- minimo, 2-basico, 3-medio, 4-alto, 5-total"));

let costoSeguro;

if (seguro === 1){
    const td = document.getElementsByTagName("td")[0]
    td.innerText = "Seguro mínimo";
    costoSeguro = 10000
}
else if (seguro === 2){
    td = document.getElementsByTagName("td")[0]
    td.innerText = "Seguro basico";
    costoSeguro = 20000
}

else if (seguro === 3){
    td = document.getElementsByTagName("td")[0]
    td.innerText = "Seguro medio";
    costoSeguro = 40000
}

else if (seguro === 4){
    td = document.getElementsByTagName("td")[0]
    td.innerText = "Seguro alto";
    costoSeguro = 70000
}

else if (seguro === 5){
    td = document.getElementsByTagName("td")[0]
    td.innerText = "Seguro total";
    costoSeguro = 100000
}

else{
    alert ('opción invalida')
}

const costo = document.getElementById("costo");
costo.innerText = "El costo es: " + costoSeguro;

let cantidadCuotas = parseInt(prompt('Ingrese la cantidad de cuotas para financiar'));  

    function calcularCuotas(){
        let totalEnCuotas = costoSeguro / cantidadCuotas;
        return totalEnCuotas;
    }

    const cuotas = document.getElementById("cuotas");
    cuotas.innerText= "Cantidad de cuotas elegidas: " + cantidadCuotas;

    const costoCuota = document.getElementById("costoCuotas");
    costoCuota.innerText = "Costo por cuota: " + calcularCuotas();

    const arr = [];

    let otrasOpciones = prompt('Desea agregar otros servicios? si/no para confirmar');
    let nuevasOpciones;

    if (otrasOpciones == "si") {

        const otroServicio = document.getElementById("confirmar");
        otroServicio.innerText = otrasOpciones;

    do {
        nuevasOpciones = prompt('lavado de auto, cambio de cubiertas, pintura, arreglo de motor, caja de cambios, 0 para finalizar');
        if (nuevasOpciones != 0){
            arr.push(nuevasOpciones);
        }
    } while(nuevasOpciones != 0);
     
     console.log('Tambien agregó: ', arr);

   

    let buscarServicio = prompt("Que servicio desea saber si incluyó?");

    let buscarElemento = arr.includes(buscarServicio);

    if(buscarElemento == true){
        console.log("Su servicio se encuentra incluido:", buscarServicio);
    }
    else{
        console.log("Su servicio no se encuentra incluido");
    }

}  
else {

        otroServicio = document.getElementById("confirmar");
        otroServicio.innerText = otrasOpciones;

        const serviciosExtra = document.getElementById("serviciosExtra");
        serviciosExtra.innerText = "-";

    alert('Gracias por elegirnos');
}
