import * as actions from "../actions";
import { instance } from "../utils/request";
import { getRefreshToken } from "./authService";

const setup = (store) => {
  instance.interceptors.request.use(
    async (config) => {
      if (
        config.url.indexOf("/login") >= 0 ||
        config.url.indexOf("/refreshToken") >= 0 ||
        config.url.indexOf("/logout") >= 0
      ) {
        return config;
      }
      const token = await instance.getLocalAccessToken();
      config.headers["X-Token"] = token;
      console.log("token::", token);
      console.log("truoc khi request xuong server");
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // xử lý data sau khi response từ server

  const { dispatch, getState } = store;
  console.log("store", store);

  instance.interceptors.response.use(
    async (response) => {
      const config = response.config;
      if (
        config.url.indexOf("/login") >= 0 ||
        config.url.indexOf("/refreshtoken") >= 0
      ) {
        return response;
      }

      console.log("sau khi server response");
      console.log(response);
      const { code, message } = response.data;
      if (code && code === 401) {
        if (message && message === "jwt expired") {
          console.log("truong hop token het han:::", message);
          const refreshToken = await instance.getLocalRefreshToken();
          const {
            data: { data },
          } = await getRefreshToken(refreshToken);
          console.log(data);
          if (data.token) {
            config.headers["X-Token"] = data.token;
            await dispatch(actions.loginSuccess(data));
            return instance(config);
          } else {
            alert("Phiên đăng nhập hết hạn");
            const user = getState();
            dispatch(actions.Logout(user));
          }
        }
      }
      return response;
    },
    (err) => {
      alert("Phiên đăng nhập hết hạn");

      const user = getState().auth.currentUser;
      if (user) {
        dispatch(actions.Logout(user));
      }
      return Promise.reject(err);
    }
  );

  instance.getLocalAccessToken = async () => {
    const accessToken = await JSON.parse(
      window.localStorage.getItem("persist:user")
    ).token;

    return JSON.parse(accessToken);
  };

  instance.getLocalRefreshToken = async () => {
    const refreshToken = await JSON.parse(
      window.localStorage.getItem("persist:user")
    ).refreshToken;

    return JSON.parse(refreshToken);
  };
};

export default setup;
