
class cuenta {
    constructor(nombre, numeroEntrada) {
        this.nombre = nombre;
        this.numeroEntrada = numeroEntrada;
        this.miembros = [];
    }
    agregarMiembros(miembro) {
        this.miembros.push(miembro);
    }
}

class miembro {
    constructor(usuario, contrasenia) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
    }
}


// =======================================================================

const nombre = prompt("ingrese nombre de la cuenta");
const numeroEntrada = prompt("ingrese numero de entrada");


const cuentaP = new cuenta(nombre,numeroEntrada)

console.log(cuentaP);


// ======================================================================

// const cuenta1 = new Cuenta("Juan", "silvre", 20)
// const cuenta2 = new Cuenta("jose", "Gold", 30)
// const cuenta3 = new Cuenta("Ana", "Gold",10)
// const cuenta4 = new Cuenta("Nico", "silver", 05)


// eureka.agregarCuenta(cuenta1);
// eureka.agregarCuenta(cuenta2);
// eureka.agregarCuenta(cuenta3);
// eureka.agregarCuenta(cuenta4);

// =======================================================================

let opcion = prompt("ingrese Y para agregar cuenta y enter para salir ")

while (opcion == "Y") {
    const usuario = prompt("ingrese nombre de usuario")
    const contrasenia = prompt("ingrese contrasenia")

    const miembroCreada = new cuenta (usuario, contrasenia);
    cuentaP.agregarMiembros(miembroCreada);
    opcion = prompt("ingrese Y para agregar cuenta y enter para salir")
}

console.log(cuentaP.miembros)


// Juego ==================================================================

const listaJugadores = [];
let jugadores = parseInt(prompt("Ingresar Numero de Jugadores"));
do{
   let entrada = prompt("Ingresar nombre");
   listaJugadores.push(entrada.toUpperCase());
   console.log(listaJugadores);
}while(listaJugadores.length != jugadores)

 

let pregunta1 = prompt("Que animal sos?: opcion A,B,C o D");
if (pregunta1 = "A") {
    alert("Sos un Perro")
} else if (pregunta1 = "B") {
    alert("Sos un Gato")
} else if (pregunta1 = "C") {
    alert("Sos un Hamster")
} else if (pregunta1 = "D") {
    alert("Sos un Loro")
} else if (pregunta1 !== "A" || "B" || "C" || "D") {
    alert("elija una de las 4 opciones")
}
let pregunta2 = parseInt(prompt("Que lugar te gusta mas?: elija un numero del 1 al 100"));
if (pregunta2 <= 25) {
    alert("tu lugar favorito es la Playa")
} else if (pregunta2 > 25 && pregunta2 <= 50) {
    alert("tu lugar favorito es la Montania")
} else if (pregunta2 > 50 && pregunta2 <= 75) {
    alert(" tu lugar favorito es el Desierto")
} else if (pregunta2 > 75 && pregunta2 <= 100) {
    alert(" tu lugar favorito es la Ciudad")
}

let pregunta3 = prompt("Festividad favorita?,elija  uno de los simbolos +,-,/,*")
while (pregunta3 != Number) {
    switch (pregunta3) {
        case "+":
            alert("Navidad");
            break;
        case "-":
            alert("Halloween");
            break;
        case "/":
            alert("Carnaval");
            break;
        case "*":
            alert("Año Nuevo");
            break;
    }
    break;
}


