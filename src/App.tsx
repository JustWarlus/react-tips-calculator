import React from "react";
import { Form } from "./components/Form/Form";
import { Title, SubTitle, Container } from "./styles";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Title>Welcome to App</Title>
      <SubTitle>Let's go calculate your tips</SubTitle>
      <Form />
    </Container>
  );
};
