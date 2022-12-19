import { actionsTypes } from "../contants/actionsType";

let data = JSON.parse(localStorage.getItem("persist:user"));

const initialState = {
  address: "",
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.LOGIN_SUSSESS:
      return {
        ...state,
        currentUser: action.data,
        isLogin: true,
        error: false,
      };

    case actionsTypes.LOGIN_FAILED:
      return {
        ...state,
        error: true,
      };

    case actionsTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        currentUser: null,
      };

    default:
      return state;
  }
};
