const movieTitle = document.querySelector('#title');
const movieDirector = document.querySelector('#director');
const posterUrl = document.querySelector('#url');
const movieForm = document.querySelector('#movie-form');
const clearBtn = document.querySelector('#clear-btn');
const movieList = document.querySelector('#movie-list');


const storage = new Storage()

document.addEventListener('DOMContentLoaded', () => {
    updateMovieList()
});

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = movieTitle.value;
    const director = movieDirector.value;
    const url = posterUrl.value;

    if (title === '' || director === '' || url === '') {
        alert('Please fill in all fields');
    } else {
        const movie = new Movie(title, director, url);
        addMovie(movie);
        movieForm.reset();
        storage.saveMovie(movie);
    }
});

function addMovie(movie) {
    movieList.innerHTML += `
    <tr>
        <td><img class="border border-5" src="${movie.imgUrl}" width="100px"></td>
        <td>${movie.title}</td>
        <td>${movie.director}</td>
        <td>
            <button class="btn btn-close border border-5 border-danger"></button>
        </td>
    </tr>`;
}

clearBtn.addEventListener('click', () => {
    storage.clearMovies();
    movieList.innerHTML = '';
});

movieList.addEventListener('click', (e) => {
    let tableRow = e.target.parentElement.parentElement;
    if (e.target.classList.contains('btn-close')) {
        let movieIndex = 0;
        while (tableRow.previousElementSibling) {
            tableRow = tableRow.previousElementSibling;
            movieIndex++;
        }
        console.log(movieIndex);
        tableRow.remove();
        storage.removeMovie(movieIndex);
        updateMovieList()
    }
});

function updateMovieList(movies) {
    movies = storage.getMovies();
    movieList.innerHTML = '';
    movies.forEach(movie => {
        addMovie(movie);
    });
}


