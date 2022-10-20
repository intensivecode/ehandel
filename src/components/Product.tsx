import styled from "styled-components";
import { ICartItem } from "../types/Cart";
import { IProduct } from "../types/Product";

interface Props {
  onAdd(product: IProduct): void;
  onRemove(product: IProduct): void;
  product: IProduct;
  cart: ICartItem[];
}

function Product({ cart, product, onAdd, onRemove }: Props) {
  const cartItem = cart.find((cartItem) => cartItem._id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <Container key={product._id} color={product.color}>
      <img src={product.imgUrl} alt="" />
      <div>
        <Text color={product.color} className="category">
          {product.category.name}
        </Text>
        <Text>{product.name}</Text>
      </div>
      <div>
        <Text className="price">{product.price}kr</Text>
        {quantity === 0 ? (
          <AddToCartButton color={product.color} onClick={() => onAdd(product)}>
            <i className="fa-solid fa-cart-shopping" />
          </AddToCartButton>
        ) : (
          <ButtonContainer>
            <Button color={product.color} onClick={() => onRemove(product)}>
              -
            </Button>
            <Input value={quantity} />
            <Button color={product.color} onClick={() => onAdd(product)}>
              +
            </Button>
          </ButtonContainer>
        )}
      </div>
    </Container>
  );
}

export default Product;

interface ColorProps {
  color?: string;
}

const Container = styled.div<ColorProps>`
  position: relative;
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: 1fr 1fr;
  padding: 24px;
  width: 200px;
  border-radius: 16px;
  background-color: ${(props) => props.color + "20"};

  img {
    position: absolute;
    top: -56px;
    justify-self: center;
    width: 120px;
    height: 120px;
  }
`;

const Input = styled.input`
  width: 80%;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Text = styled.p<ColorProps>`
  &.category {
    color: ${(props) => props.color};
    font-size: 12px;
    font-weight: 800;
    margin-top: 56px;
  }

  &.price {
    margin-top: 16px;
    margin-bottom: 8px;
  }
`;

const Button = styled.button<ColorProps>`
  cursor: pointer;
  font-weight: 800;
  font-size: 16px;
  width: 40px;
  border-radius: 8px;
  border: none;
  padding: 8px 0;
  text-align: center;
  background-color: ${(props) => props.color};
  color: white;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(1);
  }
`;

const AddToCartButton = styled(Button)`
  width: 100%;
`;
