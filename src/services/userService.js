import { instance, publicApi } from "../utils/request";

export const getUserByUsername = () => {
  return instance.get(`user/info`);
};

export const getAllUser = () => {
  return instance.get(`user/getall`);
};

export const createUserService = (user) => {
  return publicApi.post(`user/newuser`, { user });
};

export const createOtp = (email) => {
  return publicApi.post(`user/createOtp`, { email });
};
export const verifyOTP = (email, otp) => {
  return publicApi.post(`user/verifyOTP`, { email, otp });
};

export const updateUser = (data) => {
  return instance.post(`user/updateinfo`, { data: data });
};
export const fogotPassword = (email, otp) => {
  return publicApi.post(`user/fogotpass`, { email, otp });
};
