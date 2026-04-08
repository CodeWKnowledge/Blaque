import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Package, DollarSign } from 'lucide-react';

const AdminOverview = () => {
    const stats = [
        { label: 'Total Revenue', value: '$12,450', change: '+12%', icon: DollarSign },
        { label: 'Active Orders', value: '24', change: '+5', icon: Package },
        { label: 'Total Customers', value: '1,204', change: '+18%', icon: Users },
        { label: 'Sales Velocity', value: '86%', change: '+4%', icon: TrendingUp },
    ];

    return (
        <div className="max-w-6xl text-black-text">
            <header className="mb-8 lg:mb-12">
                <h1 className="luxury-text text-2xl sm:text-3xl tracking-widest uppercase mb-2 text-black-text">Dashboard Overview</h1>
                <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase text-black-text">Metrics & Analytics</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-onyx/[0.03] border border-onyx/5 p-6 rounded-sm shadow-sm"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-onyx/5 rounded-sm">
                                    <Icon size={18} className="text-gold" strokeWidth={1} />
                                </div>
                                <span className="text-[10px] text-green-600 font-sans font-medium">{stat.change}</span>
                            </div>
                            <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase mb-1 text-black-text">{stat.label}</p>
                            <p className="luxury-text text-2xl tracking-widest text-black-text">{stat.value}</p>
                        </motion.div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-onyx/[0.03] border border-onyx/5 p-6 lg:p-8 rounded-sm shadow-sm">
                    <h3 className="text-[11px] tracking-[0.3em] uppercase mb-6 lg:mb-8 opacity-60 text-black-text">Recent Sales</h3>
                    <div className="space-y-4 lg:space-y-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex justify-between items-center border-b border-onyx/5 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-3 lg:gap-4">
                                    <div className="w-10 h-10 bg-onyx/10 flex items-center justify-center text-[10px] text-black-text">#{String(i).padStart(3, '0')}</div>
                                    <div>
                                        <p className="text-[11px] tracking-widest uppercase mb-1 text-black-text">Order from Client {i}</p>
                                        <p className="text-[9px] opacity-40 uppercase tracking-widest text-black-text">2 hours ago</p>
                                    </div>
                                </div>
                                <span className="luxury-text text-sm text-black-text">$240.00</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-onyx/[0.03] border border-onyx/5 p-6 lg:p-8 rounded-sm flex items-center justify-center min-h-[200px]">
                    <p className="text-[10px] tracking-[0.4em] uppercase opacity-20 italic text-black-text">Visual analytics coming soon</p>
                </div>
            </div>
        </div>
    );
};

export default AdminOverview;
