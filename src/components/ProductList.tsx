import styled from "styled-components";
import { ICartItem } from "../types/Cart";
import { IProduct } from "../types/Product";
import Product from "./Product";

interface Props {
  cart: ICartItem[];
  products: IProduct[];
  onAdd(product: IProduct): void;
  onRemove(product: IProduct): void;
}

function ProductList({ cart, products, onAdd, onRemove }: Props) {
  return (
    <Container>
      {products.map((product) => (
        <Product
          key={product._id}
          product={product}
          cart={cart}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 80px;
`;
