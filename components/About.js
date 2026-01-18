'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    const values = [
        { title: 'Artisan Quality', desc: 'Handcrafted with precision and premium ingredients.' },
        { title: '100% Eggless', desc: 'Pure vegetarian delights for everyone to enjoy.' },
        { title: 'Freshly Baked', desc: 'Baked to order to ensure the finest experience.' },
    ];

    return (
        <section id="about" className={styles.aboutSection}>
            <div className="container">
                <div className={styles.aboutGrid}>
                    <motion.div
                        className={styles.imageCol}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.mainImageWrapper}>
                            <Image
                                src="/images/founder.png"
                                alt="Our Founder"
                                width={500}
                                height={600}
                                className={styles.aboutImg}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.contentCol}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className={styles.subHeading}>Our Journey</h4>
                        <h2 className={styles.heading}>Crafting Moments of Pure Joy</h2>
                        <p className={styles.description}>
                            DDELICE began with a simple vision: to bring the finest, high-quality eggless delights to your doorstep.
                            Founded by Mrs. Priya Sharma, our bakery is a celebration of flavors, textures, and the love that goes into every creation.
                        </p>

                        <div className={styles.valuesGrid}>
                            {values.map((v, i) => (
                                <div key={i} className={styles.valueItem}>
                                    <h5>{v.title}</h5>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
