import axios from "axios";

export const tattoApi = axios.create({
  baseURL: "https://catalog.tattoobox.mediaserviceagency.com/api",
});

export const tattoApiSocial = axios.create({
  baseURL: "https://social.tattoobox.mediaserviceagency.com/api",
});

export const tattoApiIdentify = axios.create({
  baseURL: "https://identity.tattoobox.mediaserviceagency.com/api",
});
