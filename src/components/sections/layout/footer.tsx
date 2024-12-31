import Image from "next/image";
import { socialLinks, footerLinks } from "@/data/data";

export function Footer() {
	return (
		<footer id="footer">
			<div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<div className="flex flex-col items-center space-y-7">
					<Image
						className="w-20 h-auto transform transition-transform duration-300 hover:scale-110"
						src="/mumu-logo.png"
						alt="MumuLabs Mumu Logo"
						width={100}
						height={100}
					/>

					<div className="flex space-x-6">
						{socialLinks.map((icon, index) => (
							<a
								key={index}
								href={icon.url}
								className="text-gray-400 hover:text-[#d4a595] transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">{icon.name}</span>
								{icon.icon}
							</a>
						))}
					</div>

					<nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
						{footerLinks.map((link, index) => (
							<a
								key={index}
								href={link.url}
								className="text-sm font-medium text-gray-500 hover:text-[#d4a595] hover:underline transition-colors duration-300"
							>
								{link.text}
							</a>
						))}
					</nav>

					<p className="text-xs text-gray-400">
						© {new Date().getFullYear()} MumuLabs LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
