import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Image from 'next/image';

const CheckoutDetails = ({ setModal }) => {
	const { cart, setCart, cartTotal } = useContext(CartContext);

	const [successMsg, setSuccesMsg] = useState(false);
	const [count, setCount] = useState(5);

	useEffect(() => {
		if (successMsg) {
			const timer = setTimeout(() => {
				if (count > 1) {
					setCount(count - 1);
				}
			}, 1000);

			return () => clearTimeout(timer);
		}
	});

	//close modal
	useEffect(() => {
		if (successMsg) {
			const timer = setTimeout(() => {
				setSuccesMsg(false);
				// clear cart
				setCart([]);
				//modal close
				setModal(false);
			}, 5000);

			//clear timer
			return () => clearTimeout(timer);
		}
	}, [successMsg]);

	return (
		<div>
			{successMsg ? (
				<div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
					<h2 className="text-2xl font-semibold text-center">
						Thank you! The order has been placed!
					</h2>
					<Image
						src={'/success-1.gif'}
						width={150}
						height={150}
						alt=""
					/>
					<div>
						This window will close in <span>{count}</span> {''} seconds
					</div>
				</div>
			) : (
				<div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">
					{/* title  */}
					<h2 className="mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0">
						Shipping & Checkout
					</h2>
					<div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
						<div className=" flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
							<div className="flex flex-col gap-4 h-full">
								{/* firts name and lastname */}
								<div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
									<input
										type="text"
										className="w-full input bg-gray-100 text-orange  border-none hover:border-none"
										placeholder="First "
									/>
									<input
										type="text"
										className="w-full input bg-gray-100 text-orange  border-none"
										placeholder="Last Name"
									/>
								</div>

								{/* phone and email */}
								<div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
									<input
										type="email"
										className="w-full input bg-gray-100 text-orange  border-none hover:border-none"
										placeholder="Email Address"
									/>
									<input
										type="tel"
										className="w-full input bg-gray-100 text-orange  border-none"
										placeholder="Telephone"
									/>
								</div>

								{/* street and streen no */}
								<div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
									<input
										type="text"
										className="w-full input bg-gray-100 text-orange  border-none hover:border-none"
										placeholder="Street Name"
									/>
									<input
										type="text"
										className="w-full input bg-gray-100 text-orange  border-none"
										placeholder="Street no"
									/>
								</div>

								{/* block floor and apartament */}
								<div className="flex justify-between gap-x-4">
									<input
										type="text"
										className="w-full input bg-gray-100 text-orange  border-none hover:border-none"
										placeholder="Block"
									/>
									<input
										type="text"
										className="w-full input bg-gray-100 text-orange  border-none hover:border-none"
										placeholder="Floor"
									/>
									<input
										type="text"
										className="w-full input bg-gray-100 text-orange  border-none hover:border-none"
										placeholder="Apart. No."
									/>
								</div>

								{/* text area */}
								<div className="flex-1 h-full">
									<textarea
										className="textarea w-full h-full bg-gray-100 text-orange"
										placeholder="Mentions (optional)"
									></textarea>
								</div>
							</div>
						</div>

						<div className="flex-1 h-full lg:max-w-[400px] flex flex-col justify-between pt-3 px-8 lg:p-0">
							<div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
								<h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
									Your Order
								</h3>

								<div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white font-semibold flex flex-col gap-y-4 h-[240px] py-2">
									{cart.map((pizza, index) => {
										return (
											<div
												className="flex justify-between text-[15px]"
												key={index}
											>
												<div className="flex gap-x-2">
													<div className="capitalize">{pizza.name}</div>
													<div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
												</div>
												<div>
													$ {parseFloat(pizza.price * pizza.amount).toFixed(2)}
												</div>
											</div>
										);
									})}
								</div>
							</div>
							<button
								onClick={() => setSuccesMsg(true)}
								className="btn btn-lg gradient w-full"
							>
								Place order
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CheckoutDetails;
