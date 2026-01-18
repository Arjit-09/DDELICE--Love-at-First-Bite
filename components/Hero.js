'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.heroSection}>
            <div className={styles.heroContent}>
                <motion.div
                    className={styles.logoContainer}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Image
                        src="/images/logo.jpg"
                        alt="DDELICE"
                        width={150}
                        height={150}
                        className={styles.circularHeroLogo}
                        priority
                    />
                </motion.div>

                <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 50, rotateX: 45 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Love at First Bite
                </motion.h1>

                <motion.p
                    className={styles.heroSubtitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Artisan Eggless Delights Crafted with Passion. <br />
                    Experience the richness of premium ingredients in every bite.
                </motion.p>

                <motion.div
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <a href="#creations" className={styles.primaryBtn}>
                        Explore Our Creations
                    </a>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FiChevronDown />
            </motion.div>

            <div className={styles.overlay}></div>
        </section>
    );
}
