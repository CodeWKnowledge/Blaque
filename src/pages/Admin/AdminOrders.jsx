import React from 'react';

const AdminOrders = () => {
    const orders = [
        { id: '#8892', customer: 'Julian Vane', date: 'Feb 4, 2026', total: '$480.00', status: 'Processing' },
        { id: '#8891', customer: 'Elena Rossi', date: 'Feb 3, 2026', total: '$210.00', status: 'Shipped' },
        { id: '#8890', customer: 'Marcus Thorne', date: 'Feb 3, 2026', total: '$240.00', status: 'Delivered' },
    ];

    return (
        <div className="max-w-6xl text-black-text">
            <header className="mb-8 lg:mb-12">
                <h1 className="luxury-text text-2xl sm:text-3xl tracking-widest uppercase mb-2 text-black-text">Order Management</h1>
                <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase text-black-text">Shipments & Logistics</p>
            </header>

            {/* Desktop Table View */}
            <div className="hidden lg:block bg-ivory border border-onyx/10 rounded-sm overflow-hidden text-left shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-onyx/10 bg-onyx/[0.03]">
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-black-text">ID</th>
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-black-text">Client</th>
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-black-text">Date</th>
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-black-text">Amount</th>
                            <th className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 font-normal text-black-text">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-onyx/5 last:border-0 hover:bg-onyx/[0.01] transition-colors">
                                <td className="px-8 py-6 text-xs font-mono opacity-80 text-black-text">{order.id}</td>
                                <td className="px-8 py-6 luxury-text text-sm tracking-widest uppercase text-black-text">{order.customer}</td>
                                <td className="px-8 py-6 text-[11px] opacity-40 uppercase text-black-text">{order.date}</td>
                                <td className="px-8 py-6 luxury-text text-sm tracking-widest text-black-text">{order.total}</td>
                                <td className="px-8 py-6">
                                    <span className={`text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-sm ${order.status === 'Processing' ? 'bg-gold/10 text-yellow-700' :
                                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-ivory border border-onyx/10 rounded-sm p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-3 gap-4">
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-mono opacity-80 text-black-text mb-1">{order.id}</p>
                                <p className="luxury-text text-base md:text-lg tracking-widest uppercase text-black-text truncate">{order.customer}</p>
                            </div>
                            <span className={`text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-sm flex-shrink-0 ${order.status === 'Processing' ? 'bg-gold/10 text-yellow-700' :
                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                }`}>
                                {order.status}
                            </span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-onyx/10">
                            <p className="text-[11px] opacity-40 uppercase text-black-text">{order.date}</p>
                            <p className="luxury-text text-lg tracking-widest text-black-text">{order.total}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminOrders;
