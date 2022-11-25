import Select from "react-select";
import { IOption } from "../../types/types";
import { styles } from "./styles";

interface IProps {
  options: IOption[];
  value: IOption;
  onChange: (event: IOption | any) => void;
}

export const CustomSelect = ({ onChange, value, options }: IProps) => {
  return <Select styles={styles} options={options} onChange={onChange} value={value} />;
};
