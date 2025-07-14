import { GameCard } from "./ui.js";
import { Game } from "./game.js";
import { displayGameDetails } from "./details.js";

let cardsContainer = document.querySelector(".cards-container");
let mainPage = document.querySelector(".home-page");
let gameDetailsPage = document.querySelector(".game-details-page");

let loading = document.querySelector(".loading-spinner");

let navItems = document.querySelectorAll(".nav-link");

export async function displayGames(category) {
  loading.classList.remove("d-none");

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
  let allGames = document.querySelectorAll(".main .game-card");
  allGames.forEach((selectedGame) => {
    selectedGame.addEventListener("click", function () {
      console.log(selectedGame.getAttribute("data-id"), "CLicked");
      mainPage.classList.add("d-none");
      gameDetailsPage.classList.remove("d-none");
      displayGameDetails(selectedGame.getAttribute("data-id"));
    });
  });
  loading.classList.add("d-none");
}

// Navbar Handle
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
