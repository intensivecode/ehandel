import { ICartItem } from "../types/Cart";

interface Props {
  cartItems: ICartItem[];
}

function Checkout({ cartItems }: Props) {
  console.log("cartItems", cartItems);
  return (
    <div>
      <h1>Checkout Page {":)"}</h1>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem._id}>{cartItem.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Checkout;
