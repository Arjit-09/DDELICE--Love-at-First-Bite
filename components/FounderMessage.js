'use client';

import { motion } from 'framer-motion';

export default function FounderMessage() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                    {/* Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="glass-card" style={{
                            padding: '0',
                            overflow: 'hidden',
                        }}>
                            <img
                                src="/images/founder.png"
                                alt="Our Founder"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Message Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-md">A Message from Our Founder</h2>
                        <p style={{ marginBottom: 'var(--spacing-sm)', lineHeight: '1.8' }}>
                            "Every loaf we bake carries a story of tradition, passion, and dedication.
                            At The Baker's Dozen, we believe in the art of slow fermentation, using only
                            the finest organic ingredients to create bread that nourishes both body and soul."
                        </p>
                        <p style={{ marginBottom: 'var(--spacing-sm)', lineHeight: '1.8' }}>
                            Our journey began with a simple sourdough starter and a dream to bring authentic
                            artisan baking to every household. Today, we're proud to serve communities across
                            the country, one handcrafted creation at a time.
                        </p>
                        <p style={{
                            fontStyle: 'italic',
                            color: 'var(--accent-primary)',
                            fontSize: '1.1rem',
                            marginTop: 'var(--spacing-md)',
                        }}>
                            - Sarah Thompson, Master Baker & Founder
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
