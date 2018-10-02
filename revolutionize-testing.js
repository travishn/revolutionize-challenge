const axios = require("axios");

async function follow(url) {
  try {
    const response = await axios.get(url);
    
    if (response.data.follow) {
      console.log(response.data);
      follow(response.data.follow.replace('challenge?', 'challenge.json?'));
    } else {
      console.log(response.data.message);
    }
  } catch(err) {
      return console.log(err);
  }
}



follow("https://letsrevolutionizetesting.com/challenge.json");