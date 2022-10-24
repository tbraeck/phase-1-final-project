
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
})

// ////  BUTTON EVENT LISTENER

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
    console.log('You now know the date and time! You are welcome!');
}

// UNICORN OBJECT/ KEYDOWN/ MOVEMENT

let unicorn = document.querySelector('.unicorn');
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
    console.log("This is keydown!")
})


// Kitty Eventlistener


document.getElementById('cutie').addEventListener("onmouseover", hideKitty);
document.getElementById('smooosh').addEventListener("onmouseout", showKitty);

function hideKitty() {
    document.getElementById("cutie").style.display = 'none';
    console.log('Kitty gone');
}

function showKitty() {
    document.getElementById("cutie").style.display = ''
    console.log('Kitty back!');
}


// API SEARCH BUTTON AND FETCH REQUEST

const fetchBtn = document.querySelector('#btnGet');
fetchBtn.addEventListener('click', getMovies);


console.log('First Loaded')
function getMovies() {
    fetch(` http://localhost:3000/movies/ `)
        .then(res => res.json())
        .then(movies => {
            let result = document.getElementById("result")
            result.innerHTML = ''
            for (let i = 0; i < Math.min(movies.length, 5); i++) {
                let movie = movies[i]
                result.innerHTML +=
                    `<p class="movieItem" >${movie.title} is a(n) ${movie.genre} movie that was released in ${movie.release}</p>`
            }
        })
        .catch(error => console.log('ERROR', error))

}


// //// Predator simple scroll event log

const showPred = window.onscroll = function (e) {
    console.log('raaaaaaaaar!');
}

const logBtn = document.getElementById('log');
logBtn.addEventListener('click', fetchData);