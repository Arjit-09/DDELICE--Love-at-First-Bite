'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ end, duration = 2, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
    { label: 'Years of Excellence', value: 15, suffix: '+' },
    { label: 'Cities Covered', value: 25, suffix: '+' },
    { label: 'Happy Customers', value: 100000, suffix: '+' },
    { label: 'Fresh Breads Daily', value: 5000, suffix: '+' },
];

export default function Statistics() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-lg"
                >
                    <h2 className="mb-sm">Our Impact in Numbers</h2>
                    <p>Building trust and delivering excellence, one bread at a time</p>
                </motion.div>

                <div className="grid grid-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-3d animate-pulse"
                            style={{
                                textAlign: 'center',
                                padding: 'var(--spacing-lg)',
                            }}
                        >
                            <h2 style={{
                                fontSize: '3.5rem',
                                background: 'var(--accent-gradient)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: 'var(--spacing-sm)',
                            }}>
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
