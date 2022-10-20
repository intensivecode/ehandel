import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  cartCount: number;
}

function Navbar({ cartCount }: Props): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 onClick={() => navigate("/")}>Navbar</h1>
      <CartIcon
        onClick={() => navigate("/checkout")}
        className="fa-solid fa-cart-shopping"
      >
        <Badge>{cartCount}</Badge>
      </CartIcon>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #adb6c4;
  padding: 16px;
`;

const CartIcon = styled.i`
  position: relative;
  cursor: pointer;
  font-size: 40px;
  color: #845a6d;
`;

const Badge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 2px;
`;
