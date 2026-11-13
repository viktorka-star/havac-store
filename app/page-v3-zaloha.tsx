
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "LOST IN TIME",
    subtitle: "A moment outside of time.",
    description:
      "A distinctive fragrance created for the moments that deserve to last. Deep, expressive and impossible to forget.",
    price: 89,
    image: "/images/lost-in-time.jpg",
    promo: "/images/lost-in-time-promo.jpg",
    number: "01",
    notes: ["Warm woods", "Amber", "Soft spices"],
  },
  {
    id: 2,
    name: "JUST FUCKING ROSE",
    subtitle: "A rose without rules.",
    description:
      "An unexpected interpretation of a timeless note. Confident, expressive and beautifully unconventional.",
    price: 95,
    image: "/images/just-fucking-rose.jpg",
    promo: "/images/just-fucking-rose-promo.jpg",
    number: "02",
    notes: ["Rose", "Floral accords", "Warm musk"],
  },
];

type Product = (typeof products)[number];

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((current) => [...current, product]);
    setSelected(null);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((current) => current.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#eeeee8] text-[#242820] selection:bg-[#b2b69a] selection:text-[#242820]">
      {/* NAVIGATION */}
      <nav className="relative z-30 flex items-center justify-between border-b border-[#242820]/15 px-5 py-5 md:px-12">
        <a href="#" className="text-xl font-semibold tracking-[0.28em]">
          HAVAC<span className="font-light">.</span>
        </a>

        <div className="hidden items-center gap-10 text-[10px] tracking-[0.2em] md:flex">
          <a href="#collection" className="transition hover:text-[#899071]">
            THE COLLECTION
          </a>
          <a href="#philosophy" className="transition hover:text-[#899071]">
            OUR PHILOSOPHY
          </a>
          <a href="#details" className="transition hover:text-[#899071]">
            THE DETAILS
          </a>
        </div>

        <button
          onClick={() => setCartOpen(true)}
          className="flex items-center gap-3 text-[10px] tracking-[0.16em] transition hover:text-[#899071]"
        >
          BAG <span className="rounded-full border border-current px-2 py-1">{cart.length}</span>
        </button>
      </nav>

      {/* HERO */}
      <section className="relative grid min-h-[740px] grid-cols-1 md:min-h-[790px] md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 flex flex-col justify-center px-7 py-20 md:px-16 lg:px-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-[10px] tracking-[0.32em] text-[#777d66]"
          >
            FRAGRANCE AS AN ART FORM — EST. 2024
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-[650px] text-[clamp(4rem,8vw,8.4rem)] font-light leading-[0.83] tracking-[-0.085em]"
          >
            Scent
            <br />
            has a
            <br />
            <span className="font-serif italic text-[#8b9274]">shape.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 max-w-[330px] text-sm leading-7 text-[#686c61]"
          >
            More than a fragrance. An expression of character, translated into
            something you can wear.
          </motion.p>

          <motion.a
            href="#collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="group mt-12 flex w-fit items-center gap-6 border-b border-[#242820] pb-3 text-[10px] tracking-[0.2em]"
          >
            DISCOVER THE COLLECTION
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </motion.a>

          <div className="absolute bottom-8 left-7 hidden text-[9px] tracking-[0.2em] text-[#92958a] md:block md:left-16">
            48°08&apos; N — 17°06&apos; E
          </div>
        </div>

        <div className="relative min-h-[500px] overflow-hidden bg-[#d8d9cf] md:min-h-full">
          <motion.img
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4 }}
            src="/images/lost-in-time-promo.jpg"
            alt="HAVAC fragrance campaign"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#22271d]/30 via-transparent to-[#22271d]/10" />

          <div className="absolute right-6 top-7 text-right text-[9px] tracking-[0.22em] text-white md:right-10 md:top-10">
            OBJECTS OF
            <br />
            DESIRE
          </div>

          <div className="absolute bottom-8 left-7 text-[9px] tracking-[0.22em] text-white md:bottom-12 md:left-12">
            HAVAC — VISUAL STUDY Nº 03
          </div>

          <div className="absolute bottom-8 right-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/60 text-[9px] tracking-widest text-white md:bottom-12 md:right-12">
            H.
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="grid grid-cols-1 border-y border-[#242820]/15 md:grid-cols-3">
        <div className="border-b border-[#242820]/15 px-7 py-8 md:border-b-0 md:border-r md:px-10">
          <p className="text-[9px] tracking-[0.22em] text-[#8b9274]">01 / IDENTITY</p>
          <p className="mt-3 text-sm">Made to be remembered.</p>
        </div>
        <div className="border-b border-[#242820]/15 px-7 py-8 md:border-b-0 md:border-r md:px-10">
          <p className="text-[9px] tracking-[0.22em] text-[#8b9274]">02 / EXPRESSION</p>
          <p className="mt-3 text-sm">Beyond the expected.</p>
        </div>
        <div className="px-7 py-8 md:px-10">
          <p className="text-[9px] tracking-[0.22em] text-[#8b9274]">03 / EXPERIENCE</p>
          <p className="mt-3 text-sm">A signature of your own.</p>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="px-5 py-24 md:px-12 md:py-36">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] tracking-[0.28em] text-[#899071]">
              THE HAVAC SELECTION
            </p>
            <h2 className="text-5xl font-light tracking-[-0.06em] md:text-7xl">
              Less, but <span className="font-serif italic text-[#899071]">different.</span>
            </h2>
          </div>
          <p className="max-w-[280px] text-sm leading-7 text-[#777b70]">
            Two distinctive compositions. Two different moods. One idea:
            fragrance should feel like you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group"
            >
              <button
                onClick={() => setSelected(product)}
                className="relative block aspect-[4/5] w-full overflow-hidden bg-[#dedfd6] text-left"
              >
                <img
                  src={product.promo}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                />
                <span className="absolute left-5 top-5 text-[10px] tracking-[0.2em] text-white">
                  Nº {product.number}
                </span>
                <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-xl text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#242820]">
                  ↗
                </span>
              </button>

              <div className="flex items-start justify-between gap-4 py-6">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-[#899071]">
                    HAVAC — EAU DE PARFUM
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#777b70]">{product.subtitle}</p>
                </div>
                <p className="pt-7 text-sm">€{product.price}</p>
              </div>

              <button
                onClick={() => setSelected(product)}
                className="w-full border-t border-[#242820]/20 py-4 text-left text-[10px] tracking-[0.2em] transition hover:border-[#899071] hover:text-[#899071]"
              >
                EXPLORE FRAGRANCE <span className="float-right text-base">↗</span>
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        id="philosophy"
        className="relative overflow-hidden bg-[#343b2e] px-7 py-28 text-[#eeeee8] md:px-16 md:py-40"
      >
        <div className="absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full border border-white/10 md:h-[650px] md:w-[650px]" />
        <div className="absolute -right-12 -top-16 h-[300px] w-[300px] rounded-full border border-white/10 md:h-[480px] md:w-[480px]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-10 text-[10px] tracking-[0.3em] text-[#c1c6a9]">
            A DIFFERENT POINT OF VIEW
          </p>
          <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.065em] md:text-8xl">
            Not made to
            <br />
            <span className="font-serif italic text-[#c1c6a9]">fit in.</span>
            <br />
            Made to mean
            <br />
            something.
          </h2>
          <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/20 pt-8 md:flex-row md:items-end">
            <p className="max-w-sm text-sm leading-7 text-white/65">
              We believe the most memorable things are not always the loudest.
              Sometimes, all it takes is a detail that stays with you.
            </p>
            <span className="text-[10px] tracking-[0.22em] text-[#c1c6a9]">
              HAVAC — THE ART OF PRESENCE
            </span>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[450px] overflow-hidden bg-[#d8d9cf] md:min-h-[650px]">
          <img
            src="/images/just-fucking-rose-promo.jpg"
            alt="HAVAC fragrance detail"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#242820]/10" />
          <span className="absolute bottom-8 left-8 text-[9px] tracking-[0.25em] text-white">
            DETAILS MAKE THE DIFFERENCE
          </span>
        </div>

        <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
          <p className="mb-7 text-[10px] tracking-[0.25em] text-[#899071]">
            BEYOND THE BOTTLE
          </p>
          <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.06em] md:text-6xl">
            A feeling.
            <br />
            <span className="font-serif italic text-[#899071]">In every detail.</span>
          </h2>
          <p className="mt-9 max-w-sm text-sm leading-7 text-[#777b70]">
            From the first impression to the final note, a fragrance becomes
            part of the way you express yourself. Discover a scent that tells
            your story without saying a word.
          </p>
          <a
            href="#collection"
            className="group mt-12 flex w-fit items-center gap-8 border-b border-[#242820] pb-3 text-[10px] tracking-[0.2em]"
          >
            FIND YOUR SIGNATURE
            <span className="text-lg transition-transform group-hover:translate-x-2">→</span>
          </a>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="px-6 py-28 text-center md:py-40">
        <p className="mb-8 text-[10px] tracking-[0.28em] text-[#899071]">
          THE LASTING IMPRESSION
        </p>
        <h2 className="text-6xl font-light tracking-[-0.08em] md:text-9xl">
          Leave a <span className="font-serif italic text-[#899071]">trace.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-sm text-sm leading-7 text-[#777b70]">
          The right fragrance does not introduce you. It becomes part of your
          presence.
        </p>
        <a
          href="#collection"
          className="mt-12 inline-flex items-center gap-8 border border-[#242820] px-8 py-5 text-[10px] tracking-[0.2em] transition duration-300 hover:bg-[#343b2e] hover:text-white"
        >
          EXPLORE HAVAC <span className="text-base">↗</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#242820] px-7 py-12 text-[#eeeee8] md:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-3xl font-semibold tracking-[0.28em]">HAVAC.</p>
            <p className="mt-4 text-[9px] tracking-[0.2em] text-white/50">
              A STUDY IN FRAGRANCE & FORM
            </p>
          </div>
          <div className="flex flex-wrap gap-8 text-[9px] tracking-[0.18em] text-white/65">
            <a href="#collection" className="hover:text-white">COLLECTION</a>
            <a href="#philosophy" className="hover:text-white">PHILOSOPHY</a>
            <a href="#details" className="hover:text-white">DETAILS</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-[9px] tracking-[0.12em] text-white/40 md:flex-row">
          <span>© 2026 HAVAC — CONCEPT DESIGN</span>
          <span>AN UNOFFICIAL WEBSITE CONCEPT — NOT AFFILIATED WITH HAVAC</span>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#171a14]/65 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto bg-[#eeeee8] md:grid-cols-2"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#eeeee8] text-xl"
                aria-label="Close product details"
              >
                ×
              </button>

              <div className="min-h-[300px] bg-[#d8d9cf]">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full min-h-[300px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-[9px] tracking-[0.25em] text-[#899071]">
                  HAVAC — EAU DE PARFUM
                </p>
                <h3 className="mt-5 text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                  {selected.name}
                </h3>
                <p className="mt-3 text-sm text-[#777b70]">{selected.subtitle}</p>
                <p className="mt-8 text-sm leading-7 text-[#656a5e]">
                  {selected.description}
                </p>

                <div className="mt-8 border-t border-[#242820]/15 pt-6">
                  <p className="text-[9px] tracking-[0.2em] text-[#899071]">
                    OLFACTIVE IMPRESSION
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.notes.map((note) => (
                      <span
                        key={note}
                        className="border border-[#242820]/20 px-3 py-2 text-[10px]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex items-center justify-between">
                  <span className="text-xl">€{selected.price}</span>
                  <button
                    onClick={() => addToCart(selected)}
                    className="bg-[#343b2e] px-6 py-4 text-[9px] tracking-[0.2em] text-white transition hover:bg-[#899071]"
                  >
                    ADD TO BAG +
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CART DRAWER */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#eeeee8] p-7 text-[#242820] shadow-2xl md:p-10"
            >
              <div className="flex items-center justify-between border-b border-[#242820]/20 pb-6">
                <h3 className="text-xl tracking-[-0.04em]">Your selection</h3>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-2xl"
                  aria-label="Close bag"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                {cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <p className="font-serif text-4xl italic text-[#899071]">Nothing here.</p>
                    <p className="mt-4 text-sm text-[#777b70]">
                      Your selection is waiting to begin.
                    </p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="mt-8 border-b border-[#242820] pb-2 text-[10px] tracking-[0.2em]"
                    >
                      EXPLORE COLLECTION
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-[#242820]/15 pb-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-20 bg-[#d8d9cf] object-cover"
                        />
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="text-sm">{item.name}</p>
                            <p className="mt-2 text-xs text-[#777b70]">€{item.price}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="w-fit text-[9px] tracking-[0.15em] text-[#899071] hover:text-[#242820]"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-[#242820]/20 pt-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>€{total}</span>
                </div>
                <p className="mt-4 text-[10px] leading-5 text-[#777b70]">
                  This is a design concept. No real orders or payments can be
                  placed through this demonstration.
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-6 w-full bg-[#343b2e] py-5 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#899071]"
                >
                  CONTINUE EXPLORING
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
