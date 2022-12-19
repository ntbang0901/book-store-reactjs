import { instance } from "../utils/request";

export const addCart = (item, quantity) => {
  return instance.post(`cart/setCart`, {
    item,
    count: quantity,
  });
};

export const getAllCart = () => {
  return instance.get(`cart/getCart`);
};

export const updateCart = (item, quantity) => {
  return instance.post(`cart/updateCart`, {
    item,
    count: quantity,
  });
};
