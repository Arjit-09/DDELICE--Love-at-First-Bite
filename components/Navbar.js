'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Our Creations', href: '#creations' },
        { name: 'Know More', href: '#knowmore' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <motion.div
                    className={styles.logoWrapper}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <motion.div
                        className={styles.logoContainer}
                        whileHover={{
                            rotateY: 8,
                            rotateX: -5,
                            scale: 1.08,
                        }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                        <Image
                            src="/images/logo.jpg"
                            alt="DDELICE Logo"
                            width={60}
                            height={60}
                            className={styles.logoImage}
                            priority
                        />
                    </motion.div>
                    <span className={styles.logoText}>DDELICE</span>
                </motion.div>

                <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setIsOpen(false)}
                            whileHover={{ y: -2 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>
        </nav>
    );
}
