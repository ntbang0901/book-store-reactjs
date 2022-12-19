import { actionsTypes } from "../../contants/actionsType";
import {
  getProductDetails,
  getProducts,
  getProductsApi,
  getProductSearch,
} from "../../services/productService";

export const fetchProductStart = (id, ten, page, elementOfPage, options) => {
  return async (dispatch, getState) => {
    try {
      let res = await getProductsApi(id, ten, page, elementOfPage, options);
      if (res && res?.data?.error === 0) {
        dispatch({
          type: actionsTypes.FETCH_PRODUCTS_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionsTypes.FETCH_PRODUCTS_FAILED,
        });
      }
    } catch (error) {
      dispatch({
        type: actionsTypes.FETCH_PRODUCTS_FAILED,
      });
    }
  };
};

export const fetchProductDetailStart = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await getProductsApi(id);
      if (res && res.data.error === 0) {
        dispatch({
          type: actionsTypes.FETCH_PRODUCTDETAIL_SUCCESS,
          data: res.data.data[0],
        });
      } else {
        dispatch({
          type: actionsTypes.FETCH_PRODUCTSDETAIL_FAILED,
        });
      }
    } catch (error) {
      dispatch({
        type: actionsTypes.FETCH_PRODUCTSDETAIL_FAILED,
      });
    }
  };
};

export const fetchProducSearchStart = (value, page, options) => {
  return async (dispatch, getState) => {
    try {
      let res = await getProductsApi(null, value, page, null, options);
      if (res && res.data.error === 0 && res.data.total > 0) {
        dispatch({
          type:
            +res.data.page === 1
              ? actionsTypes.FETCH_RESULTSEARCH_SUCCESS
              : actionsTypes.UPDATE_RESULTSEARCH_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionsTypes.FETCH_RESULTSEARCH_FAILED,
        });
      }
    } catch (error) {
      dispatch({
        type: actionsTypes.FETCH_RESULTSEARCH_FAILED,
      });
    }
  };
};

export const removeProductDetail = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: actionsTypes.REMOVE_PRODUCT_DETAIL,
    });
  };
};
