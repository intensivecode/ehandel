import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { loadProducts } from "./store/products";
import {
  useGetFoodQuery,
  useGetFoodsQuery,
  useUpdateFoodMutation,
} from "./store/rtkApi";

function App(): JSX.Element {
  const dispatch = useDispatch();
  const { data: products = [], isLoading } = useGetFoodsQuery("products");
  // const { data: food } = useGetFoodQuery("636d3c1ef209cf2df22159f3");
  // const [updateFood] = useUpdateFoodMutation();

  useEffect(() => {
    dispatch(loadProducts());
    // updateFood({
    //   _id: "636d3c1ef209cf2df22159f3",
    //   name: "Nazih",
    //   categoryId: "636d36ab2d725fd9e344ea4b",
    //   numberInStock: 10,
    //   price: 10,
    //   imgUrl:
    //     "https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-benefits.jpeg",
    //   color: "#73AA01",
    // });
  }, []);

  console.log("aladin", products);
  console.log("isLoading", isLoading);
  // console.log("getting the apple (aladin)", food);

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
