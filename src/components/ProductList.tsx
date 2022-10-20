import styled from "styled-components";
import { IProduct } from "../types/Product";
import Product from "./Product";

interface Props {
  products: IProduct[];
  onAdd(product: IProduct): void;
}

function ProductList({ products, onAdd }: Props) {
  return (
    <Container>
      {products.map((product) => (
        <Product key={product._id} product={product} onAdd={onAdd} />
      ))}
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 64px;
`;
