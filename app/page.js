"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  EditorialIntro,
  TasteFinder,
  CraftStory,
  OccasionPlanner,
  BakersNotes,
  ReadingProgress,
  ClosingRibbon,
} from "@/components/BakeryExperiences";
import { motion, MotionConfig } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiMenu,
  FiX,
  FiPlus,
  FiMinus,
  FiShoppingBag,
  FiPause,
  FiPlay,
  FiInstagram,
  FiCheck,
  FiMapPin,
} from "react-icons/fi";

const wa = (message) =>
  `https://wa.me/917300929090?text=${encodeURIComponent(message)}`;
const products = [
  {
    name: "Truffle chocolate loaf",
    category: "Loaf cakes",
    image: "truffle-loaf.jpg",
    note: "Deep, dark & wonderfully indulgent",
    tag: "Chocolate lovers",
  },
  {
    name: "Lotus Biscoff cheesecake",
    category: "Celebration cakes",
    image: "biscoff-cheesecake.jpg",
    note: "Creamy layers. Caramelised crunch.",
    tag: "A little luxury",
  },
  {
    name: "Atta gur cookies",
    category: "Cookies & brownies",
    image: "atta-gur-cookie.jpg",
    note: "Whole wheat, jaggery & a little nostalgia",
    tag: "Tea-time favourite",
  },
  {
    name: "Artisan brownies",
    category: "Cookies & brownies",
    image: "artisan-brownies.jpg",
    note: "Fudgy centres with a nutty crunch",
    tag: "Pure comfort",
  },
  {
    name: "Mawa marvel",
    category: "Loaf cakes",
    image: "mawa-marvel.jpg",
    note: "Buttery richness meets fragrant cardamom",
    tag: "An Indian classic",
  },
  {
    name: "Banana walnut loaf",
    category: "Loaf cakes",
    image: "banana-walnut.jpg",
    note: "Warm cinnamon & toasted walnuts",
    tag: "Slow mornings",
  },
  {
    name: "Gulkand chocolates",
    category: "Chocolates & snacks",
    image: "gulkand-fusion.jpg",
    note: "Rose-petal sweetness in every bite",
    tag: "Handmade",
  },
  {
    name: "Peri peri millet mix",
    category: "Chocolates & snacks",
    image: "peri-peri-millet-mix.jpg",
    note: "A little spice. A whole lot of crunch.",
    tag: "The savoury side",
  },
];
const faqs = [
  [
    "Is everything eggless?",
    "Yes. Every DDelice creation is 100% eggless and made without added preservatives. Our kitchen handles dairy, wheat and nuts; please tell us about any allergies before ordering.",
  ],
  [
    "How do I place an order?",
    "Explore our bakes, add your favourites to your enquiry bag, and send it to us on WhatsApp. We will confirm sizes, prices, availability and delivery before you pay.",
  ],
  [
    "How far ahead should I order?",
    "Please book at least one day in advance. For personalised gifts, celebrations and larger orders, get in touch earlier so we can plan the details together.",
  ],
  [
    "Where do you deliver?",
    "We are based in Lotus, Sector 107, Noida. Share your delivery address on WhatsApp and we will confirm coverage, timing and delivery charges.",
  ],
  [
    "Can I customise a gift hamper?",
    "Absolutely. Tell us the occasion, your preferred bakes, quantity and budget. We will help put together a thoughtful combination for birthdays, festive gifting, teams or a simple thank-you.",
  ],
];
function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
function Photo({ file, alt, className = "", priority = false }) {
  return (
    <Image
      src={`/images/${file}`}
      alt={alt}
      fill
      sizes="(max-width: 700px) 100vw, 50vw"
      priority={priority}
      className={className}
    />
  );
}
export default function Home() {
  const [tickerPaused, setTickerPaused] = useState(false);
  const [category, setCategory] = useState("All bakes");
  const [menu, setMenu] = useState(false);
  const [bag, setBag] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const video = useRef(null);
  const dialog = useRef(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const el = video.current;
    if (!media.matches && !navigator.connection?.saveData)
      el?.play().catch(() => {});
    const stop = () => {
      if (media.matches) el?.pause();
    };
    media.addEventListener("change", stop);
    return () => media.removeEventListener("change", stop);
  }, []);
  useEffect(() => {
    if (bagOpen) dialog.current?.showModal();
    else dialog.current?.close();
  }, [bagOpen]);
  const add = (product) =>
    setBag((previous) => {
      const found = previous.find((p) => p.name === product.name);
      return found
        ? previous.map((p) =>
            p.name === product.name ? { ...p, qty: p.qty + 1 } : p,
          )
        : [...previous, { ...product, qty: 1 }];
    });
  const count = bag.reduce((total, p) => total + p.qty, 0);
  const update = (name, delta) =>
    setBag((previous) =>
      previous
        .map((p) => (p.name === name ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0),
    );
  return (
    <MotionConfig reducedMotion="user">
      <ReadingProgress />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        A little handmade happiness, delivered in Noida{" "}
        <span>100% EGGLESS · MADE WITH LOVE</span>
      </div>
      <header className="header">
        <a href="#home" className="wordmark" aria-label="DDelice home">
          DDELICE<span>LOVE AT FIRST BITE</span>
        </a>
        <nav aria-label="Main navigation" className={menu ? "nav open" : "nav"}>
          {[
            ["Our bakes", "bakes"],
            ["Find your flavour", "flavour"],
            ["Our story", "story"],
            ["Gifting", "gifting"],
            ["Plan a celebration", "plan"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="bag-button"
            onClick={() => setBagOpen(true)}
            aria-label={`Open enquiry bag, ${count} items`}
          >
            <FiShoppingBag />
            <span>{count}</span>
          </button>
          <a
            className="button small"
            href={wa("Hello DDelice! I would like to place an order.")}
            target="_blank"
            rel="noreferrer"
          >
            Let’s talk treats <FiArrowUpRight />
          </a>
          <button
            className="menu-toggle icon-button"
            aria-label="Toggle navigation"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-photo">
            <Photo
              file="editorial-table.webp"
              alt="Chocolate loaf, brownies, cookies and chai on a sunlit bakery table"
              priority
            />
            <video
              ref={video}
              className={videoReady ? "hero-video ready" : "hero-video"}
              muted
              loop
              playsInline
              preload="none"
              poster="/images/editorial-table.webp"
              onPlaying={() => {
                setVideoReady(true);
                setPlaying(true);
              }}
              onPause={() => setPlaying(false)}
              aria-hidden="true"
            >
              <source src="/videos/bakery.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" />
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="eyebrow light">
                <span /> SMALL BATCHES. BIG FEELINGS.
              </p>
              <h1>
                Life’s sweeter
                <br />
                with a little
                <br />
                <em>handmade.</em>
              </h1>
              <p className="hero-description">
                Beautifully baked. Thoughtfully shared.
                <br />
                Eggless cakes, cookies and little moments of joy,
                <br className="desktop-break" /> from our home kitchen to yours.
              </p>
              <a className="button cream" href="#bakes">
                Find your favourite <FiArrowUpRight />
              </a>
            </motion.div>
          </div>
          <div className="hero-bottom">
            <span>BAKED WITH LOVE IN NOIDA, INDIA</span>
            <a href="#bakes">SCROLL TO SAVOUR ↓</a>
            {videoReady && (
              <button
                onClick={() =>
                  playing
                    ? video.current.pause()
                    : video.current.play().catch(() => {})
                }
                aria-label={
                  playing ? "Pause background video" : "Play background video"
                }
              >
                {playing ? <FiPause /> : <FiPlay />}
              </button>
            )}
          </div>
          <div className="hero-seal">
            <span>GOOD THINGS</span>
            <i>
              made
              <br />
              by hand
            </i>
            <span>TAKE A LITTLE LOVE</span>
          </div>
        </section>
        <div
          className={tickerPaused ? "ticker paused" : "ticker"}
          aria-label="100% eggless, no added preservatives, made in small batches, thoughtfully packed"
        >
          <div>
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i} aria-hidden={i > 0}>
                100% EGGLESS <b>✳</b> NO ADDED PRESERVATIVES <b>✳</b>{" "}
                SMALL-BATCH GOODNESS <b>✳</b> THOUGHTFULLY PACKED <b>✳</b>
              </span>
            ))}
          </div>
          <button
            aria-label={
              tickerPaused
                ? "Play scrolling announcement"
                : "Pause scrolling announcement"
            }
            onClick={() => setTickerPaused(!tickerPaused)}
          >
            {tickerPaused ? <FiPlay /> : <FiPause />}
          </button>
        </div>
        <EditorialIntro />
        <section className="section collection" id="bakes">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">THE GOOD STUFF</p>
              <h2>
                A craving for
                <br />
                <em>something lovely.</em>
              </h2>
            </div>
            <p>
              For your morning coffee, your biggest celebrations,
              <br className="desktop-break" /> and all the just-because moments
              in between.
              <br />
              <a
                className="text-link"
                href="/images/menu.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Take a look at our menu <FiArrowUpRight />
              </a>
            </p>
          </Reveal>
          <div className="filters" aria-label="Filter our bakes">
            {[
              "All bakes",
              "Loaf cakes",
              "Celebration cakes",
              "Cookies & brownies",
              "Chocolates & snacks",
            ].map((cat) => (
              <button
                key={cat}
                aria-pressed={cat === category}
                className={cat === category ? "active" : ""}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="products">
            {products
              .filter(
                (p) => category === "All bakes" || p.category === category,
              )
              .map((p) => (
                <Reveal className="product" key={p.name}>
                  <div className="product-image">
                    <Photo file={p.image} alt={p.name} />
                    <span className="product-tag">{p.tag}</span>
                    <button
                      onClick={() => add(p)}
                      aria-label={`Add ${p.name} to enquiry bag`}
                      className="add-button"
                    >
                      {bag.some((item) => item.name === p.name) ? (
                        <FiCheck />
                      ) : (
                        <FiPlus />
                      )}
                    </button>
                  </div>
                  <div className="product-title">
                    <h3>{p.name}</h3>
                    <FiArrowUpRight />
                  </div>
                  <p>{p.note}</p>
                  <span className="product-meta">EGGLESS · BAKED TO ORDER</span>
                </Reveal>
              ))}
          </div>
          <div className="collection-note">
            <span>
              Something caught your eye? Add it to your bag and we’ll take care
              of the details.
            </span>
            <button className="text-link" onClick={() => setBagOpen(true)}>
              View your enquiry bag ({count}) <FiArrowRight />
            </button>
          </div>
          <span className="sr-only" role="status">
            {count} items in your enquiry bag
          </span>
        </section>
        <TasteFinder products={products} onAdd={add} />
        <section className="story section" id="story">
          <Reveal className="story-images">
            <div className="story-main">
              <Photo
                file="about_background.png"
                alt="A warm selection of handcrafted bakery treats"
              />
            </div>
            <div className="story-inset">
              <Photo file="cookies.png" alt="Fresh chocolate cookies" />
            </div>
            <span className="story-caption">From our family, with love.</span>
          </Reveal>
          <Reveal className="story-copy">
            <p className="eyebrow">A HOME KITCHEN. A WHOLE LOT OF HEART.</p>
            <h2>
              Some recipes start
              <br />
              with flour.
              <br />
              Ours started
              <br />
              <em>with family.</em>
            </h2>
            <p>
              A mother, a shared love for baking, and a kitchen that always
              smelled like something wonderful. That’s where DDelice began.
            </p>
            <p>
              What started as treats for family and friends has grown into
              something we’re building with love, late nights and big dreams.
              Every creation is eggless, made without preservatives, and
              finished with the care we’d give a gift to someone we love.
            </p>
            <a
              className="text-link"
              href={wa("Hello! I would love to know more about DDelice.")}
              target="_blank"
              rel="noreferrer"
            >
              Come say hello <FiArrowUpRight />
            </a>
          </Reveal>
        </section>
        <section className="values">
          <Reveal>
            <span>01 / THE INGREDIENTS</span>
            <h3>Only the good things.</h3>
            <p>
              Thoughtful ingredients, full-on flavour, and no added
              preservatives.
            </p>
          </Reveal>
          <Reveal>
            <span>02 / THE PROCESS</span>
            <h3>A little slower. A lot better.</h3>
            <p>
              Small batches and a personal touch, from the first mix to the
              final finish.
            </p>
          </Reveal>
          <Reveal>
            <span>03 / THE FEELING</span>
            <h3>Made to make your day.</h3>
            <p>
              Everyday comfort or a beautiful celebration. There’s a bake for
              that.
            </p>
          </Reveal>
        </section>
        <CraftStory />
        <section className="gifting" id="gifting">
          <Reveal className="gift-copy">
            <p className="eyebrow light">GOOD TASTE. BEAUTIFULLY WRAPPED.</p>
            <h2>
              For the people
              <br />
              who make life
              <br />
              <em>a little sweeter.</em>
            </h2>
            <p>
              Say thank you. Celebrate a new beginning. Make someone’s ordinary
              Tuesday extraordinary. Our personalised hampers turn little treats
              into meaningful gifts.
            </p>
            <div className="gift-tags">
              <span>Festive gifting</span>
              <span>Team thank-yous</span>
              <span>Just because</span>
            </div>
            <a className="button cream" href="#plan">
              Create a little happiness <FiArrowUpRight />
            </a>
          </Reveal>
          <div className="gift-image">
            <Photo
              file="luxury-festive-hamper.jpg"
              alt="DDelice gift hamper with a selection of handcrafted treats"
            />
            <span className="gift-caption">
              A thoughtful box. An unforgettable feeling.
            </span>
          </div>
        </section>
        <OccasionPlanner />
        <section className="section ritual">
          <Reveal>
            <p className="eyebrow">MAKE ROOM FOR A LITTLE JOY</p>
            <h2>
              There’s no wrong time
              <br />
              for <em>a good bite.</em>
            </h2>
          </Reveal>
          <div className="ritual-grid">
            {[
              [
                "banana-walnut.jpg",
                "01",
                "The slow morning",
                "Coffee, a slice of banana walnut loaf, and five minutes all to yourself.",
              ],
              [
                "artisan-brownies.jpg",
                "02",
                "The afternoon pause",
                "Close the laptop. Put the kettle on. Let a fudgy brownie do the rest.",
              ],
              [
                "biscoff-cheesecake.jpg",
                "03",
                "The happy gathering",
                "Bring your favourite people. We’ll bring something worth sharing.",
              ],
            ].map(([file, num, title, copy]) => (
              <Reveal key={num}>
                <div className="ritual-photo">
                  <Photo file={file} alt={title} />
                </div>
                <span className="eyebrow">
                  {num} / EVERYDAY LITTLE LUXURIES
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <BakersNotes />
        <section className="faq-section section" id="faq">
          <Reveal>
            <p className="eyebrow">A FEW THINGS TO KNOW</p>
            <h2>
              Before your
              <br />
              <em>first bite.</em>
            </h2>
            <p>Good questions deserve clear answers.</p>
            <a
              className="text-link"
              href={wa("Hello DDelice! I have a question.")}
              target="_blank"
              rel="noreferrer"
            >
              Ask us anything <FiArrowUpRight />
            </a>
          </Reveal>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <details key={q}>
                <summary>
                  <span className="faq-number">0{i + 1}</span>
                  {q}
                  <FiPlus />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <ClosingRibbon />
        <section className="contact section" id="contact">
          <p className="eyebrow">YOUR NEXT HAPPY MOMENT STARTS HERE</p>
          <h2>
            Shall we bake
            <br />
            <em>you something?</em>
          </h2>
          <a
            className="button"
            href={wa("Hello DDelice! Let’s plan something sweet.")}
            target="_blank"
            rel="noreferrer"
          >
            Let’s talk on WhatsApp <FiArrowUpRight />
          </a>
          <p>
            Please order at least one day ahead. Good things take a little time.
          </p>
          <a
            className="location"
            href="https://www.google.com/maps/search/?api=1&query=Lotus+Sector+107+Noida"
            target="_blank"
            rel="noreferrer"
          >
            <FiMapPin /> Lotus, Sector 107, Noida
          </a>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <a href="#home" className="wordmark">
            DDELICE<span>LOVE AT FIRST BITE</span>
          </a>
          <p>
            A little sweetness.
            <br />A lot of heart.
          </p>
          <div>
            <a href="tel:+917300929090">+91 73009 29090</a>
            <a href="mailto:info@ddelice.com">info@ddelice.com</a>
          </div>
          <a
            href="https://www.instagram.com/ddelice__/"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            <FiInstagram /> Follow the sweet life <FiArrowUpRight />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DDelice. Made with love.</span>
          <span>FSSAI LIC. 22724441002665</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        className="bag-dialog"
        onCancel={() => setBagOpen(false)}
        onClick={(e) => {
          if (e.target === dialog.current) setBagOpen(false);
        }}
      >
        <div className="bag-panel">
          <div className="bag-heading">
            <div>
              <p className="eyebrow">A LITTLE BOX OF HAPPINESS</p>
              <h2>Your enquiry bag</h2>
            </div>
            <button
              className="icon-button"
              aria-label="Close bag"
              onClick={() => setBagOpen(false)}
            >
              <FiX />
            </button>
          </div>
          {bag.length ? (
            <>
              <div className="bag-items">
                {bag.map((p) => (
                  <div className="bag-item" key={p.name}>
                    <Image
                      src={`/images/${p.image}`}
                      width={72}
                      height={72}
                      alt={p.name}
                    />
                    <div>
                      <h3>{p.name}</h3>
                      <div className="quantity">
                        <button
                          aria-label={`Remove one ${p.name}`}
                          onClick={() => update(p.name, -1)}
                        >
                          <FiMinus />
                        </button>
                        <span>{p.qty}</span>
                        <button
                          aria-label={`Add one ${p.name}`}
                          onClick={() => update(p.name, 1)}
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                We’ll confirm sizes, pricing and delivery with you before your
                order is placed.
              </p>
              <a
                className="button"
                target="_blank"
                rel="noreferrer"
                href={wa(
                  `Hello DDelice! I'd like to enquire about:\n${bag.map((p) => `${p.qty} × ${p.name}`).join("\n")}\nPlease share sizes, prices and availability.`,
                )}
              >
                Send enquiry on WhatsApp <FiArrowUpRight />
              </a>
            </>
          ) : (
            <div className="empty-bag">
              <FiShoppingBag />
              <h3>Your next favourite is waiting.</h3>
              <p>Add a few bakes, then send us your wishlist on WhatsApp.</p>
              <button
                className="button"
                onClick={() => {
                  setBagOpen(false);
                  document
                    .getElementById("bakes")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore our bakes <FiArrowRight />
              </button>
            </div>
          )}
        </div>
      </dialog>
    </MotionConfig>
  );
}
