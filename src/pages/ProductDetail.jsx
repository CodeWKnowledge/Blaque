import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, Plus, Minus } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, addToCart } = useShop();
    const [quantity, setQuantity] = useState(1);
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <div className="h-screen flex items-center justify-center bg-ivory text-black-text">Scent not found</div>;

    return (
        <div className="pt-32 pb-40 px-8 bg-ivory min-h-screen text-black-text">
            <div className="max-w-7xl mx-auto">
                <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-opacity mb-12 text-black-text">
                    <ArrowLeft size={14} /> Back to Showroom
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="aspect-[4/5] bg-onyx/[0.02] border border-onyx/5 overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="flex flex-col"
                    >
                        <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-2 font-sans text-black-text">{product.brand}</p>
                        <h1 className="luxury-text text-5xl md:text-6xl tracking-widest uppercase mb-4 text-black-text">{product.name}</h1>
                        <p className="text-gold tracking-[0.4em] text-xs uppercase mb-12">{product.mood}</p>

                        <p className="font-sans text-base leading-relaxed opacity-70 mb-12 max-w-lg text-black-text">
                            {product.description}
                        </p>

                        {/* Scent Profile */}
                        <div className="grid grid-cols-3 gap-8 border-y border-onyx/10 py-10 mb-12">
                            <div>
                                <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-3 text-black-text">Top</p>
                                <p className="text-xs uppercase tracking-widest text-black-text">{product.notes.top}</p>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-3 text-black-text">Heart</p>
                                <p className="text-xs uppercase tracking-widest text-black-text">{product.notes.heart}</p>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-3 text-black-text">Base</p>
                                <p className="text-xs uppercase tracking-widest text-black-text">{product.notes.base}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-1 text-black-text">Price</p>
                                <p className="luxury-text text-2xl tracking-widest text-black-text">${product.price}</p>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-1 text-black-text">Volume</p>
                                <p className="luxury-text text-xl tracking-widest text-black-text">{product.size}</p>
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-6 mb-12 border-t border-onyx/5 pt-12">
                            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 text-black-text">Quantity</p>
                            <div className="flex items-center border border-onyx/10 bg-white/50 backdrop-blur-sm">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-6 py-4 hover:bg-onyx/5 transition-colors border-r border-onyx/10"
                                >
                                    <Minus size={14} strokeWidth={1} />
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-16 text-center bg-transparent font-sans text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-6 py-4 hover:bg-onyx/5 transition-colors border-l border-onyx/10"
                                >
                                    <Plus size={14} strokeWidth={1} />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => addToCart(product, quantity)}
                            className="w-full py-6 bg-onyx text-white-text font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-gold hover:text-black-text transition-all duration-700 flex items-center justify-center gap-4 border border-onyx"
                        >
                            <Plus size={16} /> Add to Bag
                        </button>

                        <div className="mt-12 space-y-4">
                            <details className="group border-b border-onyx/5 pb-4 cursor-pointer">
                                <summary className="list-none flex justify-between items-center text-[10px] tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100 transition-opacity text-black-text">
                                    Composition & Notes
                                    <span className="group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="mt-4 text-xs opacity-50 leading-loose text-black-text">
                                    Our fragrances are produced in small batches in Grasse, France. Using the finest natural absolutes and refined synthetic accords to ensure longevity and sillage.
                                </p>
                            </details>
                            <details className="group border-b border-onyx/5 pb-4 cursor-pointer">
                                <summary className="list-none flex justify-between items-center text-[10px] tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100 transition-opacity text-black-text">
                                    Shipping & Returns
                                    <span className="group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="mt-4 text-xs opacity-50 leading-loose text-black-text">
                                    Complimentary worldwide shipping on all orders over $200. Each fragrance comes with a 2ml sample for trial before opening the full bottle.
                                </p>
                            </details>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
