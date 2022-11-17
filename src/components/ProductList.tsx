import styled from "styled-components";
import { useSelector } from "react-redux";
import Product from "./Product";
import { getProducts } from "../store/products";

function ProductList() {
  const { list: products, isLoading } = useSelector(getProducts);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Container>
      {products.map((product: any) => (
        <Product key={product._id} product={product} />
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
