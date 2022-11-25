import { StylesConfig } from "react-select";

export const styles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
    padding: "15px",

    borderBox: "box-size",
    borderRadius: "30px",
    border: "none",
    outline: "none",
    opacity: "0.9",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    padding: "0",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    fontSize: "18px",
    marginLeft: "50px",
    color: "#756c6c",
    opacity: "0.9",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    caretColor: "transparent",
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
    border: "none",
    boxShadow: "none",
    borderRadius: "30px",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "15px",
  }),
  option: (styles) => {
    return {
      ...styles,
      borderRadius: "30px",
      padding: "21px",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  },
};
