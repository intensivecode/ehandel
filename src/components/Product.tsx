import styled from "styled-components";
import { IProduct } from "../types/Product";

interface Props {
  onAdd(product: IProduct): void;
  product: IProduct;
}

function Product({ product, onAdd }: Props) {
  return (
    <Container key={product._id}>
      <img src={product.imgUrl} alt="" />
      <div>
        <Text className="category">{product.category.name}</Text>
        <Text>{product.name}</Text>
      </div>
      <div>
        <Text className="price">{product.price}</Text>
        <Button variant="secondary" onClick={() => onAdd(product)}>
          <i className="fa-solid fa-cart-shopping" />
        </Button>
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

interface ButtonProps {
  variant: "primary" | "secondary";
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 8px 0;
  text-align: center;
  background-color: ${(props) =>
    props.variant === "primary" ? "#294C60" : "#845A6D"};
  color: white;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(1);
  }
`;
