import { Game, GameDetails } from "./game.js";
import { GameDetailPage } from "./ui.js";

let detailsContainer = document.querySelector(".game-details-page .container");
let exitButton = document.querySelector(".exit-btn");

let loading = document.querySelector(".loading-spinner");

export async function displayGameDetails(id) {
  detailsContainer.innerHTML = "";

  loading.classList.remove("d-none");

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "0c7cf25608mshc07e319fd189ab8p14486ejsn8086c45563ea",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  );
  let response = await data.json();
  let game = new Game(
    response.id,
    response.title,
    response.genre,
    response.platform,
    response.short_description,
    response.thumbnail,
    response.game_url,
    response.publisher,
    response.developer,
    response.release_date
  );
  let gameDetails = new GameDetails(
    game,
    response.description,
    response.screenshots
  );
  let gameDetailPage = new GameDetailPage(gameDetails);
  detailsContainer.appendChild(gameDetailPage.render());

  loading.classList.add("d-none");
}
exitButton.addEventListener("click", function () {
  document.querySelector(".home-page").classList.remove("d-none");
  document.querySelector(".game-details-page").classList.add("d-none");
});
