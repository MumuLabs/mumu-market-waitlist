import React, { ReactNode } from "react";

import {
	Logo,
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
} from "lucide-react";
import {
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

// ANCHOR: Logos Data
export const logos: Logo[] = [
	{
		src: "/img/logos/mumu-logo.png",
		alt: "MumuLabs Mumu Logo",
	},
	{
		src: "/img/logos/mumu-logo.png",
		alt: "MumuLabs Mumu Logo",
	},
];

// ANCHOR: Product Data
export const productData: Product[] = [
	{
		name: "Mumu Pro",
		description: "The ultimate Mumu Marketplace experience.",
		price: 19.99,
		image: "/img/pfps/mumu-pro.avif",
		rating: 4.5,
		reviewCount: 12,
		tags: ["Mumu", "Marketplace", "Pro"],
		className: "w-full max-w-sm",
	},
	{
		name: "Mumu Pro",
		description: "The ultimate Mumu Marketplace experience.",
		price: 19.99,
		image: "/img/pfps/mumu-pro.avif",
		rating: 4.5,
		reviewCount: 12,
		tags: ["Mumu", "Marketplace", "Pro"],
		className: "w-full max-w-sm",
	},
];

// ANCHOR: FAQ Data
export const faqs: Faq[] = [
	{
		question: "What is Mumu Marketplace About?",
		answer: "",
	},
	{
		question: "What are the Benefits of Mumu Marketplace?",
		answer: "",
	},
	{
		question: "",
		answer: "",
	},
	{
		question: "",
		answer: "",
	},
	{
		question: "",
		answer: "",
	},
	{
		question: "How Do I Get Started with Mumu?",
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
		url: "",
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
		url: "#",
	},
	{
		text: "Services",
		url: "#",
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
