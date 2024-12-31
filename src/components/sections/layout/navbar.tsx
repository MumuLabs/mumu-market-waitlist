"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface NavItem {
	name: string;
	href: string;
}

const navs: NavItem[] = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Services", href: "#services" },
	{ name: "Contact", href: "#contact" },
	{ name: "Join Waitlist", href: "#waitlist" },
];

const Navbar: React.FC = () => {
	const ref = useRef<HTMLUListElement>(null);
	const [left, setLeft] = useState(0);
	const [width, setWidth] = useState(0);
	const [opacity, setOpacity] = useState(0);

	const [pastSectionOne, setPastSectionOne] = useState(false);

	useEffect(() => {
		const sectionOne = document.querySelector("#home");
		if (!sectionOne) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) {
					setPastSectionOne(true);
				} else {
					setPastSectionOne(false);
				}
			},
			{ threshold: 0.1 },
		);

		observer.observe(sectionOne);

		return () => {
			observer.disconnect();
		};
	}, []);

	const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
		const node = e.currentTarget;
		setLeft(node.offsetLeft);
		setWidth(node.clientWidth);
		setOpacity(1);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	return (
		<header className="w-full fixed top-0 left-0 z-50 flex items-center justify-between py-4 px-5 lg:px-10">
			<div className="mx-auto mt-4 max-w-6xl px-4 relative flex items-center justify-center">
				<ul
					onMouseLeave={handleMouseLeave}
					className="relative flex w-fit rounded-full p-1.5 backdrop-blur-sm border shadow-sm text-white"
					ref={ref}
				>
					{navs.map((item) => (
						<li
							key={item.name}
							onMouseEnter={handleMouseEnter}
							className="z-10 block cursor-pointer px-4 py-2 text-lg var(--font-golos-text) font-medium tracking-tight transition-colors duration-200 hover:text-slate-800"
						>
							<a href={item.href}>{item.name}</a>
						</li>
					))}
					<motion.li
						animate={{ left, width, opacity }}
						transition={{ type: "spring", stiffness: 400, damping: 30 }}
						className="absolute bottom-0 top-0 my-1.5 rounded-full bg-slate-200 opacity-20 pointer-events-none"
					/>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
