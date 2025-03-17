"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovie = addMovie;
exports.getMovie = getMovie;
exports.completeMovie = completeMovie;
exports.editMovieTitle = editMovieTitle;
exports.editMovieDirector = editMovieDirector;
let Movie = [];
let autoIncrementId = 1;
function addMovie(title, director) {
    const newMovie = {
        id: autoIncrementId++,
        title: title,
        watched: false,
        director: director,
    };
    Movie.push(newMovie);
    return newMovie;
}
function getMovie() {
    return Movie;
}
function completeMovie(id) {
    const Movies = Movie.find((M) => M.id === id);
    if (Movies) {
        Movies.watched = true;
        return true;
    }
    return false;
}
function editMovieTitle(id, newTitle) {
    const movie = Movie.find((M) => M.id === id);
    if (movie) {
        movie.title = newTitle;
        return true;
    }
    return false;
}
function editMovieDirector(id, newDirector) {
    const director = Movie.find((M) => M.id === id);
    if (director) {
        director.director = newDirector;
        return true;
    }
    return false;
}
