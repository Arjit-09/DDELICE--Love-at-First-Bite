'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ name, description, image, index }) {
    const defaultImage = '/images/cake.png'; // Fallback if image doesn't exist

    return (
        <motion.div
            className={styles.cardWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className={styles.cardInner}>
                <div className={styles.imageBox}>
                    <Image
                        src={image || defaultImage}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.productImg}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    />
                </div>
                <div className={styles.contentBox}>
                    <h4 className={styles.productName}>{name}</h4>
                    <p className={styles.productDesc}>{description}</p>
                </div>
            </div>
        </motion.div>
    );
}
