document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
});

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
const result = document.querySelector('#result');
console.log('First Loaded')

function getActivity() {
    result.innerText = 'Loading...'
    fetch(` https://www.boredapi.com/api/activity/`)
        .then(res => res.json())
        .then(data => {
            result.innerText = data.activity
        })
        .catch(error => console.log('ERROR', error))
}


// ARRAY ITERATION (rad radMovies) for/of iteration

let radMovies = [
    "Goonies", "Terminator", "Predator", "Aliens", "Back to the Future", "Austin Powers"
];

window.addEventListener('load', () => {
    for (let i of radMovies) {
        console.log(i);
    }
    console.log("So many wonderful movies to enjoy!");

});






