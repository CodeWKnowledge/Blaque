import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const SignatureScents = () => {
    const { products } = useShop();

    // Display the first 4 featured scents
    const featuredScents = products.slice(0, 4);

    return (
        <section className="py-24 px-8 bg-ivory border-t border-onyx/5">
            <div className="flex flex-col items-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="luxury-text text-[10px] tracking-[0.5em] uppercase text-black-text mb-4"
                >
                    The Curated Collection
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 30 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-gold/40"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 max-w-6xl mx-auto">
                {featuredScents.map((scent, index) => (
                    <motion.div
                        key={scent.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.2, delay: index * 0.15 }}
                        className="group cursor-pointer"
                    >
                        <Link to={`/product/${scent.id}`}>
                            <div className="relative aspect-[3/4.5] overflow-hidden bg-onyx/[0.03] border border-onyx/5 transition-all duration-700 group-hover:bg-onyx/[0.05] group-hover:shadow-md">
                                <img
                                    src={scent.image}
                                    alt={scent.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-[2s] ease-out group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-onyx/5 group-hover:opacity-0 transition-opacity duration-700" />
                            </div>
                        </Link>

                        <div className="mt-6 text-center flex flex-col items-center px-2">
                            <h3 className="luxury-text text-sm tracking-[0.25em] mb-1.5 text-black-text uppercase">
                                {scent.name}
                            </h3>
                            <p className="font-sans text-[8px] tracking-[0.3em] uppercase opacity-40 mb-4 text-black-text">
                                {scent.mood}
                            </p>
                            <Link
                                to={`/product/${scent.id}`}
                                className="text-[9px] tracking-[0.4em] uppercase border-b border-gold/0 hover:border-gold/50 transition-all duration-500 pb-1 text-black-text/60 hover:text-black-text"
                            >
                                View Scent
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SignatureScents;
