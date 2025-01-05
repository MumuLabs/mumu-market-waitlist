"use client";

import React from 'react';
import { Hero } from '@/components/sections/hero';
import { Feature } from '@/components/sections/feature';
import { motion } from 'framer-motion';
import { ProductsSection } from '@/components/sections/product/products';

export default function App() {
  const features = [
    {
      icon: <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: 'Quick onboarding',
      description: 'We have made it super easy for merchants to sign up and start accepting alternate payments'
    },
    {
      icon: <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: 'Low-cost charges',
      description: 'We charge a flat fee on all payment transactions and settle in the merchants local currency'
    },
    {
      icon: <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      title: 'Access to channels',
      description: 'Start accepting mobile money, crypto, cash payments and third-party wallet services'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
      <ProductsSection />
    </motion.div>
  );
}
