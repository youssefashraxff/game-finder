async function displayGames(category) {
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
  //   console.log(response[110]);

  for (let i = 0; i < response.length; i++) {
    console.log(response[i].title);
  }
}
export { displayGames };
