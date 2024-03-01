let numberOfFilm;

function start() {
    numberOfFilm = +prompt('Скільки фільмів ви вже подивилися?', '');

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('Скільки фільмів ви вже подивилися?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    private: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один із останніх переглянутих фільмів?', '');
        const b = prompt('На скільки його оцінете?', '');


        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--;

        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB < 10) {
        console.log('Переглянуто мало фільиів');
    } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
        console.log('Ви класичний глядач');
    } else if (personalMovieDB => 30) {
        console.log('Ви кіноман!');
    } else {
        console.log('Error!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();
