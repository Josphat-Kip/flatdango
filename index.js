// Your code here
let ticketNum = document.getElementById('ticket-num')
let btn = document.getElementById('buy-ticket')

//DOM render functions
function renderOneMovie(movie) {
    //build movie
    let movieTitle = document.createElement('li')
    movieTitle.style.cursor = 'pointer';
    movieTitle.innerHTML = `<li>${movie.title}</li>`
    //add movie to DOM
    document.getElementById('films').appendChild(movieTitle)

    //event listener
    movieTitle.addEventListener('click', handlerMovie)
    //event handler on titles
    function handlerMovie(e) {
        e.preventDefault()
        document.getElementById('posterImg').innerHTML = `<img src = '${movie.poster}'>`
        document.getElementById('title').innerHTML = `${movie.title}`.toUpperCase()
        document.getElementById('rt').innerHTML = `${movie.runtime}`
        document.getElementById('film-info').innerHTML = `${movie.description}`
        document.getElementById('showtime').innerHTML = `${movie.showtime}`        
        ticketNum.innerHTML = `${movie.capacity - movie.tickets_sold}`
    }

    //event listener on the buy button
    btn.addEventListener('click', handleClick)

    //event handler on click
    function handleClick(e) {
        e.preventDefault()
        console.log(`${movie.capacity - movie.tickets_sold}`);
    }
}



//fetch requests
//get fetch for movie resource
function getFilm() {
    fetch('http://localhost:3000/films')
       .then(res => res.json())
       .then(films => films.forEach(movie => renderOneMovie(movie)))
}

//Initial Render
//get data and render our movie to the DOM
function initialize() {
    getFilm()
}
initialize()