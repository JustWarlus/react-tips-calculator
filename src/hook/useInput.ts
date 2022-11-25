import { useState, ChangeEvent } from "react";

interface IInput {
  value: number | string;
  onChange: object;
}

export const useInput = (initionalValue = ""): IInput => {
  const [value, setValue] = useState(initionalValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};
