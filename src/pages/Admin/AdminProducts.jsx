import React from 'react';
import { useShop } from '../../context/ShopContext';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Tag } from 'lucide-react';

const AdminProducts = () => {
    const { products } = useShop();

    return (
        <div className="max-w-6xl text-black-text">
            <header className="flex justify-between items-end mb-12">
                <div>
                    <h1 className="luxury-text text-3xl tracking-widest uppercase mb-2 text-black-text">Inventory Control</h1>
                    <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase text-black-text">Manage Scents & Pricing</p>
                </div>
                <button className="flex items-center gap-3 px-8 py-3 bg-onyx text-white-text text-[10px] tracking-[0.3em] uppercase hover:bg-gold hover:text-black-text transition-all duration-500 border border-onyx">
                    <Plus size={14} /> Add New Scent
                </button>
            </header>

            <div className="bg-ivory border border-onyx/10 rounded-sm overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-onyx/10 bg-onyx/[0.03]">
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-black-text">Scent</th>
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-black-text">Pricing</th>
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-black-text">Stock</th>
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-right text-black-text">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-onyx/5 last:border-0 hover:bg-onyx/[0.01] transition-colors">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-20 bg-onyx/5 flex items-center justify-center">
                                            <img src={product.image} className="w-full h-full object-cover grayscale" alt="" />
                                        </div>
                                        <div>
                                            <p className="luxury-text text-lg tracking-widest uppercase mb-1 text-black-text">{product.name}</p>
                                            <p className="text-[9px] tracking-widest opacity-40 uppercase text-black-text">{product.mood}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <p className="luxury-text text-sm tracking-widest text-black-text">${product.price}</p>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500/40 border border-green-600 shadow-sm"></div>
                                        <span className="text-[11px] font-sans opacity-60 italic text-black-text">In Stock</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex justify-end items-center gap-4 text-black-text/40">
                                        <button className="hover:text-gold transition-colors">
                                            <Edit2 size={16} strokeWidth={1} />
                                        </button>
                                        <button className="hover:text-red-600 transition-colors">
                                            <Trash2 size={16} strokeWidth={1} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProducts;
