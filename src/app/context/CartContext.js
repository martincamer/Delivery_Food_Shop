'use client';

import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	// cart open state
	const [isOpen, setIsOpen] = useState(false);
	// cart state
	const [cart, setCart] = useState([]);

	//total cart
	const [cartTotal, setCartTotal] = useState(0);
	//item amount state
	const [itemAmount, setItemAmount] = useState(0);
	//update
	useEffect(() => {
		const amount = cart.reduce((a, c) => {
			return a + c.amount;
		}, 0);

		setItemAmount(amount);
	});

	//update cart  total price

	useEffect(() => {
		const price = cart.reduce((a, c) => {
			return a + Number(c.price) * c.amount;
		}, 0);
		setCartTotal(price);
	}, [cart]);

	//add to cart
	const addToCart = (
		id,
		image,
		name,
		price,
		additionalTopping,
		size,
		crust
	) => {
		console.log(id, image, name, price, additionalTopping, size, crust);
		//sort additionaTopping array by name
		additionalTopping.sort((a, b) => a.name.localeCompare(b.name));

		const newItem = {
			id,
			image,
			name,
			price,
			additionalTopping,
			size,
			crust,
			amount: 1,
		};

		const cartItemIndex = cart.findIndex(
			item =>
				item.id === id &&
				item.price === price &&
				item.size === size &&
				JSON.stringify(item.additionalTopping) ===
					JSON.stringify(additionalTopping) &&
				item.crust === crust
		);

		if (cartItemIndex === -1) {
			setCart([...cart, newItem]);
		} else {
			const newCart = [...cart];
			newCart[cartItemIndex].amount += 1;
			setCart(newCart);
		}

		setIsOpen(true);
	};

	//remove item

	const removeItem = (id, price, crust) => {
		const itemIndex = cart.findIndex(
			item => item.id === id && item.price === price && item.crust === crust
		);

		if (itemIndex !== -1) {
			const newCart = [...cart];
			newCart.splice(itemIndex, 1);
			setCart(newCart);
		}
	};

	//increase amount
	const increaseAmount = (id, price) => {
		const itemIndex = cart.findIndex(
			item => item.id === id && item.price === price
		);
		const newCart = [...cart];
		if (itemIndex !== -1) {
			newCart[itemIndex].amount += 1;
		}
		setCart(newCart);
	};

	//decrement amount
	const decreaseAmount = (id, price) => {
		const itemIndex = cart.findIndex(
			item => item.id === id && item.price === price
		);
		const newCart = [...cart];

		if (newCart[itemIndex].amount > 1) {
			newCart[itemIndex].amount -= 1;
		}
		setCart(newCart);
	};

	// console.log(cart);
	return (
		<CartContext.Provider
			value={{
				isOpen,
				setIsOpen,
				addToCart,
				cart,
				setCart,
				removeItem,
				increaseAmount,
				decreaseAmount,
				itemAmount,
				cartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
