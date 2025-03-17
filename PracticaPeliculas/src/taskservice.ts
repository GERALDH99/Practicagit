import { Peliculas } from "./model/ExportPeli";

let Movie: Peliculas[]=[];
let autoIncrementId=1;

export function addMovie(title: string, director: string): Peliculas{
    const newMovie: Peliculas= {
        id: autoIncrementId++,
        title: title,
        watched: false,
        director: director,
    }
    Movie.push(newMovie);
    return newMovie;
}

export function getMovie():Peliculas[] {
    return Movie;
}

export function completeMovie(id:number):boolean{
    const Movies= Movie.find((M)=>M.id===id);
    if(Movies){
        Movies.watched=true;
        return true;

    }
    return false;
}


export function editMovieTitle(id: number, newTitle: string): boolean {
    const movie = Movie.find((M) => M.id === id);
    if (movie) {
        movie.title = newTitle;
        return true;
    }
    return false;
}
export function editMovieDirector(id: number, newDirector: string): boolean {
    const director = Movie.find((M) => M.id === id);
    if (director) {
        director.director = newDirector;
        return true;
    }
    return false;
}