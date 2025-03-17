import * as readline from "readline";
import { addMovie, getMovie, completeMovie, editMovieTitle, editMovieDirector } from "./taskservice";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function showMenu() {
    console.log(`
    ============================= Menu de Peliculas =================================
    1. Listar Peliculas
    2. Agregar Peliculas
    3. Marcar Pelicula como vista
    4. Editar nombre de la pelicula
    5. Editar director de la pelicula
    6. Salir        
        `)
}


function handleUserChoice(choice: string) {
    switch (choice) {
        case "1":
            const movie = getMovie();
            let result = movie.map((item) => {
                let result: any = {
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
                    addMovie(title, director);
                    console.log("Pelicula agregada correctamente\n");
                    promptUser();
                });
            });
            break;
        case "3":
            rl.question("Ingrese el ID de la tarea a completar: ", (idTask) => {
                const id = parseInt(idTask);
                const success = completeMovie(id);
                if (success) {
                    console.log("!Tarea completada\n");

                } else {
                    console.log("No se encontro una tarea con ese ID.\n");

                }
                promptUser();

            });
            break;
        case "4":
            rl.question("Ingrese el ID de la pelicula a editar: ", (idTask) => {
                const id = parseInt(idTask);
                rl.question("Ingrese el nuevo titulo de la pelicula: ", (newTitle) => {
                    const success = editMovieTitle(id, newTitle);
                    if (success) {
                        console.log("Titulo de la pelicula editado correctamente\n");
                    } else {
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
                    const success = editMovieDirector(id, newDirector);
                    if (success) {
                        console.log("Director de la pelicula editado correctamente\n");
                    } else {
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
    })
}
promptUser();