import { instance } from "../utils/request";

export const authLogin = (user) => {
  return instance.post("user/login", {
    username: user.username,
    password: user.pwd,
  });
};

export const getRefreshToken = async (refreshToken) => {
  return await instance.post("user/refreshToken", {
    refreshToken,
  });
};

export const authLogout = (user) => {
  console.log(user);
  return instance.post("user/logout", { user });
};
