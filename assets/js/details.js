let gameDetailsPage = document.querySelector(".game-details-page");
async function displayGameDetails(id) {
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
  gameDetailsPage.classList.remove("d-none");
}
export { displayGameDetails };
