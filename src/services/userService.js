import { instance, publicApi } from "../utils/request";

export const getUserByUsername = () => {
  return instance.get(`user/info`);
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

export const sendOtpFogot = (data) => {
  return publicApi.post(`user/optfogotpass`, { data: data });
};

export const verifyOTPFogot = (email, otp) => {
  return publicApi.post(`user/verifyotpfogotpass`, { email, otp });
};
export const updatePassFogot = (data) => {
  return publicApi.post(`user/updatepasss`, { data: data });
};
