import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { getFoods } from "./services/fakeFoodService";
import { ICartItem } from "./types/Cart";
import { IProduct } from "./types/Product";

function App(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    setProducts(getFoods());
  }, []);

  function handleAdd(product: IProduct) {
    const cartItem = cart.find((cartItem) => cartItem._id === product._id);

    if (cartItem) {
      cartItem.quantity++;
      setCart([...cart]);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCart([...cart, newCartItem]);
    }
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} onAdd={handleAdd} />}
          />
          <Route path="/checkout" element={<Checkout cartItems={cart} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  margin: 64px;
`;
