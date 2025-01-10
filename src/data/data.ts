import { FeatureType, ProductType, BusinessValueType } from "@/types";
import {
    // ANCHOR: Icons to Add Later (Phase 3-4)
    ShoppingCartIcon,
    GlobeIcon,
    BotIcon,
    LayoutTemplateIcon,
    OrigamiIcon,
    BookLockIcon,
    StarsIcon,

    ScanBarcodeIcon,
    TruckIcon,
    ShoppingBasketIcon,
} from "lucide-react";
import React from "react";


export const FeaturesArray: FeatureType[] = [
    {
        icon: React.createElement(ShoppingBasketIcon, { className: "w-8 h-8" }),
        title: "Explore",
        description: `
        Browse our curated selection of products from trusted
        Muslim-owned businesses, each verified for authenticity.
        `,
    },
    {
        icon: React.createElement(ScanBarcodeIcon, { className: "w-8 h-8" }),
        title: "Purchase",
        description: `
        Quickly find and buy your desired items from faith-driven merchants. 
        It's simple and secure.
        `,
    },
    {
        icon: React.createElement(TruckIcon, { className: "w-8 h-8" }),
        title: "Support",
        description: `
        Every purchase helps Muslim entrepreneurs thrive, 
        fostering a vibrant and united community.
        `,
    },
];


export const BusinessValueArray: BusinessValueType[] = [
    {
        title: "١. Exposure",
        description:
            "Get your brand in front of a global audience actively searching for Muslim-owned businesses. Make your presence shine.",
        image: {
            src: "/sections/business-values/brand-exposure.png",
            alt: "Exposure",
            width: 350,
            height: 350
        },
        imageClassName: "",
        titleClassName: "",
        descriptionClassName: ""
    },
    {
        title: "٢. Brand Growth",
        description:
            "Elevate awareness by harnessing a dedicated platform. Mumu Market helps turn curious shoppers into loyal customers.",
        image: {
            src: "/sections/business-values/brand-growth.png",
            alt: "Brand Growth",
            width: 350,
            height: 350
        },
        imageClassName: "",
        titleClassName: "",
        descriptionClassName: ""
    },
    {
        title: "٣. Increased Revenue",
        description:
            "Boost your sales by tapping into a community that values authentic, faith-driven enterprises. Watch profits soar.",
        image: {
            src: "/sections/business-values/brand-increased-revenue.png",
            alt: "Increased Revenue",
            width: 350,
            height: 350
        },
        imageClassName: "",
        titleClassName: "",
        descriptionClassName: ""
    },
];


export const ProductArray: ProductType[] = [
    {
        name: "Kabaa Mat",
        description:
            "Premium prayer mat for both men and women with a unique design.",
        price: 45.99,
        image: "/products/kabaa-mat-rmbg.png",
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
        image: "/products/musk-amber-cologne-rmbg.png",
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
        image: "/products/noor-abaya-rmbg.png",
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
        image: "/products/aydin-prayer-rug-rmbg.png",
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
        image: "/products/palestine-braided-jewelry-rmbg.png",
        rating: 4.9,
        reviewCount: 245,
        tags: ["Palestine", "Braided", "Jewelry"],
        className: "w-full max-w-sm",
    },
    {
        name: "Palestine T-Shirt",
        description: "A minimal and elegant t-shirt with a minimal design.",
        price: 29.99,
        image: "/products/palestine-t-shirt-rmbg.png",
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
        image: "/products/deluxe-quran-gift-set-rmbg.png",
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
            "/products/modefa-perfume-aksa-concentrated-essential-oil-rmbg.png",
        rating: 4.6,
        reviewCount: 250,
        tags: ["Modefa", "Perfume", "Concentrated", "Oil"],
        className: "w-full max-w-sm",
    },
    {
        name: "Black Jersey Shayla Hijab",
        description:
            "Elegant and modern hijab for women, made with premium fabric that is soft, breathable, and durable.",
        price: 49.99,
        image: "/products/black-jersey-shayla-hijab-rmbg.png",
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
        image: "/products/99-bead-tasbih-black-and-tan-rmbg.png",
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
        image: "/products/ayat-ul-kursi-wall-hanging-rmbg.png",
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
        image: "/products/bakhoor-incense-burner-rmbg.png",
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
        image: "/products/bismillah-islamic-wall-frame-rmbg.png",
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
        image: "/products/black-seed-honey-rmbg.png",
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
        image: "/products/pocket-carry-full-quran-rmbg.png",
        rating: 4.9,
        reviewCount: 220,
        tags: ["Quran", "Portable", "Easy Carry"],
        className: "w-full max-w-sm",
    },
];
