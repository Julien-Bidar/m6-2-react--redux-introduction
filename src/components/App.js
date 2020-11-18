import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import Cart from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

// const MainAndCart = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-areas: "header header sidebar" "main main sidebar";
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  background-color: rgb(64, 31, 67);
  padding-left: 8px;
`;

export default App;
