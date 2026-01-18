'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import styles from './KnowMore.module.css';

export default function KnowMore() {
    const contactInfo = [
        { icon: <FiPhone />, label: 'Phone', value: '+91 7300929090', href: 'tel:+917300929090' },
        { icon: <FiMail />, label: 'Email', value: 'info@ddelice.com', href: 'mailto:info@ddelice.com' },
        { icon: <FiMapPin />, label: 'Location', value: 'Lotus, Sector 107, Noida', href: 'https://www.google.com/maps/search/?api=1&query=Lotus,+sector+107,+Noida' },
        { icon: <FiClock />, label: 'Delivery', value: '1 Day Prior Booking', href: '#' },
    ];

    return (
        <section id="knowmore" className={styles.knowMoreSection}>
            <div className="container">
                <motion.div
                    className={styles.contactCard}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.heading}>Get In Touch</h2>
                    <div className={styles.contactGrid}>
                        {contactInfo.map((item, i) => (
                            <a key={i} href={item.href} className={styles.contactItem}>
                                <div className={styles.iconBox}>{item.icon}</div>
                                <div className={styles.infoBox}>
                                    <span>{item.label}</span>
                                    <p>{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
