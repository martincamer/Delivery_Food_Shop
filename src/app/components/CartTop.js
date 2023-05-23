'use client';
import { useContext } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';

const CartTop = () => {
	const { setIsOpen } = useContext(CartContext);

	return (
		<div className="w-full h-20 border-b flex items-center justify-between px-10">
			<div className="font-semibold">Shopping Bag(3)</div>

			{/* close icon */}
			<div
				className="cursor-pointer group"
				onClick={() => setIsOpen(false)}
			>
				<IoCloseOutline className="text-3xl group-hover:scale-110 duration-300 transition-all text-orange" />
			</div>
		</div>
	);
};

export default CartTop;
