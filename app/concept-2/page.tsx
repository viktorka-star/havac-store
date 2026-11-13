
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "LOST IN TIME",
    subtitle: "A moment beyond time.",
    price: 89,
    image: "/images/lost-in-time.jpg",
    promo: "/images/lost-in-time-promo.jpg",
    number: "01",
    color: "#65232d",
  },
  {
    id: 2,
    name: "JUST FUCKING ROSE",
    subtitle: "A different kind of rose.",
    price: 95,
    image: "/images/just-fucking-rose.jpg",
    promo: "/images/just-fucking-rose-promo.jpg",
    number: "02",
    color: "#48202a",
  },
];

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const product = products.find((p) => p.id === selected);

  const total = products.reduce(
    (sum, p) =>
      sum + p.price * cart.filter((id) => id === p.id).length,
    0
  );

  const addToCart = (id: number) => {
    setCart((old) => [...old, id]);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#100d0e] text-[#f4eae5] selection:bg-[#8c263b]">

      {/* NAVIGATION */}

      <nav className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-white/10 bg-[#100d0e]/75 px-6 py-5 backdrop-blur-xl md:px-14">
        <a
          href="#home"
          className="font-serif text-3xl tracking-[.28em]"
        >
          HAVAC
        </a>

        <div className="hidden items-center gap-10 text-sm tracking-[.16em] text-white/70 md:flex">
          <a href="#home" className="transition hover:text-white">HOME</a>
          <a href="#collection" className="transition hover:text-white">COLLECTION</a>
          <a href="#experience" className="transition hover:text-white">EXPERIENCE</a>
        </div>

        <button
          onClick={() => setCartOpen(true)}
          className="border border-white/30 px-5 py-3 text-sm tracking-wider transition hover:bg-white hover:text-black"
        >
          BAG ({cart.length})
        </button>
      </nav>

      {/* HERO */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#160d11]"
      >
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/images/lost-in-time-promo.jpg"
            alt="HAVAC fragrance campaign"
            className="h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10090d] via-[#180d12]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100d0e] via-transparent to-black/20" />
        </div>

        <div className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full border border-[#c17a7e]/20" />
        <div className="pointer-events-none absolute -right-16 top-[30%] h-[370px] w-[370px] rounded-full border border-[#c17a7e]/20" />

        <div className="relative z-10 w-full px-7 pb-20 pt-40 md:px-16 lg:px-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl"
          >
            <p className="mb-8 text-sm tracking-[.4em] text-[#d49b9d]">
              FRAGRANCE WITHOUT LIMITS
            </p>

            <h1 className="font-serif text-7xl leading-[.9] tracking-tight md:text-8xl lg:text-[125px]">
              Own
              <br />
              <span className="ml-10 italic text-[#b86b76] md:ml-24">
                the
              </span>
              <br />
              moment.
            </h1>

            <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <a
                href="#collection"
                className="group flex items-center gap-8 border border-[#c17a7e] px-8 py-5 text-sm tracking-[.2em] transition duration-500 hover:bg-[#9d3448]"
              >
                EXPLORE COLLECTION
                <span className="text-xl transition group-hover:translate-x-2">→</span>
              </a>

              <p className="max-w-xs text-base leading-7 text-white/65">
                Fragrance is more than what you wear.
                It's what people remember.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 right-8 hidden text-sm tracking-[.3em] text-white/60 md:block"
        >
          SCROLL TO DISCOVER ↓
        </motion.div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#6e1c30] via-[#bd6875] to-transparent" />
      </section>

      {/* EDITORIAL INTRO */}

      <section className="relative overflow-hidden bg-[#100d0e] px-7 py-32 md:px-16 md:py-40">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#671b31]/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="mb-7 text-sm tracking-[.3em] text-[#bd7580]">
              BEYOND THE EXPECTED
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Some things
              <br />
              <span className="italic text-[#b86b76]">stay with you.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border-l border-[#8e3948] pl-8 md:ml-12"
          >
            <p className="max-w-md text-lg leading-9 text-white/65">
              A signature is never accidental.
              It's a feeling, a memory, a statement.
            </p>
            <div className="mt-10 h-px w-24 bg-[#b86b76]" />
          </motion.div>
        </div>
      </section>

      {/* COLLECTION */}

      <section id="collection" className="bg-[#171012] px-6 py-28 md:px-16 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm tracking-[.35em] text-[#bd7580]">
                DISCOVER YOUR SCENT
              </p>
              <h2 className="font-serif text-6xl md:text-8xl">
                The selection<span className="text-[#b86b76]">.</span>
              </h2>
            </div>

            <p className="max-w-xs text-base leading-8 text-white/55">
              Two creations. Two personalities.
              One unforgettable impression.
            </p>
          </div>

          <div className="space-y-28">
            {products.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: 1 }}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <button
                  onClick={() => setSelected(p.id)}
                  className="group relative block h-[470px] w-full overflow-hidden text-left md:h-[650px]"
                  style={{ backgroundColor: p.color }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  <span className="absolute left-8 top-8 font-serif text-5xl italic text-white/80">
                    {p.number}
                  </span>

                  <span className="absolute bottom-8 right-8 translate-y-3 text-base tracking-widest text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    VIEW FRAGRANCE →
                  </span>
                </button>

                <div className="py-6 md:px-6">
                  <p className="mb-7 text-sm tracking-[.3em] text-[#bd7580]">
                    THE HAVAC COLLECTION / {p.number}
                  </p>

                  <h3 className="font-serif text-5xl leading-tight md:text-6xl">
                    {p.name}
                  </h3>

                  <p className="mt-6 text-lg text-white/55">
                    {p.subtitle}
                  </p>

                  <div className="my-10 h-px w-full bg-white/15" />

                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl">{p.price} €</span>

                    <button
                      onClick={() => addToCart(p.id)}
                      className="border border-[#b86b76] px-7 py-4 text-sm tracking-widest transition duration-500 hover:bg-[#8f293d]"
                    >
                      ADD TO BAG +
                    </button>
                  </div>

                  <button
                    onClick={() => setSelected(p.id)}
                    className="mt-10 text-sm tracking-[.2em] text-[#d49b9d] transition hover:text-white"
                  >
                    DISCOVER MORE ↗
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND EXPERIENCE */}

      <section
        id="experience"
        className="relative overflow-hidden bg-[#641d30] px-7 py-36 text-center md:py-48"
      >
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative mx-auto max-w-5xl"
        >
          <p className="mb-8 text-sm tracking-[.4em] text-white/70">
            THIS IS YOUR MOMENT
          </p>

          <h2 className="font-serif text-6xl leading-tight md:text-8xl">
            Leave
            <br />
            a lasting
            <br />
            <span className="italic text-[#e9b6b3]">impression.</span>
          </h2>

          <a
            href="#collection"
            className="mt-12 inline-block border border-white/60 px-9 py-5 text-sm tracking-[.2em] transition duration-500 hover:bg-white hover:text-[#641d30]"
          >
            FIND YOUR FRAGRANCE
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#100d0e] px-7 py-20 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 border-b border-white/15 pb-14 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-6xl tracking-[.2em]">HAVAC</p>
            <p className="mt-5 text-sm tracking-[.25em] text-[#bd7580]">
              OWN YOUR MOMENT.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm tracking-wider text-white/65">
            <a href="#home" className="hover:text-white">HOME</a>
            <a href="#collection" className="hover:text-white">COLLECTION</a>
            <a href="#experience" className="hover:text-white">EXPERIENCE</a>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>Unofficial HAVAC concept website.</p>
          <p>Illustrative prices · No real orders or payments.</p>
        </div>
      </footer>

      {/* PRODUCT DETAIL MODAL */}

      <AnimatePresence>
        {product && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: .95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="grid max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-[#191113] md:grid-cols-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover md:h-full"
              />

              <div className="relative flex flex-col justify-center p-8 md:p-14">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-7 top-5 text-3xl text-white/70 hover:text-white"
                >
                  ×
                </button>

                <p className="text-sm tracking-[.3em] text-[#bd7580]">
                  HAVAC / THE COLLECTION
                </p>

                <h2 className="mt-8 font-serif text-5xl leading-tight">
                  {product.name}
                </h2>

                <p className="mt-6 text-lg text-white/60">
                  {product.subtitle}
                </p>

                <div className="my-10 h-px bg-white/15" />

                <p className="font-serif text-3xl">{product.price} €</p>

                <button
                  onClick={() => {
                    addToCart(product.id);
                    setSelected(null);
                    setCartOpen(true);
                  }}
                  className="mt-10 bg-[#8f293d] py-5 text-sm tracking-[.2em] transition hover:bg-[#ad4054]"
                >
                  ADD TO BAG
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* SHOPPING BAG */}

        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: .45, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#191113] p-8"
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-7">
                <h2 className="font-serif text-3xl">
                  Your bag ({cart.length})
                </h2>

                <button
                  onClick={() => setCartOpen(false)}
                  className="text-3xl text-white/70 hover:text-white"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                {cart.length === 0 ? (
                  <p className="py-12 text-center text-lg text-white/50">
                    Your bag is empty.
                  </p>
                ) : (
                  products
                    .filter((p) => cart.includes(p.id))
                    .map((p) => (
                      <div
                        key={p.id}
                        className="flex justify-between border-b border-white/15 py-6"
                      >
                        <div>
                          <p className="font-serif text-xl">{p.name}</p>
                          <p className="mt-3 text-base text-white/60">
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
                          className="text-sm text-[#d49b9d] underline"
                        >
                          REMOVE
                        </button>
                      </div>
                    ))
                )}
              </div>

              <div className="border-t border-white/15 pt-7">
                <div className="flex justify-between font-serif text-2xl">
                  <span>Total</span>
                  <span>{total} €</span>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/50">
                  Demonstration cart only. Prices are illustrative.
                  Checkout is disabled.
                </p>

                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-7 w-full bg-[#8f293d] py-5 text-sm tracking-[.2em] transition hover:bg-[#ad4054]"
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
