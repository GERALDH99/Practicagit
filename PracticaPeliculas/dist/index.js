"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const taskservice_1 = require("./taskservice");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function showMenu() {
    console.log(`
    ============================= Menu de Peliculas =================================
    1. Listar Peliculas
    2. Agregar Peliculas
    3. Marcar Pelicula como vista
    4. Editar nombre de la pelicula
    5. Editar director de la pelicula
    6. Salir        
        `);
}
function handleUserChoice(choice) {
    switch (choice) {
        case "1":
            const movie = (0, taskservice_1.getMovie)();
            let result = movie.map((item) => {
                let result = {
                    id: item.id,
                    title: item.title,
                    director: item.director,
                    watched: item.watched ? "Vista" : "No vista",
                };
                return result;
            });
            console.table(result);
            promptUser();
            break;
        case "2":
            rl.question("Ingrese el titulo de la pelicula: ", (title) => {
                rl.question("Ingrese el director de la pelicula: ", (director) => {
                    (0, taskservice_1.addMovie)(title, director);
                    console.log("Pelicula agregada correctamente\n");
                    promptUser();
                });
            });
            break;
        case "3":
            rl.question("Ingrese el ID de la tarea a completar: ", (idTask) => {
                const id = parseInt(idTask);
                const success = (0, taskservice_1.completeMovie)(id);
                if (success) {
                    console.log("!Tarea completada\n");
                }
                else {
                    console.log("No se encontro una tarea con ese ID.\n");
                }
                promptUser();
            });
            break;
        case "4":
            rl.question("Ingrese el ID de la pelicula a editar: ", (idTask) => {
                const id = parseInt(idTask);
                rl.question("Ingrese el nuevo titulo de la pelicula: ", (newTitle) => {
                    const success = (0, taskservice_1.editMovieTitle)(id, newTitle);
                    if (success) {
                        console.log("Titulo de la pelicula editado correctamente\n");
                    }
                    else {
                        console.log("No se encontro una pelicula con ese ID.\n");
                    }
                    promptUser();
                });
            });
            break;
        case "5":
            rl.question("Ingrese el ID de la director a editar: ", (idTask) => {
                const id = parseInt(idTask);
                rl.question("Ingrese el nuevo director de la pelicula: ", (newDirector) => {
                    const success = (0, taskservice_1.editMovieDirector)(id, newDirector);
                    if (success) {
                        console.log("Director de la pelicula editado correctamente\n");
                    }
                    else {
                        console.log("No se encontro una Director con ese ID.\n");
                    }
                    promptUser();
                });
            });
            break;
        case "6":
            console.log("Saliendo del programa....");
            rl.close();
            break;
        default:
            console.log("Opción no válida. Inténtalo de nuevo.\n");
            break;
    }
}
function promptUser() {
    showMenu();
    rl.question("Selecione una opcion: ", (choice) => {
        handleUserChoice(choice);
    });
}
promptUser();
