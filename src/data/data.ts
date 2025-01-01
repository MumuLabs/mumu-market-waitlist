import React, { ReactNode } from "react";

import {
	ProcessStep,
	Faq,
	GridCard,
	TeamMember,
	SocialLink,
	FooterLink,
	Testimonial,
	ScrollContent,
	Product,
} from "@/types/general.types";
import {
	ShoppingCartIcon,
	GlobeIcon,
	BotIcon,
	LayoutTemplateIcon,
	OrigamiIcon,
	BookLockIcon,
	StarsIcon,
	// ANCHOR: Process Data Icons
	ClipboardSignatureIcon,
	UserRoundSearchIcon,
	ScanBarcodeIcon,
	TruckIcon,
} from "lucide-react";
import {
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

// ANCHOR: Process Data
export const processSteps: ProcessStep[] = [
	{
		icon: React.createElement(ClipboardSignatureIcon, { className: "w-8 h-8" }),
		title: "Sign Up",
		description: `
		Create a free profile or explore as a guest to discovr products 
		tailored to your preferences, needs, and wants.
		`,
		className: "w-full max-w-sm",
	},
	{
		icon: React.createElement(UserRoundSearchIcon, { className: "w-8 h-8" }),
		title: "Browse Businesses",
		description: `
		We partner with Muslim-owned brands worldwide, giving you a wide
		selection of products and items unique to your interests and just
		for you.
		`,
		className: "w-full max-w-sm",
	},
	{
		icon: React.createElement(ScanBarcodeIcon, { className: "w-8 h-8" }),
		title: "Checkout",
		description: `
		Add your favorite items to your card and finalize your purchase
		with just a few clicks.
		`,
		className: "w-full max-w-sm",
	},
	{
		icon: React.createElement(TruckIcon, { className: "w-8 h-8" }),
		title: "It's On The Way",
		description: `
		Wait for your order to be shipped and within a couple of hours, you'll
		recieve a confirmation email with all the details of your order. We'll
		keep you updated constantly on the status of your order.
		`,
		className: "w-full max-w-sm",
	},
];

// ANCHOR: Product Data
export const productDataSectionOne: Product[] = [
	{
		name: "Kabaa Mat",
		description:
			"Premium prayer mat for both men and women with a unique design.",
		price: 45.99,
		image: "/img/products/kabaa-mat-rmbg.png",
		rating: 4.5,
		reviewCount: 12,
		tags: ["Kabaa", "Mat", "Prayer Mat"],
		className: "w-full max-w-sm",
	},
	{
		name: "Musk Amber Cologne",
		description:
			"The perfect fragrance for those who want to indulge in a luxurious experience.",
		price: 59.99,
		image: "/img/products/musk-amber-cologne-rmbg.png",
		rating: 4.1,
		reviewCount: 200,
		tags: ["Musk", "Cologne", "Fragrance", "Luxury"],
		className: "w-full max-w-sm",
	},
	{
		name: "Noor Abaya",
		description:
			"Perfect Abaya for women, simple and elegant with a modest design.",
		price: 79.99,
		image: "/img/products/noor-abaya-rmbg.png",
		rating: 4.3,
		reviewCount: 150,
		tags: ["Noor", "Abaya", "Women", "Elegant"],
		className: "w-full max-w-sm",
	},
	{
		name: "Aydin Prayer Rug",
		description:
			"A luxurious and comfortable rug, made with high-quality materials and designed for comfort.",
		price: 39.99,
		image: "/img/products/aydin-prayer-rug-rmbg.png",
		rating: 4.5,
		reviewCount: 100,
		tags: ["Aydin", "Prayer", "Rug"],
		className: "w-full max-w-sm",
	},
	{
		name: "Palestine Braided Jewelry",
		description:
			"A beautiful and elegant piece of jewelry with a piece of Palestinian history.",
		price: 49.99,
		image: "/img/products/palestine-braided-jewelry-rmbg.png",
		rating: 4.9,
		reviewCount: 245,
		tags: ["Palestine", "Braided", "Jewelry"],
		className: "w-full max-w-sm",
	},
	{
		name: "Palestine T-Shirt",
		description: "A minimal and elegant t-shirt with a minimal design.",
		price: 29.99,
		image: "/img/products/palestine-t-shirt-rmbg.png",
		rating: 4.7,
		reviewCount: 150,
		tags: ["Palestine", "T-Shirt"],
		className: "w-full max-w-sm",
	},
	{
		name: "Deluxe Quran Gift Set",
		description:
			"High-quality Quran gift set with tasbih, quran, in a beautiful and elegant wooden box.",
		price: 59.99,
		image: "/img/products/deluxe-quran-gift-set-rmbg.png",
		rating: 4.8,
		reviewCount: 300,
		tags: ["Deluxe", "Quran", "Gift", "Set"],
		className: "w-full max-w-sm",
	},
	{
		name: "Modefa Perfume (Concentrated) Oil",
		description: "A luxurious and elegant perfume with a unique scent.",
		price: 69.99,
		image:
			"/img/products/modefa-perfume-aksa-concentrated-essential-oil-rmbg.png",
		rating: 4.6,
		reviewCount: 250,
		tags: ["Modefa", "Perfume", "Concentrated", "Oil"],
		className: "w-full max-w-sm",
	},
];

export const productDataSectionTwo: Product[] = [
	{
		name: "Black Jersey Shayla Hijab",
		description:
			"Elegant and modern hijab for women, made with premium fabric that is soft, breathable, and durable.",
		price: 49.99,
		image: "/img/products/black-jersey-shayla-hijab-rmbg.png",
		rating: 4,
		reviewCount: 230,
		tags: ["Hijab", "Modern", "Elegant"],
		className: "w-full max-w-sm",
	},
	{
		name: "99 Bead Tasbih Black & Tan",
		description:
			"Handcrafted tasbih with 99 beads in black and tan, designed for comfort and durability",
		price: 12.99,
		image: "/img/products/99-bead-tasbih-black-and-tan-rmbg.png",
		rating: 4.5,
		reviewCount: 85,
		tags: ["Tasbih", "Prayer Beads", "99 Beads", "Handcrafted"],
		className: "w-full max-w-sm",
	},
	{
		name: "Ayat Ul Kursi Wall Hanging",
		description:
			"A beautifully crafted wall hanging, made with high-quality materials and intricate designs to enhance your home decor.",
		price: 34.99,
		image: "/img/products/ayat-ul-kursi-wall-hanging-rmbg.png",
		rating: 4.8,
		reviewCount: 120,
		tags: ["Wall Hanging", "Ayat Ul Kursi", "Home Decor"],
		className: "w-full max-w-sm",
	},
	{
		name: "Bakhoor Incense Burner",
		description:
			"A stylish and functional incense burner, made with durable materials and intricate patterns.",
		price: 19.99,
		image: "/img/products/bakhoor-incense-burner-rmbg.png",
		rating: 4.5,
		reviewCount: 110,
		tags: ["Bakhoor", "Incense Burner", "Fragrance", "Decor"],
		className: "w-full max-w-sm",
	},
	{
		name: "Bismillah Islamic Wall Frame",
		description:
			"An elegant Islamic wall frame, perfect for adding a spiritual touch to your home.",
		price: 29.99,
		image: "/img/products/bismillah-islamic-wall-frame-rmbg.png",
		rating: 4.8,
		reviewCount: 140,
		tags: ["Wall Frame", "Bismillah", "Home Decor"],
		className: "w-full max-w-sm",
	},
	{
		name: "Black Seed Honey",
		description:
			"Premium black seed honey, rich in flavor and packed with natural health benefits.",
		price: 14.99,
		image: "/img/products/black-seed-honey-rmbg.png",
		rating: 4.7,
		reviewCount: 175,
		tags: ["Black Seed", "Honey", "Natural", "Health"],
		className: "w-full max-w-sm",
	},
	{
		name: "Pocket Carry Full Quran",
		description:
			"A compact and portable full Quran, ideal for daily reading and spiritual reflection on the go.",
		price: 9.99,
		image: "/img/products/pocket-carry-full-quran-rmbg.png",
		rating: 4.9,
		reviewCount: 220,
		tags: ["Quran", "Portable", "Easy Carry"],
		className: "w-full max-w-sm",
	},
];

// ANCHOR: FAQ Data
// TODO: Add FAQ Data for Mumu Marketplace
export const faqs: Faq[] = [
	{
		question: "What is Mumu Marketplace about?",
		answer: "",
	},
	{
		question: "What are the benefits of Mumu Marketplace?",
		answer: "",
	},
	{
		question: "What is the difference between Mumu and other marketplaces?",
		answer: "",
	},
	{
		question: "Where can I find the latest updates on Mumu Marketplace?",
		answer: "",
	},
	{
		question: "How do you ensure security and privacy?",
		answer: "",
	},
	{
		question: "How do I get started with Mumu?",
		answer:
			"Whether you are a user or a business owner, you can get started with Mumu by signing up for the waitlist and subscribing to our newsletter to stay updated on what we are building.",
	},
];

// ANCHOR: TeamMembers Data
export const teamMembers: TeamMember[] = [
	{
		name: "Mohamad Hamsho",
		title: "Co-Founder",
		avatar: "/img/pfps/mhamsho.avif",
		description:
			"Engineering robust, scalable solutions; Driving innovation and growth for a better future.",
		linkedin: "https://www.linkedin.com/in/mohamad-hamsho-4566b0210/",
		github: "https://github.com/Mhamsho123",
	},
	{
		name: "Muhammad Bilal Khan",
		title: "Co-Founder",
		avatar: "/img/pfps/bilal.avif",
		description:
			"Passionate developer driven to empower Muslim communities through innovative solutions.",
		linkedin: "https://github.com/Hi-kue",
		github: "https://www.linkedin.com/in/hikue/",
	},
	{
		name: "AbuBaker Aljahmi",
		title: "Co-Founder",
		avatar: "/img/pfps/abubaker.avif",
		description:
			"AI innovator crafting data-driven solutions for a positive impact.",
		linkedin: "https://www.linkedin.com/in/abubakr-aljahmi-36b134246/",
		github:
			"https://github.com/BakrJahmi?tab=overview&from=2024-08-01&to=2024-08-06",
	},
	{
		name: "Hamzah Deejay",
		title: "Co-Founder",
		avatar: "/img/pfps/hamzah.avif",
		description: "Designing user experiences that delight and empower.",
		linkedin: "https://www.linkedin.com/in/hamzah-deejay-b28b03294/",
		github: "",
	},
];

// ANCHOR: Grid Card Data
export const cardData: GridCard[] = [
	{
		title: "Global Marketplace",
		subtitle: "A Plethora Of Muslim-Owned Businesses To View",
		description:
			"Every user will have access to a global marketplace of Muslim-owned businesses that we have verified and are actively working with. No more hassle and confusion in finding quality businesses that are aligned with your values.",
		icon: React.createElement(ShoppingCartIcon, { className: "w-8 h-8" }),
	},
	{
		title: "Exposure to a Global Audience",
		subtitle: "Reach Your Target Audience, Anywhere",
		description:
			"As a business owner, you will have access to an audience that is spread across the globe. We will help you reach your target audience, no matter where they are located and what language they speak.",
		icon: React.createElement(GlobeIcon, { className: "w-8 h-8" }),
	},
	{
		title: "AI Powered Solutions",
		subtitle: "AI Powered Solutions for Your Business",
		description:
			"We will provide businesses with RAG chatbots and agentic agents to help engage with your potential and recurring customers to help grow your business and increase your influence.",
		icon: React.createElement(BotIcon, { className: "w-8 h-8" }),
	},
	{
		title: "Dashboard for Business Owners",
		subtitle: "Analytics, Insights, and Instant Feedback",
		description:
			"As a business owner, you will have access to a dashboard to manage your business, review analytics, and stay updated on your businesses outreach.",
		icon: React.createElement(LayoutTemplateIcon, { className: "w-8 h-8" }),
	},
	{
		title: "Mumu Pro Services",
		subtitle: "Essential Services You Didn't Know You Needed",
		description:
			"We provide businesses with essential services that other companaies don't provide, such as sbat (small business analysis tool), centralized databases, and RAG analytic agents (RAGA).",
		icon: React.createElement(OrigamiIcon, { className: "w-8 h-8" }),
	},
	{
		title: "Security and Privacy",
		subtitle: "Protecting Your Business Data, Like It Should Be Protected",
		description:
			"We take your privacy seriously and provide businesses with the tools to protect their data, such as data encryption, data backup, and data recovery.",
		icon: React.createElement(BookLockIcon, { className: "w-8 h-8" }),
	},
];

// ANCHOR: Social Links Data
export const socialLinks: SocialLink[] = [
	{
		name: "Twitter",
		icon: React.createElement(TwitterLogoIcon, { className: "w-8 h-8" }),
		url: "",
	},
	{
		name: "Instagram",
		icon: React.createElement(InstagramLogoIcon, { className: "w-8 h-8" }),
		url: "https://www.instagram.com/officialmumumarket/",
	},
	{
		name: "LinkedIn",
		icon: React.createElement(LinkedInLogoIcon, { className: "w-8 h-8" }),
		url: "",
	},
];

// ANCHOR: Footer Links Data
export const footerLinks: FooterLink[] = [
	{
		text: "About",
		url: "#about",
	},
	{
		text: "Services",
		url: "#services",
	},
	{
		text: "Privacy Policy",
		url: "#",
	},
];

// ANCHOR: Testimonials Data
export const testimonials: Testimonial[] = [
	{
		title: "Incredible Speed",
		quote:
			"Using Bento Grids reduced our development time by 70%. It’s a game-changer for scaling quickly.",
		name: "Sarah Connor",
		icon: React.createElement(StarsIcon, { className: "w-8 h-8" }),
	},
	{
		title: "Excellent Support",
		quote:
			"The support team went above and beyond to help us integrate the components seamlessly. Highly recommended!",
		name: "John Doe",
		icon: React.createElement(StarsIcon, { className: "w-8 h-8" }),
	},
	{
		title: "Customizable and Flexible",
		quote:
			"The flexibility in customizing components allowed us to create a unique design while maintaining consistency.",
		name: "Jane Smith",
		icon: React.createElement(StarsIcon, { className: "w-8 h-8" }),
	},
	{
		title: "Cost-Effective Solution",
		quote:
			"We saved thousands in design and development costs thanks to the ready-to-use components from Bento Grids.",
		name: "Alice Johnson",
		icon: React.createElement(StarsIcon, { className: "w-8 h-8" }),
	},
	{
		title: "User-Friendly",
		quote:
			"Even for someone without much design experience, implementing Bento Grids was intuitive and hassle-free.",
		name: "Mike Brown",
		icon: React.createElement(StarsIcon, { className: "w-8 h-8" }),
	},
	{
		title: "Fantastic Design",
		quote:
			"The pre-designed components look stunning and saved us hours of brainstorming. It’s simply brilliant.",
		name: "Emma Wilson",
		icon: React.createElement(StarsIcon, { className: "w-8 h-8" }),
	},
];

// ANCHOR: Scroll Data
export const scrollContent: ScrollContent[] = [
	{
		title: "",
		description: "",
		content: {} as ReactNode,
	},
	{
		title: "",
		description: "",
		content: {} as ReactNode,
	},
	{
		title: "",
		description: "",
		content: {} as ReactNode,
	},
	{
		title: "",
		description: "",
		content: {} as ReactNode,
	},
];
