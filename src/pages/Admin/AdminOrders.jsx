import React from 'react';

const AdminOrders = () => {
    const orders = [
        { id: '#8892', customer: 'Julian Vane', date: 'Feb 4, 2026', total: '$480.00', status: 'Processing' },
        { id: '#8891', customer: 'Elena Rossi', date: 'Feb 3, 2026', total: '$210.00', status: 'Shipped' },
        { id: '#8890', customer: 'Marcus Thorne', date: 'Feb 3, 2026', total: '$240.00', status: 'Delivered' },
    ];

    return (
        <div className="max-w-6xl text-black-text">
            <header className="mb-12">
                <h1 className="luxury-text text-3xl tracking-widest uppercase mb-2 text-black-text">Order Management</h1>
                <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase text-black-text">Shipments & Logistics</p>
            </header>

            <div className="bg-ivory border border-onyx/10 rounded-sm overflow-hidden text-left shadow-sm">
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
        </div>
    );
};

export default AdminOrders;
