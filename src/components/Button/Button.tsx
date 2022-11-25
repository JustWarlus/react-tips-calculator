import { StyledButton } from "./styles";

interface IProps {
  children: string;
  isDisabled: boolean;
  onClick: any;
}

export const Button = ({ children, isDisabled, onClick }: IProps) => {
  return (
    <StyledButton type="submit" disabled={isDisabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
