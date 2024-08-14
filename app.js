let NumeroSecreto = 0;
let Intentos = 0;
//let MaximoDeIntentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;

function limpiarCaja () {
    document.querySelector ("#ValordeUsuario").value = "";

}

function GenerarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1
     console.log(numeroGenerado);
     console.log(ListaNumerosSorteados);
     //si ya sorteamos todos los números
     if(ListaNumerosSorteados.length == NumeroMaximo) {
       asignarTextoyElemento("p", "ya se sortearon todos los números posibles"); 
     } else {
        //si el numero generado está incluido en la lista
        if(ListaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto();
        } else {
            ListaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
     }
}

function CondicionesIniciales () {
asignarTextoyElemento("h1","Juego del número secreto");
asignarTextoyElemento("p", `Indica un número del 1 al ${NumeroMaximo}`);
NumeroSecreto = GenerarNumeroSecreto();
Intentos = 1;
//MaximoDeIntentos = 5;

}

function asignarTextoyElemento (elemento, texto) {
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById("ValordeUsuario").value);
        
    if (NumeroDeUsuario === NumeroSecreto) {
        asignarTextoyElemento("p", `Acertaste el número en ${Intentos} ${Intentos === 1 ? "vez": "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (NumeroDeUsuario > NumeroSecreto) {
            asignarTextoyElemento("p", "El número secreto es menor");   
        } else {
            asignarTextoyElemento("p", "El número secreto es mayor");
        }
        Intentos ++;
        limpiarCaja ();

    /*if (Intentos > MaximoDeIntentos) {
        asignarTextoyElemento ("p", `Alcansaste el número máximo de ${MaximoDeIntentos} Intentos`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        
    }*/
    }
    return;
}

function ReiniciarJuego() { 
    limpiarCaja();
    CondicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

CondicionesIniciales();


