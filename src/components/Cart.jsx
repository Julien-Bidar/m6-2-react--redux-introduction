import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getStoreItemArray } from "../reducers";
import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  let count = 0;
  storeItems.forEach((item) => {
    if (!isNaN(item.quantity)) {
      count += item?.quantity * item?.price;
    } else {
      window.alert("enter a number");
    }
  });
  let totalFormat = count / 100;

  return (
    <Wrapper>
      <div>
        <h1>Your Cart</h1>
        <p>{storeItems.length} Item(s)</p>
        {storeItems.map((item) => {
          return <CartItem key={item.id} itemId={item.id} />;
        })}
      </div>
      <BottomWrap>
        <p>Total: ${totalFormat}</p>
        <Button style={{ width: "50%" }}>purchase</Button>
      </BottomWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  margin-left: 10px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Cart;
