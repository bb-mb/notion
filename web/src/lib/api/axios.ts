import axios, { Axios } from "axios";

class API {
  api: Axios;

  constructor() {
    this.api = axios.create();

    this.setBaseURL();
    this.setAuthorization();
  }

  setBaseURL() {
    this.api.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
  }

  setAuthorization() {
    if (typeof window !== "undefined") {
      this.api.defaults.headers.common["Authorization"] =
        window.localStorage.getItem("accessToken") || "";
    }
  }
}

// 이름을 뭘로 해야할지..
export const apiSetting = new API();
export const api = apiSetting.api;
