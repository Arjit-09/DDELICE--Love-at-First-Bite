'use client';

import { motion } from 'framer-motion';

const partners = [
    { name: 'Swiggy', logo: '🛵' },
    { name: 'Zomato', logo: '🍔' },
    { name: 'Blinkit', logo: '⚡' },
    { name: 'Zepto', logo: '🚀' },
    { name: 'Amazon Fresh', logo: '📦' },
    { name: 'BigBasket', logo: '🛒' },
];

export default function Partners() {
    return (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-lg"
                >
                    <h2 className="mb-sm">Available On Your Favorite Platforms</h2>
                    <p>Order our fresh baked goods from the comfort of your home</p>
                </motion.div>

                <div className="grid grid-3">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="glass-card"
                            style={{
                                textAlign: 'center',
                                cursor: 'pointer',
                                minHeight: '150px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div style={{
                                fontSize: '4rem',
                                marginBottom: 'var(--spacing-sm)',
                            }}>
                                {partner.logo}
                            </div>
                            <h3 style={{ fontSize: '1.25rem' }}>{partner.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
