import styled from "styled-components";
import { IProduct } from "../types/Product";
import Product from "./Product";

interface Props {
  products: IProduct[];
}

function ProductList({ products }: Props) {
  return (
    <Container>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 64px;
`;
