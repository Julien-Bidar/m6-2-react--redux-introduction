import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeItem, updateItem } from "../actions";

const CartItem = ({ itemId }) => {
  const item = useSelector((state) => {
    return state[itemId];
  });
  const dispatch = useDispatch();

  //handle
  const handleDelete = () => {
    dispatch(removeItem(item));
  };

  const handleinput = (e) => {
    dispatch(updateItem({ id: item.id, quantity: e.target.value }));
  };

  return (
    <Wrapper>
      <TitleWrap>
        <p>{item.title}</p>
        <Button onClick={handleDelete}>X</Button>
      </TitleWrap>
      <QuantWrap>
        <p>Quantity:</p>
        <Input onChange={handleinput} value={item?.quantity}></Input>
      </QuantWrap>
    </Wrapper>
  );
};

const QuantWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgb(39, 8, 41);
`;

const Input = styled.input`
  margin-left: 15px;
  width: 40px;
`;

const Wrapper = styled.div`
  border: dashed grey 2px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  cursor: pointer;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export default CartItem;
