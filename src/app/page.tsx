"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';

import { Hero } from '@/components/sections/hero/hero';
import { ProductsSection } from '@/components/sections/products';
import { Feature } from '@/components/sections/feature';
import { FeaturesArray } from '@/data/data';
import { BusinessValuesSection } from '@/components/sections/values';

export default function App() {
  const heroRef = React.useRef(null);
  const productsRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const valuesRef = React.useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={heroRef}
          initial={{ y: 50, opacity: 0 }}
          animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          ref={productsRef}
          initial={{ x: -50, opacity: 0 }}
          animate={isProductsInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProductsSection />
        </motion.div>

        <motion.div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isFeaturesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {FeaturesArray.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isFeaturesInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Feature {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        ref={valuesRef}
        initial={{ y: 50, opacity: 0 }}
        animate={isValuesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <BusinessValuesSection />
      </motion.div>
    </motion.div>
  );
}
