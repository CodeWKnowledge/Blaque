import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ShopPage = () => {
    const { products, addToCart } = useShop();

    return (
        <div className="pt-32 pb-40 px-8 bg-ivory min-h-screen text-black-text">
            <header className="max-w-6xl mx-auto mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="luxury-text text-4xl tracking-[0.3em] uppercase mb-4 text-black-text"
                >
                    The Showroom
                </motion.h1>
                <div className="h-[1px] w-12 bg-gold/40 mx-auto mb-6"></div>
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase opacity-40 text-black-text">
                    Handpicked Selection / 2026 Collection
                </p>
            </header>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        className="group"
                    >
                        <Link to={`/product/${product.id}`}>
                            <div className="relative aspect-[3/4.5] bg-onyx/[0.03] border border-onyx/5 overflow-hidden mb-8 relative shadow-sm transition-all duration-700 group-hover:bg-onyx/[0.05] group-hover:shadow-md">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-onyx/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                                    <span className="text-[9px] tracking-[0.5em] uppercase border border-ivory/30 px-6 py-3 text-white-text backdrop-blur-sm">View Details</span>
                                </div>
                                <div className="absolute inset-0 bg-onyx/5 group-hover:opacity-0 transition-opacity duration-700" />
                            </div>
                        </Link>

                        <div className="text-center flex flex-col items-center px-2">
                            <h3 className="luxury-text text-sm tracking-[0.2em] mb-1.5 uppercase text-black-text">
                                {product.name}
                            </h3>
                            <p className="font-sans text-[9px] tracking-[0.3em] opacity-40 uppercase mb-4 text-black-text">
                                {product.brand}
                            </p>

                            <div className="flex flex-col items-center gap-4">
                                <p className="luxury-text text-sm tracking-widest text-black-text">${product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="text-[10px] tracking-[0.3em] uppercase border-b border-gold/0 hover:border-gold/50 transition-all duration-500 pb-1 text-black-text/60 hover:text-black-text"
                                >
                                    Add to Bag
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
