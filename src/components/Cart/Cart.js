import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);

  console.log(cartState.total);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "Test Item",
            quantity: cartState.quantity,
            total: cartState.total,
            price: cartState.price,
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
