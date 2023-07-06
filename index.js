
// ////  BUTTON EVENT LISTENER

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

// UNICORN OBJECT/ KEYDOWN/ MOVEMENT

let unicorn = document.querySelector('#uni');
let moveBy = 20;

window.addEventListener('load', () => {
    unicorn.style.position = 'absolute';
    unicorn.style.left = 0;
    unicorn.style.top = 0;
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case "ArrowLeft":
            unicorn.style.left = parseInt(unicorn.style.left) - moveBy + 'px';
            break;
        case "ArrowRight":
            unicorn.style.left = parseInt(unicorn.style.left) + moveBy + 'px';
            break;
        case "ArrowUp":
            unicorn.style.top = parseInt(unicorn.style.top) - moveBy + 'px';
            break;
        case "ArrowDown":
            unicorn.style.top = parseInt(unicorn.style.top) + moveBy + 'px';
            break;
    }

})


// Kitty Eventlistener
document.getElementById('cutie').addEventListener("onmouseover", hideKitty);

function hideKitty() {
    document.getElementById("cutie").style.display = 'none';
}
function showKitty() {
    document.getElementById("cutie").style.display = ''
}


// API SEARCH BUTTON AND FETCH REQUEST

const fetchBtn = document.querySelector('#btnGet');
fetchBtn.addEventListener('click', getMovies);
let movies;


async function getMovies() {
    if (!movies) {
        await fetch(` http://localhost:3000/movies/ `)
            .then((response) => response.json())
            .then((data) => {
                movies = data;
            })
            .catch(error => console.log('ERROR', error))
    }

    let result = document.getElementById('result');
    result.innerHTML = '';
    movies.shuffle().forEach((movie) => {
        result.innerHTML +=
            `<p class="movieItem" >${movie.title} is a(n) ${movie.genre} movie that was released in ${movie.release}</p>`
    })
}

function shuffle() {
    return movies.sort((a, b) => 0.5 - Math.random());
}



