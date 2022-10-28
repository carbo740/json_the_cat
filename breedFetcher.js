const request = require("request");


const fetchBreedDescription = function(breed, callback) {
  let apiSite = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(apiSite, (error, response, body) => {

    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Please try another breed.", null)
      return;
    }
    const desc = data[0].description;
    callback(null, desc);
  });
};

module.exports = { fetchBreedDescription };