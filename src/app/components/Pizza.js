'use client';
import React, { useState } from 'react';

//image
import Image from 'next/image';
//modal
import Modal from 'react-modal';
//components
import PizzaDetails from './PizzaDetails';
//icons
import { IoCloseOutline } from 'react-icons/io5';

const Pizza = ({ pizza }) => {
	//modal
	const [modal, setModal] = useState(false);
	//open modal
	const openModal = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	//bin modal body
	Modal.setAppElement('body');

	//modalStyles
	const modalStyles = {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.5)',
		},
	};

	return (
		<div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
			<Image
				onClick={openModal}
				className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
				width={270}
				height={270}
				src={pizza.image}
				alt=""
				priority={1}
			/>
			<div onClick={openModal}>
				{/* title  */}
				<div>
					<div className="text-xl font-bold mb-3 capitalize cursor-pointer">
						{pizza.name}
					</div>
				</div>
				{/* description  */}
				<div className="text-sm font-medium min-h-[60px] mb-6">
					{pizza.description}
				</div>
				{/* pizza price & btn */}
				<div className="mb-6 flex items-center justify-between">
					<div className="hidden lg:flex  text-xl font-semibold">
						starts at {pizza.priceSm}
					</div>
					{/* btn  */}
					<div>
						<button
							onClick={openModal}
							className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
						>
							Choose
						</button>

						{/* btn visible */}
						<button
							onClick={openModal}
							className="btn btn-sm gradient lg:hidden px-3 tex-sm"
						>
							starts at {pizza.priceSm}
						</button>
					</div>
				</div>
			</div>
			{/* modal  */}
			{modal && (
				<Modal
					isOpen={modal}
					style={modalStyles}
					onRequestClose={closeModal}
					contentLabel="Pizza Modal"
					className={`bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none`}
				>
					{/* close modal */}
					<div
						onClick={closeModal}
						className="absolute z-30 right-2 top-2 hover:scale-110 duration-300 cursor-pointer"
					>
						<IoCloseOutline className="text-4xl text-orange" />
					</div>
					{/* pizza detials */}
					<PizzaDetails
						pizza={pizza}
						modal={modal}
						setModal={setModal}
					/>
				</Modal>
			)}
		</div>
	);
};

export default Pizza;
