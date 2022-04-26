function Storage(capacity) {

}

Storage.prototype.saveMovie = function (movie) {

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

Storage.prototype.getMovies = function () {
    if(localStorage.getItem("movieList") === null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("movieList"));
    }
}

Storage.prototype.clearMovies = function () {
    localStorage.removeItem("movieList");
}

Storage.prototype.removeMovie = function (index) {
    let movieList = JSON.parse(localStorage.getItem("movieList"));
    movieList.splice(index, 1);
    localStorage.setItem("movieList", JSON.stringify(movieList));
}
