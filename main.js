let numberOfFilms = prompt("How many movies have you watched?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

const a = prompt('What was the last movie you watched?', '');
const b = prompt('How would you rate the film?', '');
const c = prompt('What was the last movie you watched?', '');
const d = prompt('How would you rate the film?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


