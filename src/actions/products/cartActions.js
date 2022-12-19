import { actionsTypes } from "../../contants/actionsType";
import { addCart, getAllCart, updateCart } from "../../services/cartService";

export function AddCart(item, quantity) {
  return async (dispatch, getState) => {
    try {
      let res = await addCart(item, quantity);
      if (res?.data?.errCode === 0) {
        dispatch({
          type: actionsTypes.ADD_TO_CART_SUCCESS,
          payload: {
            item,
            quantity,
          },
        });
      } else {
        dispatch({
          type: actionsTypes.ADD_TO_CART_FAILD,
        });
      }
    } catch (error) {
      dispatch({
        type: actionsTypes.ADD_TO_CART_FAILD,
      });
    }
  };
}

export function getCartItemStart() {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCart();
      if (res.data.error === 0) {
        dispatch({
          type: actionsTypes.GET_ALL_CART_ITEM_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionsTypes.GET_ALL_CART_ITEM_FAILED,
        });
      }
    } catch (error) {
      dispatch({
        type: actionsTypes.GET_ALL_CART_ITEM_FAILED,
      });
    }
  };
}

export function UpdateCart(item, quantity) {
  return async (dispatch, getState) => {
    try {
      let res = await updateCart(item, quantity);
      if (res.error === 0) {
        dispatch({
          type: actionsTypes.UPDATE_CART,
        });
      }
    } catch (error) {}
  };
}

export function UpdateIsSelectCartItem(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: actionsTypes.UPDATE_IS_SELECT_CARTITEM,
      payload,
    });
  };
}

export function selectedAllCartItems(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: actionsTypes.SELECTED_ALL_CART_ITEM,
      payload,
    });
  };
}

export function DeleteCart(item) {
  return async (dispatch, getState) => {
    let res = await addCart(item, -1);
    if (res.data.errCode === 0) {
      dispatch({
        type: actionsTypes.DELETE_CART,
        payload,
      });
    }
  };
}

export function IncreaseQuantity(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: actionsTypes.INCREASE_QUANTITY,
      payload,
    });
  };
}
export function DecreaseQuantity(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: actionsTypes.DECREASE_QUANTITY,
      payload,
    });
  };
}
