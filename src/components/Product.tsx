import styled from "styled-components";
import { IProduct } from "../types/Product";

function Product({ _id, name, category, price, imgUrl }: IProduct) {
  return (
    <Container key={_id}>
      <img src={imgUrl} />
      <div>
        <Text className="category">{category.name}</Text>
        <Text>{name}</Text>
      </div>
      <div>
        <Text className="price">{price}</Text>
        <Button>Köp denna nu!</Button>
      </div>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: 1fr 1fr;
  padding: 24px;
  width: 200px;
  border-radius: 16px;
  border: 1px solid black;

  img {
    position: absolute;
    top: -56px;
    justify-self: center;
    width: 120px;
    height: 120px;
  }
`;

const Text = styled.p`
  font-weight: bold;

  &.category {
    margin: 8px 0;
  }

  &.price {
    margin-top: 16px;
    margin-bottom: 8px;
  }
`;

const Button = styled.button`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 8px 0;
  text-align: center;
  background-color: #294c60;
  color: white;
`;
