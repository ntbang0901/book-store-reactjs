import { actionsTypes } from "../contants/actionsType";
import { toast } from "react-toastify";

let data = JSON.parse(localStorage.getItem("persist:user"));

const initialState = {
  currentUser: null,
  token: null,
  refreshToken: null,
  isFetching: false,
  isLogin: false,
  error: false,
  message: null,
};

export const authReducer = (state = initialState, action) => {
  state.error = false;
  switch (action.type) {
    case actionsTypes.LOGIN_SUSSESS:
      return {
        ...state,
        ...action.data,
        isLogin: true,
        error: false,
        isFetching: false,
      };

    case actionsTypes.LOGIN_FAILED:
      return {
        ...state,
        error: true,
        message: action.data.message,
        isFetching: false,
      };

    case actionsTypes.LOGIN_LOADING:
      return {
        ...state,
        isFetching: true,
      };

    case actionsTypes.LOGIN_CLEAR:
      return {
        ...state,
        error: false,
        message: null,
      };

    case actionsTypes.UPDATE_TOKEN:
      return {
        ...state,
        token: action.data.token,
        refreshToken: action.data.refreshToken,
      };

    case actionsTypes.LOGOUT_SUCCESS:
      localStorage.removeItem("persist:user");
      localStorage.removeItem("persist:cart");
      return {
        ...initialState,
      };

    case actionsTypes.LOGOUT_FAILD:
      toast.warning("Logout FAILD");
      return {
        ...state,
      };
    case actionsTypes.NO_INTERNET:
      toast.warning("vui lòng kiểm tra lại đường truyền");

      return {
        ...state,
        isLogin: false,
        isFetching: true,
      };

    default:
      return state;
  }
};
