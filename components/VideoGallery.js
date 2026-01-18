'use client';

import { motion } from 'framer-motion';

const videos = [
    { title: 'Sourdough Making Process', image: '/images/hero-sourdough.png' },
    { title: 'Cookie Recipe Tutorial', image: '/images/cookies.png' },
    { title: 'Croissant Folding Technique', image: '/images/croissants.png' },
    { title: 'Cake Decoration Tips', image: '/images/cake.png' },
    { title: 'Behind the Scenes', image: '/images/founder.png' },
    { title: 'Baking Tips & Tricks', image: '/images/hero-sourdough.png' },
];

export default function VideoGallery() {
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
                    <h2 className="mb-sm">Cook With Us</h2>
                    <p>Explore our recipes, techniques, and behind-the-scenes content</p>
                </motion.div>

                <div className="grid grid-3">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                cursor: 'pointer',
                                position: 'relative',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                aspectRatio: '9/16',
                                background: 'var(--bg-card)',
                            }}
                        >
                            <img
                                src={video.image}
                                alt={video.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: 'var(--spacing-sm)',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                            }}>
                                <h4 style={{ fontSize: '1rem', color: 'white' }}>{video.title}</h4>
                            </div>
                            {/* Play Button */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'var(--accent-gradient)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                boxShadow: 'var(--shadow-glow)',
                            }}>
                                ▶
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
