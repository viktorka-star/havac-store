
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

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

const reveal = {
  hidden: { opacity: 0, y: 55 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" as const },
  },
};

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 170]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.25]);

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
    <main className="min-h-screen overflow-hidden bg-[#eeeee8] text-[#242820] selection:bg-[#aab08b]">
      {/* SCROLL PROGRESS */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-[#899071]"
      />

      {/* NAVIGATION */}
      <nav className="relative z-40 flex items-center justify-between border-b border-[#242820]/15 bg-[#eeeee8]/90 px-5 py-5 backdrop-blur-xl md:px-12">
        <a href="#" className="text-xl font-semibold tracking-[0.28em]">
          HAVAC<span className="font-light">.</span>
        </a>

        <div className="hidden items-center gap-10 text-[10px] tracking-[0.2em] md:flex">
          <a href="#collection" className="transition hover:text-[#899071]">COLLECTION</a>
          <a href="#philosophy" className="transition hover:text-[#899071]">PHILOSOPHY</a>
          <a href="#details" className="transition hover:text-[#899071]">OUR WORLD</a>
        </div>

        <button
          onClick={() => setCartOpen(true)}
          className="flex items-center gap-3 text-[10px] tracking-[0.16em] transition hover:text-[#899071]"
        >
          BAG <span className="rounded-full border border-current px-2 py-1">{cart.length}</span>
        </button>
      </nav>

      {/* HERO */}
      <section className="relative grid min-h-[720px] grid-cols-1 overflow-hidden md:min-h-[790px] md:grid-cols-2">
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c4c9ad]/30 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#d9c9b4]/40 blur-[120px]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col justify-center px-7 py-20 md:px-14 lg:px-24"
        >
          <motion.p
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-[10px] tracking-[0.32em] text-[#899071]"
          >
            FRAGRANCE AS AN ART FORM — EST. 2024
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[clamp(4rem,8vw,8rem)] font-light leading-[0.82] tracking-[-0.085em]"
            >
              Scent
              <br />
              has a
              <br />
              <span className="font-serif italic text-[#899071]">shape.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-9 max-w-[340px] text-sm leading-7 text-[#686c61]"
          >
            More than a fragrance. An expression of character, translated into
            something you can wear.
          </motion.p>

          <motion.a
            href="#collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="group mt-10 flex w-fit items-center gap-6 border-b border-[#242820] pb-3 text-[10px] tracking-[0.2em]"
          >
            DISCOVER THE COLLECTION
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-3">→</span>
          </motion.a>

          <div className="mt-16 flex items-center gap-4 text-[9px] tracking-[0.2em] text-[#92958a]">
            <span className="h-px w-12 bg-[#899071]" />
            48°08&apos; N — 17°06&apos; E
          </div>
        </motion.div>

        {/* FLOATING PRODUCT VISUAL */}
        <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-[#d8d9cf] md:min-h-full">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[380px] w-[380px] rounded-full bg-[#f5f0e4] blur-[75px] md:h-[520px] md:w-[520px]"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute h-[390px] w-[390px] rounded-full border border-white/40 md:h-[540px] md:w-[540px]"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
            className="absolute h-[300px] w-[300px] rounded-full border border-white/30 md:h-[430px] md:w-[430px]"
          />

          <motion.img
            src="/images/lost-in-time.jpg"
            alt="Lost in Time perfume bottle"
            initial={{ opacity: 0, scale: 0.7, y: 60 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -16, 0],
              rotateY: [0, 8, 0, -8, 0],
              rotateZ: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 1.2 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-10 h-[390px] w-[75%] object-contain drop-shadow-[0_35px_35px_rgba(40,40,30,0.22)] md:h-[560px]"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-7 z-20 text-[9px] tracking-[0.22em] text-white md:bottom-14 md:left-12"
          >
            HAVAC — VISUAL STUDY Nº 04
          </motion.div>

          <div className="absolute right-7 top-8 z-20 text-right text-[9px] tracking-[0.22em] text-white">
            OBJECTS OF
            <br />
            DESIRE
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-8 z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white/70 text-[10px] text-white"
          >
            H.
          </motion.div>
        </div>
      </section>

      {/* MOVING MARQUEE */}
      <section className="overflow-hidden border-y border-[#242820]/15 bg-[#e5e5dc] py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-12 whitespace-nowrap text-[11px] tracking-[0.28em] text-[#777d66]"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>SCENT IS AN IDENTITY ✳ MADE TO BE REMEMBERED ✳ BEYOND THE EXPECTED ✳</span>
          ))}
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="grid grid-cols-1 border-b border-[#242820]/15 md:grid-cols-3">
        {[
          ["01 / IDENTITY", "Made to be remembered."],
          ["02 / EXPRESSION", "Beyond the expected."],
          ["03 / EXPERIENCE", "A signature of your own."],
        ].map(([label, value], i) => (
          <motion.div
            key={label}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="border-b border-[#242820]/15 px-7 py-8 last:border-0 md:border-b-0 md:border-r md:px-10"
          >
            <p className="text-[9px] tracking-[0.22em] text-[#899071]">{label}</p>
            <p className="mt-3 text-sm">{value}</p>
          </motion.div>
        ))}
      </section>

      {/* COLLECTION */}
      <section id="collection" className="px-5 py-24 md:px-12 md:py-32">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-[10px] tracking-[0.28em] text-[#899071]">THE HAVAC SELECTION</p>
            <h2 className="text-5xl font-light tracking-[-0.06em] md:text-7xl">
              Less, but <span className="font-serif italic text-[#899071]">different.</span>
            </h2>
          </div>
          <p className="max-w-[280px] text-sm leading-7 text-[#777b70]">
            Two distinctive compositions. Two different moods. One idea:
            fragrance should feel like you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 65 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: index * 0.18 }}
              className="group"
            >
              <button
                onClick={() => setSelected(product)}
                className="relative block aspect-[4/5] w-full overflow-hidden bg-[#d9dacf] text-left"
              >
                <motion.img
                  src={product.promo}
                  alt={product.name}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.8 }}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#242820]/45 via-transparent to-black/5 opacity-70 transition duration-700 group-hover:opacity-100" />

                <span className="absolute left-6 top-6 text-[10px] tracking-[0.2em] text-white">
                  Nº {product.number}
                </span>

                <span className="absolute bottom-6 left-6 text-left text-white">
                  <span className="block text-[9px] tracking-[0.2em]">HAVAC — EAU DE PARFUM</span>
                  <span className="mt-3 block text-3xl font-light tracking-[-0.04em]">{product.name}</span>
                </span>

                <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-xl text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#242820]">
                  ↗
                </span>
              </button>

              <div className="flex items-center justify-between gap-4 py-5">
                <div>
                  <h3 className="text-xl tracking-[-0.04em]">{product.name}</h3>
                  <p className="mt-2 text-sm text-[#777b70]">{product.subtitle}</p>
                </div>
                <p className="text-sm">€{product.price}</p>
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

      {/* FULL WIDTH STATEMENT */}
      <section className="relative overflow-hidden bg-[#343b2e] px-7 py-28 text-[#eeeee8] md:px-16 md:py-36">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-40 h-[650px] w-[650px] rounded-full border border-white/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          className="absolute -right-10 -top-20 h-[450px] w-[450px] rounded-full border border-white/10"
        />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl"
        >
          <p className="mb-10 text-[10px] tracking-[0.3em] text-[#c1c6a9]">A DIFFERENT POINT OF VIEW</p>
          <h2 className="text-5xl font-light leading-[1.02] tracking-[-0.065em] md:text-8xl">
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
            <span className="text-[10px] tracking-[0.22em] text-[#c1c6a9]">HAVAC — THE ART OF PRESENCE</span>
          </div>
        </motion.div>
      </section>

      {/* DETAILS */}
      <section id="details" className="grid grid-cols-1 md:grid-cols-2">
        <div className="group relative min-h-[470px] overflow-hidden bg-[#d8d9cf] md:min-h-[650px]">
          <motion.img
            src="/images/just-fucking-rose-promo.jpg"
            alt="HAVAC fragrance detail"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#242820]/15 transition duration-700 group-hover:bg-[#242820]/5" />
          <span className="absolute bottom-8 left-8 text-[9px] tracking-[0.25em] text-white">
            DETAILS MAKE THE DIFFERENCE
          </span>
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24"
        >
          <p className="mb-7 text-[10px] tracking-[0.25em] text-[#899071]">BEYOND THE BOTTLE</p>
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
          <a href="#collection" className="group mt-12 flex w-fit items-center gap-8 border-b border-[#242820] pb-3 text-[10px] tracking-[0.2em]">
            FIND YOUR SIGNATURE
            <span className="text-lg transition-transform group-hover:translate-x-2">→</span>
          </a>
        </motion.div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative overflow-hidden px-6 py-28 text-center md:py-36">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4c9ad] blur-[100px]"
        />
        <div className="relative z-10">
          <p className="mb-8 text-[10px] tracking-[0.28em] text-[#899071]">THE LASTING IMPRESSION</p>
          <h2 className="text-6xl font-light tracking-[-0.08em] md:text-9xl">
            Leave a <span className="font-serif italic text-[#899071]">trace.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-sm leading-7 text-[#777b70]">
            The right fragrance does not introduce you. It becomes part of your presence.
          </p>
          <a href="#collection" className="mt-12 inline-flex items-center gap-8 border border-[#242820] px-8 py-5 text-[10px] tracking-[0.2em] transition duration-300 hover:bg-[#343b2e] hover:text-white">
            EXPLORE HAVAC <span className="text-base">↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#242820] px-7 py-12 text-[#eeeee8] md:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-3xl font-semibold tracking-[0.28em]">HAVAC.</p>
            <p className="mt-4 text-[9px] tracking-[0.2em] text-white/50">A STUDY IN FRAGRANCE & FORM</p>
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
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#171a14]/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.98 }}
              transition={{ duration: 0.35 }}
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

              <div className="min-h-[300px] overflow-hidden bg-[#d8d9cf]">
                <motion.img
                  src={selected.image}
                  alt={selected.name}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="h-full min-h-[300px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-[9px] tracking-[0.25em] text-[#899071]">HAVAC — EAU DE PARFUM</p>
                <h3 className="mt-5 text-3xl font-medium tracking-[-0.05em] md:text-4xl">{selected.name}</h3>
                <p className="mt-3 text-sm text-[#777b70]">{selected.subtitle}</p>
                <p className="mt-8 text-sm leading-7 text-[#656a5e]">{selected.description}</p>

                <div className="mt-8 border-t border-[#242820]/15 pt-6">
                  <p className="text-[9px] tracking-[0.2em] text-[#899071]">OLFACTIVE IMPRESSION</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.notes.map((note) => (
                      <span key={note} className="border border-[#242820]/20 px-3 py-2 text-[10px]">{note}</span>
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
              className="fixed inset-0 z-[90] bg-black/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed right-0 top-0 z-[100] flex h-full w-full max-w-md flex-col bg-[#eeeee8] p-7 text-[#242820] shadow-2xl md:p-10"
            >
              <div className="flex items-center justify-between border-b border-[#242820]/20 pb-6">
                <h3 className="text-xl tracking-[-0.04em]">Your selection</h3>
                <button onClick={() => setCartOpen(false)} className="text-2xl" aria-label="Close bag">×</button>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                {cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <p className="font-serif text-4xl italic text-[#899071]">Nothing here.</p>
                    <p className="mt-4 text-sm text-[#777b70]">Your selection is waiting to begin.</p>
                    <button onClick={() => setCartOpen(false)} className="mt-8 border-b border-[#242820] pb-2 text-[10px] tracking-[0.2em]">
                      EXPLORE COLLECTION
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-[#242820]/15 pb-6">
                        <img src={item.image} alt={item.name} className="h-24 w-20 bg-[#d8d9cf] object-cover" />
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="text-sm">{item.name}</p>
                            <p className="mt-2 text-xs text-[#777b70]">€{item.price}</p>
                          </div>
                          <button onClick={() => removeFromCart(index)} className="w-fit text-[9px] tracking-[0.15em] text-[#899071] hover:text-[#242820]">
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
                  This is a design concept. No real orders or payments can be placed through this demonstration.
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
