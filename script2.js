
// Clase PS4
class PS4 {
    constructor(modelo, color, almacenamiento) {
        this.modelo = modelo;
        this.color = color;
        this.almacenamiento = almacenamiento;
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        console.log("La PS4 está encendida.");
    }

    apagar() {
        this.encendido = false;
        console.log("La PS4 está apagada.");
    }

    jugar(juego) {
        if (this.encendido) {
            console.log(`Jugando a ${juego} en la PS4.`);
        } else {
            console.log("La PS4 está apagada. Enciéndela primero.");
        }
    }
}

// Clase Mesa de Escritorio
class MesaEscritorio {
    constructor(material, color, numeroCajones) {
        this.material = material;
        this.color = color;
        this.numeroCajones = numeroCajones;
    }

    abrirCajon(numero) {
        if (numero > 0 && numero <= this.numeroCajones) {
            console.log(`Abriendo el cajón ${numero}.`);
        } else {
            console.log("Este escritorio no tiene ese número de cajón.");
        }
    }

    limpiar() {
        console.log("Limpiando la mesa de escritorio.");
    }

    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
        console.log(`La mesa ahora es de color ${nuevoColor}.`);
    }
}

// Clase Laptop
class Laptop {
    constructor(marca, procesador, ram) {
        this.marca = marca;
        this.procesador = procesador;
        this.ram = ram;
        this.encendida = false;
    }

    encender() {
        this.encendida = true;
        console.log("La laptop está encendida.");
    }

    apagar() {
        this.encendida = false;
        console.log("La laptop está apagada.");
    }

    abrirPrograma(programa) {
        if (this.encendida) {
            console.log(`Abriendo ${programa} en la laptop.`);
        } else {
            console.log("La laptop está apagada. Enciéndela primero.");
        }
    }
}

// Crear objetos con diferentes valores
const ps4Pro = new PS4("Pro", "Negra", "1TB");
const ps4Slim = new PS4("Slim", "Blanca", "500GB");

const mesaMadera = new MesaEscritorio("Madera", "Marrón", 3);
const mesaMetal = new MesaEscritorio("Metal", "Negro", 2);

const laptopDell = new Laptop("Dell", "Intel Core i7", "16GB");
const laptopHP = new Laptop("HP", "AMD Ryzen 5", "8GB");

// Probar métodos
console.log("\n--- PS4 ---");
ps4Pro.encender();
ps4Pro.jugar("Spider-Man");
ps4Pro.apagar();

console.log("\n--- Mesa de Escritorio ---");
mesaMadera.abrirCajon(2);
mesaMadera.limpiar();
mesaMadera.cambiarColor("Blanco");

console.log("\n--- Laptop ---");
laptopDell.encender();
laptopDell.abrirPrograma("Visual Studio Code");
laptopDell.apagar();
