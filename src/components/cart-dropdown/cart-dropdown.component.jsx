import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart-dropdown.context";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import {
	CartDropContainer,
	EmptyMessage,
	CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropDown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckOutHandler = () => {
		navigate("/checkout");
	};

	return (
		<CartDropContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your Cart Is Empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
		</CartDropContainer>
	);
};

export default CartDropDown;
