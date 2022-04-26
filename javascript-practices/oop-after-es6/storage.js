class Storage {
    static saveMovie = function (movie) {

        if (localStorage.getItem("movieList") === null) {
            let movieList = [];
            movieList.push(movie);
            localStorage.setItem("movieList", JSON.stringify(movieList));
        } else {
            let movieList = JSON.parse(localStorage.getItem("movieList"));
            movieList.push(movie);
            localStorage.setItem("movieList", JSON.stringify(movieList));
        }
    }

    static getMovies = function () {
        if (localStorage.getItem("movieList") === null) {
            return [];
        } else {
            return JSON.parse(localStorage.getItem("movieList"));
        }
    }

    static clearMovies = function () {
        localStorage.removeItem("movieList");
    }

    static removeMovie = function (index) {
        let movieList = JSON.parse(localStorage.getItem("movieList"));
        movieList.splice(index, 1);
        localStorage.setItem("movieList", JSON.stringify(movieList));
    }
}
