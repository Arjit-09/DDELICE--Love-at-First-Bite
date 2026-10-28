import "./globals.css";
import "./experiences.css";

export const viewport = { themeColor: "#34251e", colorScheme: "light" };

export const metadata = {
  applicationName: "DDelice",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "DDelice — A little handmade happiness",
    description:
      "Discover eggless bakes, find your flavour and create thoughtful gifts. Handcrafted in Noida.",
    type: "website",
    locale: "en_IN",
    siteName: "DDelice",
  },
  twitter: {
    card: "summary_large_image",
    title: "DDelice — Love at First Bite",
    description:
      "Eggless cakes, cookies, brownies and thoughtful gift hampers, handcrafted in Noida.",
  },
  title: "DDELICE - Love at First Bite | Premium Eggless Bakery",
  description:
    "Handcrafted eggless cakes, cookies, brownies and personalised gift hampers in Noida. Explore DDelice and order a little handmade happiness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "DDelice",
              description:
                "Eggless home bakery offering cakes, cookies, brownies and personalised gift hampers.",
              telephone: "+917300929090",
              email: "info@ddelice.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lotus, Sector 107",
                addressLocality: "Noida",
                addressCountry: "IN",
              },
              sameAs: ["https://www.instagram.com/ddelice__/"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
