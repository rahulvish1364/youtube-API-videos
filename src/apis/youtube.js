import axios from "axios";
const KEY = "AIzaSyDZhS_dK_oNqXsFCmzNoajXBLCWJkQf-Nk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: 5, key: KEY },
});
