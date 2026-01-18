import './globals.css';

export const metadata = {
    title: 'DDELICE - Love at First Bite | Premium Eggless Bakery',
    description: '100% eggless, preservative-free premium bakery in Noida. Dark Brown 3D Artisan Experience.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}
