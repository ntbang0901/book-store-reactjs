import { useState } from "react";
import "./formInput.scss";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    typeInput = "input",
    label,
    errorMessage,
    onChange,
    id,
    ...inputProps
  } = props;

  const inputType = () => {
    if (typeInput === "input") {
      return (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
      );
    }
    if (typeInput === "textarea") {
      return (
        <textarea
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}></textarea>
      );
    }
    if (typeInput === "select") {
      return (
        <select
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }>
          {props?.options?.map((option, index) => (
            <option value={option.value} key={index + option.title}>
              {option.title}
            </option>
          ))}
        </select>
      );
    }
  };

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={props?.type === "radio" ? "formInput-radio" : "formInput"}>
      <label>{label}</label>
      {inputType()}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
