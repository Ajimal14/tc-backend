const axios = require("axios").default;
const clubs = require("./clubs.json");
(async () => {
  const response = await axios.get("http://localhost:3000/leagues");
  const list = response.data.reduce((acc, item) => {
    if (item.countries && item.countries.length > 0) {
      acc[item.countries[0].name] = item.id;
    }
    return acc;
  }, {});
  clubs.map((club) => {
    const data = {
      name: club.name,
      logo: "",
      abv_name: club.abbv_name,
      manager: club.manager,
      kit_sponsor: "",
      instagram: "",
      club_website: "",
      city: "",
      league: list[club.country],
    };
    axios
      .post("http://localhost:3000/clubs", data)
      .then((item) => {})
      .catch((error) => {
        console.log(`${data.name} failed`, error);
      });
  });
})();
