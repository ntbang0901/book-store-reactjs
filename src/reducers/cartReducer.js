import { actionsTypes } from "../contants/actionsType";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  numberCart: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_ALL_CART_ITEM_SUCCESS:
      return {
        ...state,
        cart: action.data,
        numberCart: action.data.length,
      };

    case actionsTypes.GET_ALL_CART_ITEM_FAILED:
      return {
        ...state,
        cart: [],
        numberCart: 0,
      };

    case actionsTypes.ADD_TO_CART_SUCCESS:
      toast.success("Thêm vào giỏ hàng thành công!");
      return {
        ...state,
        cart: [...payload],
        numberCart: cart.length,
      };

    case actionsTypes.DELETE_CART:
      const newState = state.cart.filter(
        (item) => item.isbn13 !== action.payload.isbn13
      );
      toast.success("Xóa sản phẩm khỏi giỏ hàng thành công!");
      localStorage.setItem(
        "CART",
        JSON.stringify({
          ...state,
          cart: [...newState],
          numberCart:
            state.numberCart > 0 ? state.numberCart - 1 : state.numberCart,
        })
      );
      return {
        ...state,
        cart: [...newState],
        numberCart:
          state.numberCart > 0 ? state.numberCart - 1 : state.numberCart,
      };

    case actionsTypes.UPDATE_CART:
      const itemInCartUpdate = state.cart.find(
        (item) => item.isbn13 === action.payload.isbn13
      );
      if (itemInCartUpdate) {
        itemInCartUpdate.quantity = action.payload.quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return { ...state, cart: [...state.cart] };

    case actionsTypes.UPDATE_IS_SELECT_CARTITEM:
      const updateSelectd = state.cart.find(
        (item) => item.isbn13 === action.payload.isbn13
      );
      if (updateSelectd) {
        updateSelectd.isSelected = action.payload.isSelected;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return { ...state, cart: [...state.cart] };

    case actionsTypes.SELECTED_ALL_CART_ITEM:
      const newCarts = [...action.payload];
      localStorage.setItem(
        "CART",
        JSON.stringify({ ...state, cart: [...newCarts] })
      );

      return { ...state, cart: [...newCarts] };

    default:
      return state;
  }
};
