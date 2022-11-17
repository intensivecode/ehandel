import { useSelector } from "react-redux";
import { getCart } from "../store/cart";

function Checkout() {
  const cart = useSelector(getCart);

  return (
    <div>
      <h1>Checkout Page {":)"}</h1>
      <ul>
        {cart.map((cartItem: any) => (
          <li key={cartItem._id}>
            {cartItem.name} - {cartItem.quantity}x
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checkout;
