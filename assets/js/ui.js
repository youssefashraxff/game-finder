export async function getGames() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "0c7cf25608mshc07e319fd189ab8p14486ejsn8086c45563ea",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const data = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
    options
  );
  const response = await data.json();
  console.log(response);
}
