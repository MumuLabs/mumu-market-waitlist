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
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={heroRef}
          initial={{ scale: 0.8 }}
          animate={isHeroInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          ref={productsRef}
          initial={{ scale: 0.8 }}
          animate={isProductsInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        >
          <ProductsSection />
        </motion.div>

        <motion.div 
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 py-12 sm:py-16 md:py-20"
          initial={{ scale: 0.9 }}
          animate={isFeaturesInView ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        >
          {FeaturesArray.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5 }}
              animate={isFeaturesInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <Feature {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        ref={valuesRef}
        initial={{ scale: 0.8 }}
        animate={isValuesInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
      >
        <BusinessValuesSection />
      </motion.div>
    </motion.div>
  );
}
