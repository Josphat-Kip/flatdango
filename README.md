# flatdango
In this challenge, I'm suppose to create a flatdango app.This is a movie theater which issuppose to display the tickets available, and movie films showing and at which time.



## setup
To get backend started, I run the below command in the console

json-server --watch db.json

Also I tested the server by visiting the below route in the browser
[http://localhost:3000/films](http://localhost:3000/films)





## Deliverables
1. Ensuring the followingfirst movie's details are seen when the page loads;
>Poster
>Title
>Runtime
>Showtime
>available tickets

Using the GET request enables to retrieve data.

2. See a menu for all movies on the left side of the page in the element when the page loads.

3. Buying a ticket for a movie where after clicking the "Buy Ticket" button where available tickets decreases when a ticket is purchase. When all tickets are sold, it should show sold out. 
To get the available tickets, it is the available capacity minus already sold tickets.