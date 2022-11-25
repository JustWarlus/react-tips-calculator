import styled from "styled-components";

const StyledInpunt = styled.input`
  display: block;
  width: 100%;
  border-radius: 30px;
  background-color: white;
  text-align: center;
  padding: 21px;
  box-sizing: border-box;
  margin-bottom: 33px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #756c6c;
  opacity: 0.9;
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export { StyledInpunt };
