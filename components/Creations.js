'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import Image from 'next/image';
import styles from './Creations.module.css';

export default function Creations() {
    const categories = {
        loafCakes: {
            title: 'Signature Loaf Cakes',
            products: [
                { name: 'Truffle Triple Chocolate Loaf', description: 'Rich Belgian dark chocolate symphony.', image: '/images/truffle-loaf.jpg' },
                { name: 'Rich Mawa Marvel', description: 'Cardamom and butter infused Indian classic.', image: '/images/mawa-marvel.jpg' },
                { name: 'Lotus Biscoff Cheesecake', description: 'Creamy cheesecake with Biscoff crumble.', image: '/images/biscoff-cheesecake.jpg' },
                { name: 'Pineapple Tutti-Frutti Loaf', description: 'Nostalgic pineapple and jewel-like tutti-frutti.', image: '/images/pineapple-tutti-frutti.jpg' },
                { name: 'Banana Walnut Retreat', description: 'Warm cinnamon and toasted walnuts.', image: '/images/banana-walnut.jpg' },
                { name: 'Rustic Wheat Jaggery', description: 'Whole wheat jaggery with Panjiri crunch.', image: '/images/rustic-wheat.jpg' }
            ]
        },
        winterDelight: {
            title: 'Winter Delight Collection',
            products: [
                { name: 'Old Town Plum Cake', description: 'Rum-infused festive slice with soaked fruits.', image: '/images/plum-cake.jpg' },
                { name: 'Belgian Choco Muffins', description: 'Smooth Belgian chocolate mouthful.', image: '/images/choco-muffins.jpg' },
                { name: 'Artisan Brownies', description: 'Fudgy brownies with a perfect nutty crunch.', image: '/images/artisan-brownies.jpg' }
            ]
        },
        cookies: {
            title: 'Cookie Delight',
            products: [
                { name: 'Atta Gur Cookie', description: 'Whole wheat jaggery with crisp nuts.', image: '/images/atta-gur-cookie.jpg' },
                { name: 'Double Choco Crisps', description: 'Crisp cookies with Belgian chocolate.', image: '/images/cookies.png' }
            ]
        },
        mixtures: {
            title: 'Mixtures & Snacks',
            products: [
                { name: 'Peri Peri Millet Mix', description: 'Spicy, crunchy, and healthy millet.', image: '/images/peri-peri-millet-mix.jpg' },
                { name: 'Premium Dry Fruit Mix', description: 'Healthy nuts and seed combination.', image: '/images/gift-hampers.jpg' }
            ]
        },
        chocolates: {
            title: 'Handmade Chocolates',
            products: [
                { name: 'Dry Fruit Luxury', description: 'Rich chocolate with premium nuts.', image: '/images/gift-box.jpg' },
                { name: 'Gulkand Fusion', description: 'Rose petal preserve infused chocolate.', image: '/images/gulkand-fusion.jpg' }
            ]
        },
        giftPackaging: {
            title: 'Gift Packaging & Hampers',
            products: [
                { name: 'Premium Gift Box', description: 'Artisanally curated boxes for every occasion.', image: '/images/premium-gift-box.jpg' },
                { name: 'Luxury Festive Hamper', description: 'The ultimate celebration collection.', image: '/images/luxury-festive-hamper.jpg' }
            ]
        }
    };

    return (
        <section id="creations" className={styles.creationsSection}>
            <div className="container">
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Our Creations</h2>
                    <p className={styles.subtitle}>Handcrafted perfection in every detail.</p>
                </motion.div>

                {Object.entries(categories).map(([key, cat], idx) => (
                    <div key={key} className={styles.categoryWrap}>
                        <motion.h3
                            className={styles.categoryTitle}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {cat.title}
                        </motion.h3>
                        <div className={styles.productsGrid}>
                            {cat.products.map((p, i) => (
                                <ProductCard key={i} {...p} index={i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
