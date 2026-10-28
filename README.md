# DDelice — Love at First Bite

A responsive Next.js bakery storefront with an editorial ivory, espresso and copper design, local product photography, a locally hosted baking video, scroll reveals and motion-sensitive fallbacks.

## Development

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm start
```

Deploy using a Next.js-compatible Node host. No API keys or database are required.

## Customer journey

- Filter eight bakes by category.
- Add products to the enquiry bag and adjust quantities.
- Send the itemised enquiry to the existing bakery WhatsApp number.
- Ask about personalised hampers, delivery and allergies.

The bag is session UI state, not an order or payment system. Prices, delivery and availability are confirmed by the bakery through WhatsApp. No customer data is collected by this site.

## Content and assets

The catalogue, story, contact details and FSSAI number come from the original repository. Confirm current business details and the image menu with the client before launch. Product data and FAQs are in `app/page.js`; theme and responsive styles are in `app/globals.css`; page metadata is in `app/layout.js`.

Existing images are in `public/images`. Stock video source and attribution are in `public/videos/ATTRIBUTION.md`; the footage illustrates baking and is not a recording of the client's kitchen. Replace it with client footage when available. Video falls back to the product photograph if playback is unavailable and does not autoplay for reduced-motion or data-saving preferences. Both background video and scrolling announcement have pause controls.

Google Fonts are loaded with `display=swap` and local serif/sans-serif fallbacks. Next Image supplies responsive image optimisation. Keyboard-accessible navigation, a native dialog, labelled controls, a skip link and reduced-motion styling are included.

## Expanded experience

`components/BakeryExperiences.js` contains the mood-based flavour finder, interactive craft story, celebration planner and expandable baker's guides. Styling is in `app/experiences.css`.

The celebration planner validates required details and rejects today/past dates using the bakery's India timezone. It opens an itemised WhatsApp draft; no form information is sent to an application server or stored. The flavour finder adds real catalogue items to the same enquiry bag.

The editorial image is AI-generated and optimised to WebP. See `docs/IMAGE-ART-DIRECTION.md` for the final prompt and asset path. It illustrates the brand's mood; product listings retain the supplied catalogue imagery. The new favicon and Bakery structured data identify the correct brand without adding unverified ratings, prices or opening hours.

## Verification completed

- Production build (`npm run build`).
- Chromium checks for catalogue filtering, enquiry-bag quantities, WhatsApp itemisation and keyboard dismissal of the bag.
- Background-video loading, pause controls, reduced-motion preferences and mobile navigation.
- Mood matching and add-to-bag integration; craft-panel image transitions.
- Celebration form required fields, past-date rejection and the complete WhatsApp brief (tested with a stub; no message sent).
- Expandable pairing guides, image loading and absence of browser runtime errors.
- Horizontal-overflow checks at 360, 390, 650, 768, 820, 1024 and 1440 pixels; desktop and mobile visual review.

These checks verify the local production build. Hosting, client approval of business details, and real-world WhatsApp fulfilment remain deployment/operational responsibilities.
