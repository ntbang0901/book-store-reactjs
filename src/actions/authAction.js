import { actionsTypes } from "../contants/actionsType";
import { authLogin, authLogout } from "../services/authService";

export const LoginStart = (user, history) => {
  return async (dispatch, getState) => {
    try {
      if (navigator.onLine) {
        let res = await authLogin(user);
        if (res?.data?.errCode === 0) {
          history.push("/");
          return dispatch({
            type: actionsTypes.LOGIN_SUSSESS,
            data: res?.data?.data,
          });
        } else {
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

export const Logout = (user, history) => {
  return async (dispatch, getState) => {
    try {
      if (navigator.onLine) {
        let res = await authLogout(user);
        if (res?.data?.errCode === 0) {
          if (history) {
            history.push("/login");
          }
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
