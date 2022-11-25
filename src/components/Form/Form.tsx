import { useState, FormEvent, useEffect } from "react";
import { useInput } from "../../hook/useInput";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Total } from "./styles";
import { IOption } from "../../types/types";

export const Form = () => {
  const options: IOption[] = [
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
  ];

  const bill = useInput();
  const countPersons = useInput();
  const [procent, setProcent] = useState(options[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleValue = (event: IOption) => {
    setProcent(event);
  };

  const getTotalPrice = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTotalPrice((+bill.value + (+bill.value * +procent.value) / 100) / +countPersons.value);
  };

  useEffect(() => {
    bill.value && countPersons.value ? setIsDisabled(false) : setIsDisabled(true);
  }, [bill.value, countPersons.value]);

  return (
    <StyledForm>
      <Input placeholder={"Enter Bill"} type={"number"} {...bill} />
      <Input placeholder={"Enter Persons"} type={"number"} {...countPersons} />
      <CustomSelect options={options} value={procent} onChange={handleValue} />
      <Total>Oleg owes: {totalPrice.toFixed(2)} $</Total>
      <Button onClick={getTotalPrice} isDisabled={isDisabled}>
        ohhhoooo 🍻
      </Button>
    </StyledForm>
  );
};
