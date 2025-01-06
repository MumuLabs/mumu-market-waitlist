"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowButton } from "@/components/ui/arrow-button";
import { MumuWaitlistModal } from "./_components/modal";
import { ContactUsModal } from "./_components/contact-us-modal";

export function Hero() {
    const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openWaitlistModal = () => {
        setIsWaitlistModalOpen(true);
    };

    const openContactUsModal = () => {
        setIsContactModalOpen(true);
    };

    return (
        <>
            <div className="text-center max-w-3xl mx-auto px-4 py-20">
                <Image
                    src="/mumu-logo-alt.jpg"
                    alt="Mumu Market Logo"
                    width={400}
                    height={400}
                    className="mx-auto py-10"
                />

                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                    Muslim Shopping, Simplified.
                </h1>
                <p className="text-xl text-slate-600 mb-10">
                    A Single Marketplace For Muslim-Owned Businesses. Discover, Shop, and Support With Ease.
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <ArrowButton 
                        className="hover:shadow-[0_0_15px_hsl(var(--primary)/10%)]" 
                        onClick={openWaitlistModal}
                        text="Join Waitlist!"
                    />
                    <ArrowButton
                        className="hover:shadow-[0_0_15px_hsl(var(--primary)/10%)]"
                        onClick={openContactUsModal}
                        text="Contact Us"
                    />
                </div>
            </div>

            <MumuWaitlistModal 
                isOpen={isWaitlistModalOpen} 
                onClose={() => setIsWaitlistModalOpen(false)} 
            />

            <ContactUsModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}