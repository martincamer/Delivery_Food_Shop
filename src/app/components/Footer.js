import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className={'bg-primary bg-pattern py-16'}>
			<div className="container mx-auto">
				<div className="flex flex-col items-center gap-y-6 justify-center">
					<Link href={'#'}>
						<Image
							src={'logo.svg'}
							width={180}
							height={180}
							alt=""
						/>
					</Link>
					<div className="flex gap-x-6 text-xl text-white">
						<Link href={'#'}>
							<FaYoutube />
						</Link>
						<Link href={'#'}>
							<FaFacebook />
						</Link>
						<Link href={'#'}>
							<FaInstagram />
						</Link>
						<Link href={'#'}>
							<FaTwitter />
						</Link>
					</div>
					<div className="text-white font-medium">
						Copyright &copy; Martin Camer 2023. All rights reserved
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
