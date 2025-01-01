import { ReactNode } from "react";

export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Logo = {
	src: string;
	alt: string;
};

export type ProcessStep = {
	icon: React.ReactNode;
	title: string;
	description: string;
	className?: string;
};

export type Faq = {
	question: string;
	answer: string;
	tags?: string[];
};

export type TeamMember = {
	name: string;
	title: string;
	avatar: string;
	description: string;
	linkedin?: string;
	github?: string;
};

export type GridCard = {
	title: string;
	subtitle: string;
	description: string;
	icon: React.ReactNode;
};

export type SocialLink = {
	name: string;
	icon: React.ReactNode;
	url: string;
};

export type FooterLink = {
	text: string;
	url: string;
};

export type BentoCard = {
	title: string;
	description: string;
	image: string;
};

export type Testimonial = {
	title: string;
	quote: string;
	name: string;
	icon: React.ReactNode;
};

export type ScrollContent = {
	title: string;
	description: string;
	content: ReactNode;
};

export type Product = {
	name: string;
	description: string;
	price: number;
	image: string;
	rating: number;
	reviewCount: number;
	tags?: string[];
	className?: string;
};
