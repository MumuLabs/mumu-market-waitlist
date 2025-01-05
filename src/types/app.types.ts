export type FeatureType = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export type BusinessValueType = {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    imageClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export type ProductType = {
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    reviewCount: number;
    tags: string[];
    className?: string;
}