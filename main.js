const numberOfFilm = +prompt('Скільки фільмів ви вже подивилися?');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один із останніх переглянутих фільмів?');
const b = prompt('На скільки його оцінете?');
const c = prompt('Один із останніх переглянутих фільмів?');
const d = prompt('На скільки його оцінете?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = b;

console.log(personalMovieDB);
