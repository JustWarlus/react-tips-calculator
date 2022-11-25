import { StyledInpunt } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value: number | string;
  onChange: any;
}

export const Input = ({ placeholder, onChange, value, type }: IProps) => {
  return <StyledInpunt placeholder={placeholder} onChange={onChange} value={value} type={type} />;
};
