'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className="container">
                <div className={styles.aboutGrid}>
                    <motion.div
                        className={styles.contentCol}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.heading}>About us</h2>

                        <p className={styles.description}>
                            There's something magical about watching a cake rise, cutting into a warm loaf and slowing down for that first bite after a long day. Somewhere between those moments, DDelice was born.
                        </p>

                        <p className={styles.description}>
                            What began as my mother and I baking for family and friends has slowly grown into a brand we're building with a lot of love, late nights and big dreams. DDelice is our way of turning that feeling of comfort, celebration and sweetness into something you can hold in your hands and share with your people.
                        </p>

                        <p className={styles.description}>
                            Everything that leaves our kitchen is eggless, made without preservatives and created with a focus on flavour, freshness and a clean, elegant finish. From simple treats to special occasions, the idea is the same: bakes that feel thoughtful, beautiful and genuinely enjoyable.
                        </p>

                        <p className={styles.description}>
                            Along with individual orders, we already put together custom hampers and gifting boxes, you choose the mood and the message, and we build boxes for birthdays, festive gifting, office teams, thank-yous and quiet little surprises.
                        </p>

                        <p className={styles.description}>
                            This is just the beginning. The vision is bigger than a home kitchen, we see DDelice growing into a space where people can walk in, sit down, share stories over cake, and maybe even learn to bake themselves one day. But for now, it all starts here, with you tasting the first few creations and telling us how they made you feel.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.imageCol}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.mainImageWrapper}>
                            <div className={styles.phoneFrame}>
                                <Image
                                    src="/images/founder.png"
                                    alt="DDelice Products"
                                    width={350}
                                    height={500}
                                    className={styles.aboutImg}
                                />
                            </div>
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
