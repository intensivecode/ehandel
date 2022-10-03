import { useEffect, useState } from "react";
import styled from "styled-components";
import NewTest from "./components/NewTest";
import ProductList from "./components/ProductList";
import { getFoods } from "./services/fakeFoodService";
import { IProduct } from "./types/Product";

function App(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(getFoods());
    console.log("products", products);
  }, []);

  return (
    <Container>
      <ProductList products={products} />
      <NewTest />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 64px;
`;
