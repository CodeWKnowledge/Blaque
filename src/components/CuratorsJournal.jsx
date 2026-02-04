import React from 'react';
import { motion } from 'framer-motion';

const CuratorsJournal = () => {
    const entries = [
        {
            date: "Autumn 2026",
            title: "The Architecture of Night",
            excerpt: "Exploring the relationship between shadow and scent in the heart of Grasse."
        },
        {
            date: "Winter 2025",
            title: "Rare Earth & Resin",
            excerpt: "The discovery of a century-old oud distillation technique in the Far East."
        }
    ];

    return (
        <section className="py-24 px-8 bg-ivory">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-4 block text-black-text">The Selection</span>
                        <h2 className="luxury-text text-3xl md:text-4xl tracking-widest uppercase text-black-text">Curator's Journal</h2>
                    </div>
                    <button className="text-[10px] tracking-[0.4em] uppercase border-b border-onyx/20 pb-1 hover:border-onyx transition-colors text-black-text">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {entries.map((entry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer border-l border-gold/70 pl-8 transition-colors hover:border-gold"
                        >
                            <p className="text-[9px] tracking-[0.3em] uppercase opacity-40 mb-4 text-black-text">{entry.date}</p>
                            <h3 className="luxury-text text-2xl tracking-widest uppercase mb-6 group-hover:text-gold transition-colors text-gold/70">{entry.title}</h3>
                            <p className="font-sans text-xs tracking-widest leading-loose opacity-60 uppercase mb-8 max-w-sm text-black-text">
                                {entry.excerpt}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuratorsJournal;
