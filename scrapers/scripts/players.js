const axios = require("axios").default;
const clubs = require("./clubs.json");
const players = require("./players-with-clubs.json");
(async () => {
  const response = await axios.get("http://localhost:3000/clubs");
  const countriesResponse = await axios.get("http://localhost:3000/countries");
  const countries = countriesResponse.data.reduce((acc, item) => {
    acc[item.name] = item.id;
    return acc;
  }, {});
  const clubs = response.data.reduce((acc, item) => {
    acc[item.name] = item.id;
    return acc;
  }, {});
  players.map((player, index) => {
    const data = {
      ...player,
      clubs: clubs[player.clubName],
      country: countries[player.country],
      kit_number: player.kit_number.toString(),
    };

    // if (index < 4) {
    //   console.log(data);
    // }

    axios
          .post("http://localhost:3000/players", data)
          .then((item) => {})
          .catch((error) => {
            console.log(`${data.name} failed`, error);
      });
  });
})();
