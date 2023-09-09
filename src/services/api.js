import axios from "axios";

export const Shoes_Api = axios.create({
  baseURL: "https://api.brchallenges.com/",
});
