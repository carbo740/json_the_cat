let breed = process.argv.slice(2);
const request = require("request");
let apiSite = `https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`;

request(apiSite, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
    return;
  }
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log("Breed not found. Please try another breed.");
    return;
  }
  console.log(data[0].description);

});