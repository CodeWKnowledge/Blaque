import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, FileText, ShoppingCart, LogOut, Menu, X } from 'lucide-react';

const AdminLayout = ({ children }) => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Overview', path: '/admin', icon: LayoutDashboard },
        { name: 'Products', path: '/admin/products', icon: Package },
        { name: 'Content', path: '/admin/content', icon: FileText },
        { name: 'Orders', path: '/admin/orders', icon: ShoppingCart },
    ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <div className="min-h-screen bg-ivory text-black-text flex">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-onyx text-white-text rounded-sm shadow-lg"
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-onyx/50 z-30"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-40
                w-64 border-r border-onyx/5 flex flex-col pt-12 bg-ivory
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="px-8 mb-12">
                    <h2 className="luxury-text text-xl tracking-widest uppercase mb-1 text-black-text">Admin</h2>
                    <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase font-sans text-black-text">Control Center</p>
                </div>

                <nav className="flex-1 space-y-2 px-4">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMobileMenu}
                                className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all duration-300 ${isActive
                                    ? 'bg-onyx/5 text-black-text border border-onyx/10'
                                    : 'text-black-text/40 hover:text-black-text hover:bg-onyx/[0.02]'
                                    }`}
                            >
                                <Icon size={18} strokeWidth={1} />
                                <span className="text-[10px] tracking-[0.3em] uppercase">{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-8 border-t border-onyx/5">
                    <Link to="/" className="flex items-center gap-4 text-black-text/40 hover:text-black-text transition-colors" onClick={closeMobileMenu}>
                        <LogOut size={18} strokeWidth={1} />
                        <span className="text-[10px] tracking-[0.3em] uppercase">Exit Admin</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 pt-20 sm:p-6 sm:pt-20 lg:p-12 bg-ivory">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
