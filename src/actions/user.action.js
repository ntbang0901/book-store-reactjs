import { LoginStart } from "./authAction";
import { actionsTypes } from "../contants/actionsType";
import { updateUser, verifyOTP } from "../services/userService";

export const updateUserStart = (user, otp, history) => {
  return async (dispatch, getState) => {
    try {
      let res = await updateUser(user.username, otp);

      if (res?.data?.errCode === 0) {
        dispatch(LoginStart(user, history));
        dispatch({
          type: actionsTypes.UPDATE_USER_SUCCESS,
        });
      }
    } catch (error) {
      dispatch({
        type: actionsTypes.UPDATE_USER_FAILD,
      });
    }
  };
};
