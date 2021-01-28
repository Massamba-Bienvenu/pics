import axios from "axios";

//Create an instance of axios client with a couple of methods
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID J4pBgLUh6sIOAlWPeXqRwU9dBhnhhNp__THLKP6hJsE",
  },
});
