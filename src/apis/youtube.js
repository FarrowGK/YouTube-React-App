import axios from "axios";

const KEY = "AIzaSyCmQbq206tlBm-VVunV-RzobbH49_K3JQk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
