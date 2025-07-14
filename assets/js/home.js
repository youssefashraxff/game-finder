import { GameCard } from "./ui.js";
import { Game } from "./game.js";

let cardsContainer = document.querySelector(".cards-container");
let navItems = document.querySelectorAll(".nav-link");

let wantedCategory = "";

export async function displayGames(category) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "0c7cf25608mshc07e319fd189ab8p14486ejsn8086c45563ea",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
    options
  );
  let response = await data.json();

  cardsContainer.innerHTML = "";

  for (let i = 0; i < response.length; i++) {
    let game = new Game(
      response[i].id,
      response[i].title,
      response[i].genre,
      response[i].platform,
      response[i].short_description,
      response[i].thumbnail,
      response[i].game_url,
      response[i].publisher,
      response[i].developer,
      response[i].release_date
    );
    let gameCard = new GameCard(game);
    cardsContainer.appendChild(gameCard.render());
  }
}

// ✅ Correct nav click handler
navItems.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove class from all nav items
    navItems.forEach((item) => item.classList.remove("active-nav"));

    // Add to the clicked one
    nav.classList.add("active-nav");

    const category = nav.textContent.trim().toLowerCase();
    displayGames(category);
  });
});
export function setActiveNav(category) {
  navItems.forEach((item) => {
    const text = item.textContent.trim().toLowerCase();
    if (text === category.toLowerCase()) {
      item.classList.add("active-nav");
    } else {
      item.classList.remove("active-nav");
    }
  });
}
