'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.brandCol}>
                        <h2 className={styles.footerLogo}>DDELICE</h2>
                        <p className={styles.tagline}>Love at First Bite</p>
                        <div className={styles.socialLinks}>
                            <motion.a
                                href="https://www.instagram.com/ddelice__?igsh=MXdsMmJtejQ4eDUxbg%3D%3D&utm_source=q"
                                className={styles.socialIcon}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.8, rotate: -15 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <FaInstagram />
                                <span className={styles.tooltip}>Instagram 3D Tap!</span>
                            </motion.a>
                            <a
                                href="https://wa.me/917300929090"
                                className={styles.socialIcon}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://g.page/r/CbBm5AHEY1Q2EAI/review"
                                className={styles.socialIcon}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGoogle />
                            </a>
                        </div>
                    </div>

                    <div className={styles.linkCol}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#creations">Our Creations</a></li>
                            <li><a href="#knowmore">Know More</a></li>
                        </ul>
                    </div>

                    <div className={styles.certCol}>
                        <h4>Accreditation</h4>
                        <div className={styles.certBox}>
                            <p>fssai</p>
                            <span>Lic No: 22724441002665</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {currentYear} DDelice - All Rights Reserved</p>
                    <div className={styles.highlights}>
                        <span>Premium Ingredients</span>
                        <span>100% Eggless</span>
                        <span>Hygienic Home Bakery</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
