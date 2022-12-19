import { actionsTypes } from "../contants/actionsType";
import { authLogin, authLogout } from "../services/authService";

export const LoginStart = (user, history) => {
  return async (dispatch, getState) => {
    try {
      if (navigator.onLine) {
        let res = await authLogin(user);
        console.log("LoginStart", res);
        console.log("res?.data?.errCode === 0", res?.data?.errCode === 0);
        if (res?.data?.errCode === 0) {
          console.log(123);
          history.push("/");
          return dispatch({
            type: actionsTypes.LOGIN_SUSSESS,
            data: res?.data?.data,
          });
        } else {
          console.log(234);

          return dispatch({
            type: actionsTypes.LOGIN_FAILED,
            data: res?.data,
          });
        }
      } else {
        dispatch({
          type: actionsTypes.NO_INTERNET,
        });
      }
    } catch (error) {
      dispatch({
        type: actionsTypes.LOGIN_FAILED,
        data: {
          message: "Trục trặc server hihihaha!",
        },
      });
    }
  };
};

export const loadingLogin = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: actionsTypes.LOGIN_LOADING,
    });
  };
};

export const clearLogin = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: actionsTypes.LOGIN_CLEAR,
    });
  };
};

export const loginSuccess = (data) => {
  return async (dispatch, getState) => {
    dispatch({
      type: actionsTypes.LOGIN_SUSSESS,
      data: data,
    });
  };
};

export const Logout = (user) => {
  return async (dispatch, getState) => {
    try {
      console.log(user, "1");
      if (navigator.onLine) {
        let res = await authLogout(user);
        console.log(res);
        if (res?.data?.errCode === 0) {
          dispatch({
            type: actionsTypes.LOGOUT_SUCCESS,
          });
        } else {
          dispatch({
            type: actionsTypes.LOGOUT_FAILD,
          });
        }
      } else {
        dispatch({
          type: actionsTypes.NO_INTERNET,
        });
      }
    } catch (error) {
      dispatch({
        type: actionsTypes.LOGOUT_FAILD,
      });
    }
  };
};
