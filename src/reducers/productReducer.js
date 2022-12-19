import { actionsTypes } from "../contants/actionsType";

const initialState = {
  products: [],
  productDetail: {},
  resultSearch: {
    total: 0,
    result: [],
  },
  status: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
      };
    case actionsTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        products: [],
      };

    case actionsTypes.FETCH_PRODUCTDETAIL_SUCCESS:
      return {
        ...state,
        productDetail: action.data,
        status: "success",
      };

    case actionsTypes.FETCH_PRODUCTSDETAIL_FAILED:
      return {
        ...state,
        productDetail: {},
        status: "failed",
      };

    case actionsTypes.FETCH_RESULTSEARCH_SUCCESS:
      return {
        ...state,
        resultSearch: {
          total: action.data.total,
          result: action.data.data,
        },
        status: "success",
      };

    case actionsTypes.UPDATE_RESULTSEARCH_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        resultSearch: {
          ...state.resultSearch,
          result: [...state.resultSearch.result, ...action.data.data],
        },
        status: "success",
      };

    case actionsTypes.FETCH_RESULTSEARCH_FAILED:
      return {
        ...state,
        resultSearch: {
          ...state.resultSearch,
          result: [],
        },
        status: "failed",
      };

    case actionsTypes.REMOVE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: {},
        status: "",
      };
    default:
      return state;
  }
};
