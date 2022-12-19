import { useState } from "react";

function CheckBox({ checked, onChange, ...props }) {
  const handleChange = (e) => {
    const { cartItem } = props;
    if (onChange) {
      onChange(e, cartItem);
    }
  };
  return (
    <input
      onChange={(e) => handleChange(e)}
      className="checkbox-add-cart"
      type="checkbox"
      checked={checked}
      id="checkbox-all-products"
    />
  );
}

export default CheckBox;
