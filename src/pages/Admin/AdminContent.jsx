import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Save, RefreshCw } from 'lucide-react';

const AdminContent = () => {
    const { content, updateContent } = useAdmin();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        updateContent({ [name]: type === 'checkbox' ? checked : value });
    };

    return (
        <div className="max-w-4xl text-black-text">
            <header className="flex justify-between items-end mb-12">
                <div>
                    <h1 className="luxury-text text-3xl tracking-widest uppercase mb-2 text-black-text">Interface Control</h1>
                    <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase text-black-text">Manage Global Content & Sections</p>
                </div>
            </header>

            <div className="space-y-12">
                {/* Section Visibility */}
                <section className="bg-onyx/[0.03] border border-onyx/5 p-8 rounded-sm shadow-sm">
                    <h3 className="text-[11px] tracking-[0.3em] uppercase mb-8 opacity-60 flex items-center gap-4 text-black-text">
                        Visibility Toggle
                        <div className="h-px flex-1 bg-onyx/5"></div>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {Object.keys(content).filter(k => k.startsWith('show')).map(key => (
                            <label key={key} className="flex flex-col gap-3 cursor-pointer group">
                                <span className="text-[9px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity text-black-text">
                                    {key.replace('show', '')}
                                </span>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        name={key}
                                        checked={content[key]}
                                        onChange={handleChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-12 h-6 bg-onyx/10 rounded-full peer peer-checked:bg-gold transition-colors duration-500"></div>
                                    <div className="absolute top-1 left-1 peer-checked:left-7 w-4 h-4 bg-ivory rounded-full transition-all duration-500 shadow-sm"></div>
                                </div>
                            </label>
                        ))}
                    </div>
                </section>

                {/* Text Content */}
                <section className="bg-onyx/[0.03] border border-onyx/5 p-8 rounded-sm space-y-8 shadow-sm">
                    <h3 className="text-[11px] tracking-[0.3em] uppercase mb-8 opacity-60 flex items-center gap-4 text-black-text">
                        Text & Copy
                        <div className="h-px flex-1 bg-onyx/5"></div>
                    </h3>

                    <div className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[9px] tracking-[0.2em] uppercase opacity-40 text-black-text">Hero Main Title</label>
                            <input
                                name="heroTitle"
                                value={content.heroTitle}
                                onChange={handleChange}
                                className="bg-ivory border border-onyx/10 px-4 py-3 text-sm focus:border-gold outline-none transition-colors text-black-text font-sans"
                                placeholder="BLAQUE"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[9px] tracking-[0.2em] uppercase opacity-40 text-black-text">Hero Tagline</label>
                            <input
                                name="heroTagline"
                                value={content.heroTagline}
                                onChange={handleChange}
                                className="bg-ivory border border-onyx/10 px-4 py-3 text-sm focus:border-gold outline-none transition-colors text-black-text italic font-serif"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[9px] tracking-[0.2em] uppercase opacity-40 text-black-text">Philosophy Paragraph</label>
                            <textarea
                                name="philosophyBody"
                                value={content.philosophyBody}
                                onChange={handleChange}
                                rows={4}
                                className="bg-ivory border border-onyx/10 px-4 py-3 text-sm focus:border-gold outline-none transition-colors leading-relaxed text-black-text font-sans"
                            />
                        </div>
                    </div>
                </section>

                <div className="flex gap-4">
                    <button className="flex-1 py-5 bg-onyx text-white-text text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-gold hover:text-black-text transition-all flex items-center justify-center gap-4">
                        <Save size={16} /> Save Changes
                    </button>
                    <button className="px-8 py-5 border border-onyx/10 text-black-text text-[10px] tracking-[0.5em] uppercase hover:bg-onyx/[0.02] transition-all">
                        <RefreshCw size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminContent;
