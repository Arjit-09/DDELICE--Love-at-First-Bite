import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Creations from '@/components/Creations';
import KnowMore from '@/components/KnowMore';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main style={{ backgroundColor: 'var(--primary-brown)', minHeight: '100vh' }}>
            <Navbar />
            <Hero />
            <About />
            <Creations />
            <KnowMore />
            <Footer />
        </main>
    );
}
