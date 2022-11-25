import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  color: white;
  text-align: center;
  background-color: #2ed2c9;
  padding: 13px;
  box-sizing: border-box;
  border: none;
  margin-top: 45px;
  font-size: 18px;
  color: #756c6c;
  opacity: 0.9;
  &:hover {
    background-color: #5ed3c0;
  }
  &:disabled {
    background-color: black;
  }
`;

export { StyledButton };
