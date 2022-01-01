import axios, { Axios, AxiosError } from "axios";

class API {
  api: Axios;

  constructor() {
    this.api = axios.create();

    this.setBaseURL();
    this.setAuthorization();
    this.setInterceptor();
  }

  setBaseURL() {
    this.api.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
  }

  setAuthorization() {
    if (typeof window !== "undefined") {
      const accessToken = window.localStorage.getItem("accessToken");
      const authorization = accessToken ? `Bearer ${accessToken}` : "";
      this.api.defaults.headers.common["Authorization"] = authorization;
    }
  }

  setInterceptor() {
    this.api.interceptors.response.use(
      (res) => res,
      async (error: AxiosError) => {
        const { config, response } = error;

        if (
          response?.status === 401 &&
          window.localStorage.getItem("accessToken")
        ) {
          const accessToken = await this.refresh();
          this.setAuthorization();

          if (accessToken) {
            return axios({
              ...config,
              headers: { Authorization: `Bearer ${accessToken}` },
            });
          }
        }

        return Promise.reject(error);
      }
    );
  }

  async refresh() {
    try {
      const response = await this.api.post("/auth/refresh", {
        refreshToken: window.localStorage.getItem("refreshToken"),
      });
      const accessToken = response.data.value.accessToken;
      window.localStorage.setItem("accessToken", accessToken);

      return accessToken;
    } catch {
      clearLocalstorage();

      return null;
    }
  }
}

function clearLocalstorage() {
  window.localStorage.removeItem("accessToken");
  window.localStorage.removeItem("refreshToken");
}

// 이름을 뭘로 해야할지..
export const apiSetting = new API();
export const api = apiSetting.api;
