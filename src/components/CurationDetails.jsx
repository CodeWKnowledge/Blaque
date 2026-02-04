import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Diamond } from 'lucide-react';

const CurationDetails = () => {
    const pillars = [
        {
            icon: Search,
            title: "The Search",
            desc: "Our curators travel to the world's most remote perfume houses, seeking scents that defy convention and define character."
        },
        {
            icon: ShieldCheck,
            title: "The Selection",
            desc: "Only one in a hundred fragrances makes it to our showroom. We look for complexity, longevity, and an unmistakable aura."
        },
        {
            icon: Diamond,
            title: "The Presentation",
            desc: "Each bottle is authenticated and housed in our custom BLAQUE climate-controlled vault before it reaches your hands."
        }
    ];

    return (
        <section id="about" className="py-32 px-8 bg-onyx">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                {pillars.map((pillar, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="text-center flex flex-col items-center border-t border-gold/70"
                    >
                        <div className="w-12 h-12 rounded-full border border-gold/70 flex items-center justify-center mb-8">
                            <pillar.icon size={20} className="text-white-text opacity-90" strokeWidth={1} />
                        </div>
                        <h3 className="luxury-text text-xl tracking-widest uppercase mb-4 text-white-text">{pillar.title}</h3>
                        <p className="font-sans text-xs tracking-widest leading-relaxed opacity-60 uppercase text-white-text">
                            {pillar.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// Helper for icon
const DoubleQuotes = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h1s0 0 0 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /></svg>
);

export default CurationDetails;
