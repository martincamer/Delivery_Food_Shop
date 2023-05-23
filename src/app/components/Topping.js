'use client';
import { useState, useEffect } from 'react';
//img
import Image from 'next/image';
import { IoMdCheckmark } from 'react-icons/io';

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
	//checkbox state
	const [isCheked, setIsCheked] = useState(false);
	//handle check

	const handleCheckBox = () => {
		setIsCheked(!isCheked);
	};

	//handle topping
	const handleTopping = () => {
		if (isCheked) {
			//use set to ensure unique values

			const newToppings = new Set([...additionalTopping, { ...topping }]);

			// console.log(newToppings);
			setAdditionalTopping(Array.from(newToppings));
			// console.log(additionalTopping);
		} else {
			//remove the topping with the matching name
			const newToppings = additionalTopping.filter(toppingObj => {
				return toppingObj.name !== topping.name;
			});
			setAdditionalTopping(newToppings);
		}
	};

	useEffect(() => {
		handleTopping();
	}, [isCheked]);

	return (
		<div
			className={`${
				isCheked && 'border-orange'
			} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
		>
			<Image
				src={topping.image}
				width={70}
				height={70}
				alt=""
				priority={1}
				className="mb-2"
			/>
			<div className="text-sm capitalize text-center font-medium">
				{topping.name}
			</div>
			<input
				type="checkbox"
				checked={isCheked}
				className="absolute w-full h-full opacity-0 cursor-pointer"
				onChange={handleCheckBox}
			/>
			<div
				className={`${
					isCheked ? 'opacity-100' : 'opacity-0'
				} absolute top-1 right-1`}
			>
				<IoMdCheckmark className="text-xl text-orange" />
			</div>
		</div>
	);
};

export default Topping;
