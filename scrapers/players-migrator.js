// const axios = require("axios").default;
const fs = require('fs');
const clubs = require("./clubs.json");
const players = require("./players.json");
const clubWithID = clubs.reduce((acc, club) => {
  acc[club._id["$oid"]] = club.name;
  return acc;
}, {});

(async () => {
  let finalData = players.map((player) => ({
    position: player.position,
    name: player.name,
    abv_name: player.abbv_name,
    kit_number: player.kit_number,
    clubName: clubWithID[player.club.$oid],
    country: player.country
  }));

  let data = JSON.stringify(finalData);
  fs.writeFileSync("players-with-clubs.json", data);
})();
