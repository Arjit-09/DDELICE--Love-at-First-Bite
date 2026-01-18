'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const products = [
    {
        name: 'Artisan Sourdough',
        category: 'Breads',
        image: '/images/hero-sourdough.png',
        description: 'Traditional sourdough with crispy crust',
    },
    {
        name: 'Chocolate Chip Cookies',
        category: 'Cookies',
        image: '/images/cookies.png',
        description: 'Gooey chocolate chip perfection',
    },
    {
        name: 'Butter Croissants',
        category: 'Pastries',
        image: '/images/croissants.png',
        description: 'Flaky, buttery French pastries',
    },
    {
        name: 'Layered Cake',
        category: 'Cakes',
        image: '/images/cake.png',
        description: 'Decadent multi-layer masterpiece',
    },
];

const categories = ['All', 'Breads', 'Cookies', 'Pastries', 'Cakes'];

export default function BestSellers() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="products" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-lg"
                >
                    <h2 className="mb-sm">Our Best Sellers</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Discover our most loved creations, handcrafted daily with passion and expertise
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--spacing-sm)',
                    marginBottom: 'var(--spacing-lg)',
                    flexWrap: 'wrap',
                }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: 'var(--radius-full)',
                                border: activeCategory === category ? 'none' : '2px solid var(--glass-border)',
                                background: activeCategory === category ? 'var(--accent-gradient)' : 'transparent',
                                color: 'white',
                                cursor: 'pointer',
                                fontWeight: '600',
                                transition: 'all var(--transition-normal)',
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-4">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="card-3d"
                            style={{
                                textAlign: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <div style={{
                                marginBottom: 'var(--spacing-sm)',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                height: '250px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--bg-tertiary)',
                            }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                                {product.name}
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                                {product.category}
                            </p>
                            <p style={{ fontSize: '0.95rem' }}>
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
