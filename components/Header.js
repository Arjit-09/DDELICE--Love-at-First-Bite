'use client';

import { useState } from 'react';

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <header>
            <nav>
                <div className="logo">The Baker's Dozen</div>

                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li
                        onMouseEnter={() => setActiveDropdown('about')}
                        onMouseLeave={() => setActiveDropdown(null)}
                        style={{ position: 'relative' }}
                    >
                        <a href="#about">About Us ▾</a>
                        {activeDropdown === 'about' && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                marginTop: '1rem',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: 'var(--radius-md)',
                                padding: '1rem',
                                minWidth: '200px',
                                boxShadow: 'var(--shadow-md)',
                            }}>
                                <a href="#journey" style={{ display: 'block', padding: '0.5rem', color: 'var(--text-primary)' }}>Brand Journey</a>
                                <a href="#sustainability" style={{ display: 'block', padding: '0.5rem', color: 'var(--text-primary)' }}>Sustainability</a>
                                <a href="#giving-back" style={{ display: 'block', padding: '0.5rem', color: 'var(--text-primary)' }}>Giving Back</a>
                            </div>
                        )}
                    </li>

                    <li>
                        <a href="#products">Our Creations</a>
                    </li>

                    <li
                        onMouseEnter={() => setActiveDropdown('more')}
                        onMouseLeave={() => setActiveDropdown(null)}
                        style={{ position: 'relative' }}
                    >
                        <a href="#more">Know More ▾</a>
                        {activeDropdown === 'more' && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                marginTop: '1rem',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: 'var(--radius-md)',
                                padding: '1rem',
                                minWidth: '200px',
                                boxShadow: 'var(--shadow-md)',
                            }}>
                                <a href="#faq" style={{ display: 'block', padding: '0.5rem', color: 'var(--text-primary)' }}>FAQ</a>
                                <a href="#contact" style={{ display: 'block', padding: '0.5rem', color: 'var(--text-primary)' }}>Contact</a>
                                <a href="#blogs" style={{ display: 'block', padding: '0.5rem', color: 'var(--text-primary)' }}>Blogs</a>
                                <a href="#locations" style={{ display: 'block', padding: '0.5rem', color: 'var(--text-primary)' }}>Locations</a>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
