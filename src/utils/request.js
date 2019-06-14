const axios = require("axios");

const get = url => {
  return axios.get(url, {
    headers: { Authorization: `Bearer ${process.env.API_KEY}` }
  });
};

module.exports = {
  get
};
