import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggleActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(toggleActions.toggle());
  };
  return (
    <button onClick={onClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
