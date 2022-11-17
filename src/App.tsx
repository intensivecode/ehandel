import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { getProducts } from "./services/productService";
import { apiCallBegan } from "./store/api";
import { loaded, requested } from "./store/products";

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadAllProducts() {
      const { data: products } = await getProducts();
      dispatch(loaded(products));
    }

    // @ts-ignore
    dispatch(
      // @ts-ignore
      apiCallBegan({
        url: "/foods",
        onSuccess: loaded.type,
        onStart: requested.type,
      })
    );

    // loadAllProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  margin: 64px;
`;
