"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCoffee,
  FiGift,
  FiHeart,
  FiSun,
  FiPlus,
} from "react-icons/fi";

const whatsapp = (text) =>
  `https://wa.me/917300929090?text=${encodeURIComponent(text)}`;
const moods = [
  {
    label: "Something indulgent",
    icon: FiHeart,
    product: "Truffle chocolate loaf",
    title: "Your chocolate moment.",
    copy: "Deep chocolate, a rich crumb, and the kind of slice you take your time with. A little indulgence needs no occasion.",
    pairing: "A freshly brewed black coffee",
    texture: "Rich · chocolatey · soft",
    image: "truffle-loaf.jpg",
  },
  {
    label: "A little comfort",
    icon: FiCoffee,
    product: "Atta gur cookies",
    title: "A taste of coming home.",
    copy: "The familiar warmth of whole wheat and jaggery, with a crisp, nutty bite. Made for long conversations and a second cup of chai.",
    pairing: "A cup of cardamom chai",
    texture: "Crisp · nutty · nostalgic",
    image: "atta-gur-cookie.jpg",
  },
  {
    label: "Time to celebrate",
    icon: FiGift,
    product: "Lotus Biscoff cheesecake",
    title: "Bring out the good plates.",
    copy: "Creamy cheesecake meets caramelised biscuit crunch. A lovely centrepiece for a gathering, or a celebration just for you.",
    pairing: "An iced latte or unsweetened tea",
    texture: "Creamy · caramelised · crunchy",
    image: "biscoff-cheesecake.jpg",
  },
  {
    label: "A slow morning",
    icon: FiSun,
    product: "Banana walnut loaf",
    title: "Start on a softer note.",
    copy: "Banana, warm cinnamon and toasted walnuts come together in a comforting loaf. Slice, pour something warm, and ease into the day.",
    pairing: "A mellow café latte",
    texture: "Soft · warmly spiced · nutty",
    image: "banana-walnut.jpg",
  },
];
function Enter({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0 : 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      className="reading-progress"
      style={{ scaleX }}
    />
  );
}
export function EditorialIntro() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  return (
    <section
      className="editorial-intro section"
      ref={ref}
      aria-labelledby="intro-heading"
    >
      <Enter className="intro-copy">
        <p className="eyebrow">NOT JUST BAKED. FELT.</p>
        <h2 id="intro-heading">
          The best things in life
          <br />
          are meant to be <em>shared.</em>
        </h2>
        <p>
          The extra slice. The last cookie split in two. A box left at someone’s
          door. We bake for the moments that stay with you, long after the
          crumbs are gone.
        </p>
        <a href="#flavour" className="text-link">
          Find your kind of sweet <FiArrowUpRight />
        </a>
      </Enter>
      <motion.figure className="intro-photo" style={{ y: reduced ? 0 : y }}>
        <Image
          src="/images/editorial-table.webp"
          alt="Editorial scene of chocolate loaf, brownies, cookies and chai on warm ivory linen"
          fill
          sizes="(max-width: 700px) 90vw, 42vw"
        />
        <figcaption>A table full of little possibilities.</figcaption>
        <span className="photo-corner" aria-hidden="true">
          with love,
          <br />
          <i>DDelice</i>
        </span>
      </motion.figure>
    </section>
  );
}
export function TasteFinder({ products, onAdd }) {
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);
  const reduced = useReducedMotion();
  const mood = moods[active];
  return (
    <section
      id="flavour"
      className="flavour-section section"
      aria-labelledby="flavour-heading"
    >
      <Enter className="flavour-heading">
        <p className="eyebrow">A LITTLE DISCOVERY, JUST FOR YOU</p>
        <h2 id="flavour-heading">
          What are you
          <br />
          <em>in the mood for?</em>
        </h2>
        <p>Follow your craving. We’ll find your first bite.</p>
      </Enter>
      <div className="mood-options" role="group" aria-label="Choose your mood">
        {moods.map((item, index) => (
          <button
            key={item.label}
            aria-pressed={active === index}
            onClick={() => {
              setActive(index);
              setAdded(false);
            }}
          >
            <item.icon />
            <span>{item.label}</span>
            <FiArrowUpRight />
          </button>
        ))}
      </div>
      <div className="flavour-result" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="flavour-inner"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -10 }}
            transition={{ duration: reduced ? 0 : 0.28 }}
          >
            <div className="flavour-image">
              <Image
                src={`/images/${mood.image}`}
                alt={mood.product}
                fill
                sizes="(max-width: 700px) 85vw, 40vw"
              />
              <span className="flavour-stamp">
                YOUR
                <br />
                <em>sweet match</em>
                <br />
                100% EGGLESS
              </span>
            </div>
            <div className="flavour-copy">
              <span className="eyebrow">
                YOUR MOOD, BEAUTIFULLY BAKED / 0{active + 1}
              </span>
              <h3>{mood.title}</h3>
              <p>{mood.copy}</p>
              <dl>
                <div>
                  <dt>THE BAKE</dt>
                  <dd>{mood.product}</dd>
                </div>
                <div>
                  <dt>THE FEELING</dt>
                  <dd>{mood.texture}</dd>
                </div>
                <div>
                  <dt>PAIR IT WITH</dt>
                  <dd>{mood.pairing}</dd>
                </div>
              </dl>
              <button
                className="button"
                onClick={() => {
                  onAdd(products.find((p) => p.name === mood.product));
                  setAdded(true);
                }}
              >
                {added ? "Added to your enquiry bag" : "That’s my kind of bake"}
                {added ? <FiCheck /> : <FiPlus />}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
const craftSteps = [
  {
    title: "It starts with a little thought.",
    text: "Flavour comes first. Chocolate with depth, the warmth of cardamom, the comfort of jaggery. Familiar ingredients, thoughtfully brought together.",
    detail: "THE INGREDIENTS",
    image: "mawa-marvel.jpg",
  },
  {
    title: "Then comes the patient part.",
    text: "Mixing, baking and letting each creation find its texture. Small batches give us space to care about the little things: the crumb, the crunch, the finish.",
    detail: "THE CRAFT",
    image: "banana-walnut.jpg",
  },
  {
    title: "Finished with someone in mind.",
    text: "A simple tea-time treat or a box for a special person. We think about how it looks, how it travels, and how it feels when you open it.",
    detail: "THE FINAL TOUCH",
    image: "premium-gift-box.jpg",
  },
];
export function CraftStory() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return (
    <section className="craft-section section" id="craft">
      <Enter className="craft-title">
        <p className="eyebrow light">FROM THE FIRST MIX TO THE LAST RIBBON</p>
        <h2>
          Little details.
          <br />
          <em>A lovely difference.</em>
        </h2>
      </Enter>
      <div className="craft-layout">
        <div
          className="craft-steps"
          role="group"
          aria-label="Explore our baking approach"
        >
          {craftSteps.map((step, i) => (
            <button
              className={active === i ? "craft-step selected" : "craft-step"}
              aria-pressed={active === i}
              key={step.title}
              onClick={() => setActive(i)}
            >
              <span className="craft-number">0{i + 1}</span>
              <span>
                <small>{step.detail}</small>
                <strong>{step.title}</strong>
                <span className="craft-description">{step.text}</span>
              </span>
              <FiArrowUpRight />
            </button>
          ))}
        </div>
        <div className="craft-image">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={active}
              className="craft-image-inner"
              initial={{ opacity: 0, scale: reduced ? 1 : 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.4 }}
            >
              <Image
                src={`/images/${craftSteps[active].image}`}
                alt={
                  [
                    "Cardamom mawa cake with a golden crumb",
                    "Sliced banana walnut loaf",
                    "A carefully packed bakery gift box",
                  ][active]
                }
                fill
                sizes="(max-width:700px) 90vw, 40vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="craft-image-label">
            <span>THE DDELICE WAY</span>
            <span>0{active + 1} / 03</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function OccasionPlanner() {
  const [occasion, setOccasion] = useState("A birthday");
  const [bakes, setBakes] = useState(["Loaf cakes"]);
  const [sent, setSent] = useState(false);
  const [dateError, setDateError] = useState("");
  const toggle = (name) =>
    setBakes((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = String(data.get("date") || "");
    const today = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
    if (date && date <= today) {
      setDateError(
        "Please choose a future date. We need at least one day to prepare your bakes.",
      );
      return;
    }
    setDateError("");
    const message = `Hello DDelice! I'd love to plan something sweet.\nOccasion: ${occasion}\nBakes: ${bakes.length ? bakes.join(", ") : "Please help me choose"}\nQuantity / guests: ${data.get("guests")}\nPreferred date: ${date || "Flexible — let’s discuss"}\nBudget: ${data.get("budget") || "Please share options"}\nDelivery area: ${data.get("area")}\nNotes: ${data.get("notes") || "None yet"}\nPlease confirm availability, pricing and delivery.`;
    window.open(whatsapp(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return (
    <section className="planner-section section" id="plan">
      <Enter className="planner-intro">
        <p className="eyebrow">YOU BRING THE OCCASION. WE’LL BRING THE JOY.</p>
        <h2>
          A little more you.
          <br />
          <em>A little more special.</em>
        </h2>
        <p>
          A birthday surprise, a festive thank-you, or something lovely for the
          team. Tell us what you have in mind and let’s make a thoughtful box
          together.
        </p>
        <ol className="order-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Make it personal</h3>
              <p>Choose the occasion and the bakes you love.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Let’s talk details</h3>
              <p>We’ll confirm quantities, pricing and delivery on WhatsApp.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Leave the baking to us</h3>
              <p>Your order is confirmed only after we agree the details.</p>
            </div>
          </li>
        </ol>
        <div className="planner-note">
          <FiHeart />
          <span>
            Planning for a team? Include the number of boxes and your preferred
            delivery area.
          </span>
        </div>
      </Enter>
      <form className="occasion-form" onSubmit={submit}>
        <div className="form-top">
          <span className="eyebrow">YOUR LITTLE CELEBRATION BRIEF</span>
          <FiGift />
        </div>
        <fieldset>
          <legend>01 / What are we celebrating?</legend>
          <div className="occasion-options">
            {[
              "A birthday",
              "A thank-you",
              "Festive gifting",
              "Something for the team",
              "Just because",
            ].map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={occasion === item}
                onClick={() => setOccasion(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>02 / What goes in your box?</legend>
          <div className="bake-checks">
            {["Loaf cakes", "Cookies", "Brownies", "Chocolates"].map((name) => (
              <label key={name}>
                <input
                  type="checkbox"
                  checked={bakes.includes(name)}
                  onChange={() => toggle(name)}
                />
                <span>{name}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>03 / A few little details</legend>
          <div className="form-fields">
            <label>
              Guests or gift boxes{" "}
              <input
                name="guests"
                placeholder="e.g. 10 guests or 6 boxes"
                maxLength={100}
                required
              />
            </label>
            <label>
              Preferred date{" "}
              <input
                name="date"
                type="date"
                aria-describedby={dateError ? "date-error" : undefined}
              />
            </label>
            <label>
              Budget (optional)
              <input
                name="budget"
                placeholder="e.g. ₹1,500 per box"
                maxLength={80}
              />
            </label>
            <label>
              Delivery area
              <input
                name="area"
                placeholder="Sector / city"
                required
                maxLength={100}
              />
            </label>
          </div>
          <label className="notes-label">
            Anything else we should know?
            <textarea
              name="notes"
              rows={2}
              placeholder="Flavour preferences, dietary requirements, a personal message…"
              maxLength={700}
            />
          </label>
          {dateError && (
            <p role="alert" id="date-error" className="form-error">
              {dateError}
            </p>
          )}
        </fieldset>
        <button className="button" type="submit">
          Let’s bring it to life <FiArrowUpRight />
        </button>
        <p className="form-privacy">
          Opens your brief in WhatsApp. Nothing is submitted or ordered until
          you send it and we confirm.
        </p>
        {sent && (
          <p className="form-confirmation" role="status">
            Your brief is ready in WhatsApp. If no tab opened, allow pop-ups and
            try again.
          </p>
        )}
      </form>
    </section>
  );
}
const notes = [
  {
    label: "THE PERFECT PAIRING",
    title: "A good bake deserves good company.",
    image: "cookies.png",
    intro: "A few simple pairings to turn your tea break into a little ritual.",
    items: [
      [
        "Chocolate + coffee",
        "Try the truffle loaf or a brownie with unsweetened coffee. Its roasted notes give rich chocolate room to shine.",
      ],
      [
        "Mawa + chai",
        "Cardamom in mawa cake feels right at home beside a gently spiced cup of chai.",
      ],
      [
        "Cookies + your favourite cup",
        "Atta gur cookies bring a crisp, nutty contrast to a warm milky tea. Make a small plate and take your time.",
      ],
    ],
  },
  {
    label: "KEEP THE GOODNESS",
    title: "A little care, from box to last bite.",
    image: "banana-walnut.jpg",
    intro:
      "Every bake is different. Use the storage and use-by guidance supplied with your order.",
    items: [
      [
        "Read your box first",
        "Follow the bakery’s instructions for your specific product. Ask us if your box has no label or you are unsure.",
      ],
      [
        "Protect delicate bakes",
        "Keep your order level while travelling and away from direct sunlight, heat and strong smells. Confirm refrigeration needs when you order.",
      ],
      [
        "Plan for the occasion",
        "Tell us when you plan to serve your bakes. We can help you choose a suitable collection or delivery time.",
      ],
    ],
  },
  {
    label: "THE THOUGHTFUL GIFT",
    title: "Make the small things feel special.",
    image: "premium-gift-box.jpg",
    intro:
      "Start with the person, then choose the treats. A thoughtful box is more than the sum of its bakes.",
    items: [
      [
        "Follow their favourites",
        "Chocolate person or chai person? Start with a flavour they already love and add something new to discover.",
      ],
      [
        "Mix the textures",
        "Ask about pairing soft loaf cake with crisp cookies or rich chocolates for a varied gift box.",
      ],
      [
        "Leave room for a message",
        "Tell us the occasion and any message you would like to include. We’ll confirm the available packaging options.",
      ],
    ],
  },
];
export function BakersNotes() {
  return (
    <section id="journal" className="notes-section section">
      <Enter className="section-heading">
        <div>
          <p className="eyebrow">LITTLE NOTES FROM OUR KITCHEN</p>
          <h2>
            More to savour.
            <br />
            <em>More to know.</em>
          </h2>
        </div>
        <p>
          Pairing ideas, thoughtful gifting, and a little care
          <br className="desktop-break" /> to make every bite feel its best.
        </p>
      </Enter>
      <div className="notes-grid">
        {notes.map((note, i) => (
          <Enter key={note.title} delay={i * 0.08}>
            <article className="journal-card">
              <div className="journal-image">
                <Image
                  src={`/images/${note.image}`}
                  alt={note.title}
                  fill
                  sizes="(max-width:700px) 90vw, 30vw"
                />
                <span>0{i + 1} / THE BAKER’S NOTES</span>
              </div>
              <div className="journal-content">
                <p className="eyebrow">{note.label}</p>
                <h3>{note.title}</h3>
                <p>{note.intro}</p>
                <details>
                  <summary>
                    Read the little guide <FiPlus />
                  </summary>
                  <div className="journal-guide">
                    {note.items.map(([title, text]) => (
                      <div key={title}>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </article>
          </Enter>
        ))}
      </div>
    </section>
  );
}
export function ClosingRibbon() {
  return (
    <div className="closing-ribbon">
      <span>Made slowly.</span>
      <span aria-hidden="true">✳</span>
      <span>Shared happily.</span>
      <span aria-hidden="true">✳</span>
      <span>Remembered fondly.</span>
    </div>
  );
}
