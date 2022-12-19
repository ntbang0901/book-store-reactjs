import { request, instance, publicApi } from "../utils/request";

export const getProducts = () => {
  return request.get(`new`);
};

export const getProductsApi = (id, ten, page, elementOfPage, options = {}) => {
  console.log();
  return publicApi.get(`product/getProduct`, {
    params: { id, ten, page, elementOfPage, options },
  });
};

export const getProductDetails = (id) => {
  return request.get(`books/${id}`);
};

export const getProductSearch = (value, page) => {
  return request.get(`search/${value}${page ? `/${page}` : ""}`);
};
