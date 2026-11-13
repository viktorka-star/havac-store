
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "LOST IN TIME",
    subtitle: "A moment beyond time",
    price: 89,
    image: "/images/lost-in-time.jpg",
    promo: "/images/lost-in-time-promo.jpg",
    color: "#d8c2ae",
  },
  {
    id: 2,
    name: "JUST FUCKING ROSE",
    subtitle: "A different kind of rose",
    price: 95,
    image: "/images/just-fucking-rose.jpg",
    promo: "/images/just-fucking-rose-promo.jpg",
    color: "#c9a19d",
  },
];

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const product = products.find((p) => p.id === selected);
  const total = products.reduce(
    (sum, p) => sum + p.price * cart.filter((id) => id === p.id).length,
    0
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e9] text-[#30251f]">
      <nav className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-white/30 bg-[#f5f0e9]/80 px-7 py-5 backdrop-blur-xl md:px-16">
        <a href="#home" className="font-serif text-3xl tracking-[.3em]">
          HAVAC
        </a>

        <div className="hidden gap-10 text-sm tracking-[.15em] md:flex">
          <a href="#home">HOME</a>
          <a href="#collection">COLLECTION</a>
          <a href="#story">OUR WORLD</a>
        </div>

        <button
          onClick={() => setCartOpen(true)}
          className="text-sm tracking-wider"
        >
          BAG ({cart.length})
        </button>
      </nav>

      <section id="home" className="relative grid min-h-screen md:grid-cols-[.85fr_1.15fr]">
        <div className="relative z-10 flex flex-col justify-center px-8 pb-16 pt-36 md:px-16 lg:px-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-9 text-xs tracking-[.3em] text-[#9b7562]"
          >
            THE ART OF FRAGRANCE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: .15 }}
            className="font-serif text-6xl leading-[1.08] md:text-7xl lg:text-[90px]"
          >
            Beyond
            <br />
            <span className="italic text-[#a77d6c]">the</span>
            <br />
            ordinary.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8, duration: 1 }}
            className="mt-9 max-w-sm text-base leading-8 text-[#86776c]"
          >
            A world of fragrance, emotion and individuality.
            Discover the art of being unforgettable.
          </motion.p>

          <motion.a
            href="#collection"
            whileHover={{ x: 8 }}
            className="mt-12 w-fit border-b border-[#49382e] pb-3 text-sm tracking-[.2em]"
          >
            EXPLORE THE COLLECTION ↗
          </motion.a>
        </div>

        <div className="relative min-h-[580px] overflow-hidden bg-[#d8c7b8] md:min-h-screen">
          <motion.div
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src="/images/lost-in-time-promo.jpg"
              alt="HAVAC Lost in Time"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#39271f]/30 via-transparent to-white/10" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 right-10 text-sm tracking-[.2em] text-white"
          >
            DISCOVER YOUR SIGNATURE
          </motion.p>

          <span className="absolute right-8 top-28 font-serif text-base italic text-white/80">
            01 / 02
          </span>
        </div>
      </section>

      <section id="collection" className="px-6 py-28 md:px-16 md:py-36">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs tracking-[.3em] text-[#a77d6c]">
              SCENT HAS A STORY
            </p>
            <h2 className="font-serif text-5xl md:text-7xl">
              The collection.
            </h2>
          </div>

          <p className="max-w-sm text-base leading-8 text-[#86776c]">
            Two distinctive creations. Two different expressions of individuality.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ duration: .8, delay: i * .15 }}
              className="group"
            >
              <button
                onClick={() => setSelected(p.id)}
                className="relative block h-[480px] w-full overflow-hidden text-left md:h-[590px]"
                style={{ backgroundColor: p.color }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <span className="absolute bottom-8 left-8 text-sm tracking-[.15em] text-white">
                  DISCOVER THE FRAGRANCE ↗
                </span>

                <span className="absolute right-7 top-7 font-serif text-2xl italic text-white/80">
                  0{i + 1}
                </span>
              </button>

              <div className="flex items-end justify-between gap-4 py-7">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {p.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#8c7b70]">
                    {p.subtitle}
                  </p>

                  <p className="mt-3 text-xs tracking-wider text-[#a77d6c]">
                    {p.price} € · SAMPLE PRICE
                  </p>
                </div>

                <button
                  onClick={() => setCart((old) => [...old, p.id])}
                  className="border border-[#49382e] px-5 py-4 text-sm tracking-wider transition hover:bg-[#49382e] hover:text-white"
                >
                  ADD +
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="story"
        className="relative overflow-hidden bg-[#392b27] px-8 py-32 text-center text-[#f5eee7] md:py-44"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <p className="text-xs tracking-[.3em] text-[#c6a58e]">
            THE HAVAC WORLD
          </p>

          <h2 className="mt-8 font-serif text-5xl leading-tight md:text-7xl">
            Not just a fragrance.
            <br />
            <span className="italic text-[#c6a58e]">An identity.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-base leading-8 text-white/70">
            Every detail tells a story. Discover a different perspective on the art of fragrance.
          </p>
        </motion.div>
      </section>

      <footer className="bg-[#f5f0e9] px-8 py-20 text-center">
        <p className="font-serif text-4xl tracking-[.3em]">HAVAC</p>

        <p className="mt-5 text-xs tracking-[.3em] text-[#8c7b70]">
          THE ART OF FRAGRANCE
        </p>

        <div className="mt-9 flex justify-center gap-8 text-sm tracking-wider">
          <a href="#home">HOME</a>
          <a href="#collection">COLLECTION</a>
          <a href="#story">OUR WORLD</a>
        </div>

        <p className="mt-12 text-xs text-[#8c7b70]">
          Unofficial concept website · Sample prices · No orders or payments enabled
        </p>
      </footer>

      <AnimatePresence>
        {product && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: .96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="grid max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-[#f5f0e9] md:grid-cols-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover md:h-full"
              />

              <div className="relative flex flex-col justify-center p-8 md:p-14">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-6 top-5 text-2xl"
                >
                  ×
                </button>

                <p className="text-xs tracking-[.3em] text-[#a77d6c]">
                  HAVAC COLLECTION
                </p>

                <h2 className="mt-6 font-serif text-4xl">
                  {product.name}
                </h2>

                <p className="mt-5 text-base leading-7 text-[#86776c]">
                  {product.subtitle}
                </p>

                <p className="mt-8 font-serif text-2xl">
                  {product.price} €
                </p>

                <button
                  onClick={() => {
                    setCart((old) => [...old, product.id]);
                    setSelected(null);
                    setCartOpen(true);
                  }}
                  className="mt-8 bg-[#49382e] py-5 text-sm tracking-[.2em] text-white"
                >
                  ADD TO BAG
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-[60] bg-black/50"
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: .4 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#f5f0e9] p-8"
            >
              <div className="flex items-center justify-between border-b border-[#ddd0c4] pb-6">
                <h2 className="font-serif text-3xl">
                  Your bag ({cart.length})
                </h2>

                <button
                  onClick={() => setCartOpen(false)}
                  className="text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                {cart.length === 0 ? (
                  <p className="py-12 text-center text-base text-[#86776c]">
                    Your bag is empty.
                  </p>
                ) : (
                  products
                    .filter((p) => cart.includes(p.id))
                    .map((p) => (
                      <div
                        key={p.id}
                        className="flex justify-between border-b border-[#ddd0c4] py-5"
                      >
                        <div>
                          <p className="font-serif text-lg">{p.name}</p>
                          <p className="mt-2 text-sm">
                            {cart.filter((id) => id === p.id).length} × {p.price} €
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            setCart((old) => {
                              const index = old.indexOf(p.id);
                              return old.filter((_, i) => i !== index);
                            })
                          }
                          className="text-sm underline"
                        >
                          REMOVE
                        </button>
                      </div>
                    ))
                )}
              </div>

              <div className="border-t border-[#ddd0c4] pt-6">
                <div className="flex justify-between font-serif text-xl">
                  <span>Total</span>
                  <span>{total} €</span>
                </div>

                <p className="mt-4 text-xs leading-6 text-[#86776c]">
                  Demonstration cart only. Prices are illustrative; checkout is disabled.
                </p>

                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-6 w-full bg-[#49382e] py-4 text-sm tracking-wider text-white"
                >
                  CONTINUE EXPLORING
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
