//fetching data
fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((data) => {
    const firstFilm = data.find((obj) => obj.id == 1);
    

    //Here is to display the poster
    const posterDiv = document.getElementById("moviePoster");
    let imageElement = document.createElement("img");

    imageElement.src = firstFilm.poster;
    imageElement.alt = "Poster image";
    imageElement.width = "300";
    imageElement.height = "400";
    posterDiv.appendChild(imageElement);

    //Here is to display title of first film.
    const titleAndRuntime = document.getElementById("titleAndRuntime");
    let filmTitle = document.createElement("p");
    let filmRuntime = document.createElement("p");

    filmTitle.innerText = firstFilm.title;
    filmRuntime.innerText = `${firstFilm.runtime} minutes`;
    titleAndRuntime.appendChild(filmTitle);
    titleAndRuntime.appendChild(filmRuntime);

    const moreDetails = document.getElementById("moreDetails");
    let filmDescription = document.createElement("p");
    let showtimeBtn = document.createElement("button");

    let remTickets = firstFilm.capacity - firstFilm.tickets_sold;

    let spanElement = document.createElement("span");
    let ticketBtn = document.createElement("button");
    let breakElement = document.createElement("br");

    showtimeBtn.innerText = firstFilm.showtime;
    filmDescription.innerText = firstFilm.description;
    spanElement.innerText = `${remTickets} remaining tickets`;
    ticketBtn.innerText = "Buy ticket";

    moreDetails.appendChild(filmDescription);
    moreDetails.appendChild(showtimeBtn);
    moreDetails.appendChild(spanElement);
    moreDetails.appendChild(breakElement);
    moreDetails.appendChild(ticketBtn);

    ticketBtn.addEventListener("click", () => {
      if (remTickets === 1) {
      
        ticketBtn.innerText = "Sold out";
        spanElement.innerText = ``;
      } else {
        --remTickets;
      
        spanElement.innerText = `${remTickets} remaining tickets`;
      }
    });
  });

function getFilms() {
  fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then(renderFilms);
}
getFilms();

function renderFilms(films) {
  films.forEach(filmDetails);
}

function filmDetails(details) {
  const titlesElement = document.getElementById("titles");

  let listElem = document.createElement("li");
  listElem.innerText = details.title;

  titlesElement.appendChild(listElem);
}
