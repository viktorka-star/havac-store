
"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import type { Variants } from "framer-motion";

const products = [
  {
    name: "LOST IN TIME",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=90",
    description: "Vôňa, ktorá zostáva v pamäti.",
  },
  {
    name: "JUST FUCKING ROSE",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=90",
    description: "Výrazný charakter. Nezameniteľný dojem.",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 55 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<number[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 65]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const addToCart = (index: number) => {
    setCart((current) => [...current, index]);
    setSelected(null);
    setCartOpen(true);
  };

  const total = cart.reduce((sum, index) => sum + products[index].price, 0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3eee5] text-[#302820]">
      {/* NAVIGATION */}
      <nav className="relative z-30 flex items-center justify-between border-b border-[#c9bba8]/40 bg-[#f3eee5]/90 px-6 py-5 backdrop-blur-md md:px-14">
        <a
          href="#domov"
          className="text-2xl font-light tracking-[0.32em] text-[#45372d]"
        >
          HAVAC
        </a>

        <div className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.2em] md:flex">
          <a href="#kolekcia" className="transition hover:text-[#a17c55]">
            Kolekcia
          </a>
          <a href="#pribeh" className="transition hover:text-[#a17c55]">
            Náš svet
          </a>
          <a href="#kontakt" className="transition hover:text-[#a17c55]">
            Kontakt
          </a>
        </div>

        <button
          onClick={() => setCartOpen(true)}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] transition hover:text-[#a17c55]"
        >
          Taška <span>({cart.length})</span>
        </button>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        id="domov"
        className="relative flex min-h-[740px] items-center overflow-hidden px-6 py-16 md:min-h-[850px] md:px-16 lg:px-24"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-[#e5d8c4]/50 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d9c6aa]/40 blur-[110px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            style={{ y: heroTextY }}
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 order-2 pb-10 md:order-1 md:pb-0"
          >
            <p className="mb-7 text-[10px] uppercase tracking-[0.42em] text-[#9c7955] md:text-xs">
              Vôňa, ktorá rozpráva príbeh
            </p>

            <h1 className="max-w-[600px] font-serif text-[56px] font-light leading-[0.99] tracking-[-0.045em] text-[#3a3028] sm:text-7xl lg:text-[100px]">
              Viac než
              <br />
              len <span className="italic text-[#a17d59]">vôňa.</span>
            </h1>

            <div className="mb-8 mt-8 h-px w-20 bg-[#b59a79]" />

            <p className="max-w-[390px] text-sm leading-8 text-[#75685a] md:text-base">
              Objavte svet vôní, ktoré vyjadrujú osobnosť, emócie a
              jedinečný charakter.
            </p>

            <a
              href="#kolekcia"
              className="mt-10 inline-flex items-center gap-8 border border-[#8f765b] px-7 py-4 text-[10px] uppercase tracking-[0.23em] transition duration-300 hover:bg-[#493a2e] hover:text-[#f8f2e8]"
            >
              Objaviť kolekciu <span className="text-lg">↗</span>
            </a>

            <div className="mt-16 hidden items-center gap-4 md:flex">
              <span className="h-px w-12 bg-[#b49a7b]" />
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#968574]">
                Objavte svoj podpis
              </span>
            </div>
          </motion.div>

          <motion.div
            style={{ y: heroImageY, scale: heroScale }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative order-1 mx-auto flex h-[390px] w-full max-w-[650px] items-center justify-center md:order-2 md:h-[680px]"
          >
            <div className="absolute right-[5%] top-[8%] h-[75%] w-[76%] rounded-t-full border border-[#b9a387]/50" />
            <div className="absolute right-[10%] top-[13%] h-[75%] w-[76%] rounded-t-full border border-[#d1c0a8]/60" />

            <div className="absolute bottom-[7%] right-[2%] h-16 w-[90%] rounded-[50%] bg-[#a58b6c]/20 blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1400&q=95"
              alt="Luxusný parfum v elegantnom prostredí"
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_35px_35px_rgba(65,45,25,0.18)]"
            />

            <div className="absolute bottom-[8%] left-[3%] z-20 hidden rotate-[-90deg] text-[9px] uppercase tracking-[0.4em] text-[#a18a70] sm:block">
              HAVAC · PARFUMS
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[8px] uppercase tracking-[0.3em] text-[#968574]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.7, repeat: Infinity }}
            className="h-8 w-px bg-[#a78e70]"
          />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="relative overflow-hidden border-y border-[#d6c9b8] bg-[#e9dfd1] px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left"
        >
          <p className="font-serif text-3xl font-light italic text-[#5b4938] md:text-4xl">
            Váš svet. Vaša vôňa.
          </p>
          <p className="max-w-sm text-xs leading-7 text-[#837363] md:text-sm">
            Niektoré okamihy si pamätáme navždy. Niektoré vône tiež.
          </p>
          <span className="hidden text-3xl text-[#a68b6b] md:block">✳</span>
        </motion.div>
      </section>

      {/* LOST IN TIME */}
      <section id="kolekcia" className="relative overflow-hidden bg-[#e7dccc]">
        <div className="mx-auto grid min-h-[720px] max-w-[1500px] md:grid-cols-2">
          <div className="relative min-h-[460px] overflow-hidden md:min-h-[720px]">
            <motion.img
              initial={{ scale: 1.13 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1500&q=95"
              alt="Parfumová kompozícia Lost in Time"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#30251d]/35 via-transparent to-transparent" />
            <div className="absolute bottom-9 left-9 text-[#fff8ee]">
              <p className="text-[10px] uppercase tracking-[0.35em]">
                Kolekcia 01
              </p>
              <p className="mt-2 font-serif text-4xl italic">Lost in Time</p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-[#a1815d]">
                01 / Nezabudnuteľný okamih
              </p>
              <h2 className="font-serif text-6xl font-light leading-[1.02] tracking-[-0.04em] text-[#46382d] lg:text-7xl">
                LOST
                <br />
                IN <span className="italic text-[#a17b55]">TIME.</span>
              </h2>
              <div className="my-8 h-px w-16 bg-[#ae9271]" />
              <p className="max-w-md text-sm leading-8 text-[#77695a]">
                Každý okamih má svoju atmosféru. Objavte vôňu, ktorá sa
                stane súčasťou vašich vlastných príbehov.
              </p>
              <button
                onClick={() => setSelected(0)}
                className="mt-10 border-b border-[#8f765b] pb-3 text-[10px] uppercase tracking-[0.25em] transition hover:text-[#a17b55]"
              >
                Objaviť parfum <span className="ml-5">↗</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISUAL INTERLUDE */}
      <section className="relative overflow-hidden bg-[#f3eee5] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#a1815d]">
              Umenie detailu
            </span>
            <h2 className="mt-7 font-serif text-5xl font-light leading-tight text-[#45372d] md:text-6xl">
              Krása je
              <br />
              <span className="italic text-[#a17b55]">v detailoch.</span>
            </h2>
            <p className="mt-7 max-w-xs text-sm leading-8 text-[#817363]">
              Estetika, atmosféra a osobitosť. Svet, ktorý sa začína
              jediným detailom.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -bottom-7 -left-7 h-[75%] w-[65%] border border-[#c4ad91]" />
            <img
              src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1500&q=95"
              alt="Elegantný parfumový detail"
              className="relative z-10 h-[420px] w-full object-cover md:h-[590px]"
            />
          </motion.div>
        </div>
      </section>

      {/* JUST FUCKING ROSE */}
      <section className="relative overflow-hidden bg-[#d9c6b8]">
        <div className="mx-auto grid min-h-[720px] max-w-[1500px] md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-8 py-20 md:order-1 md:px-16 lg:px-24">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-[#8c665b]">
                02 / Výrazný charakter
              </p>
              <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-[-0.04em] text-[#45332e] lg:text-7xl">
                JUST
                <br />
                FUCKING
                <br />
                <span className="italic text-[#956c62]">ROSE.</span>
              </h2>
              <div className="my-8 h-px w-16 bg-[#a47b6e]" />
              <p className="max-w-md text-sm leading-8 text-[#735d55]">
                Pre tých, ktorí sa neboja vyjadriť svoju osobnosť.
                Výrazný názov. Nezameniteľná identita.
              </p>
              <button
                onClick={() => setSelected(1)}
                className="mt-10 border-b border-[#8f6c60] pb-3 text-[10px] uppercase tracking-[0.25em] transition hover:text-[#fff8ee]"
              >
                Objaviť parfum <span className="ml-5">↗</span>
              </button>
            </motion.div>
          </div>

          <div className="relative order-1 min-h-[460px] overflow-hidden md:order-2 md:min-h-[720px]">
            <motion.img
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1500&q=95"
              alt="Parfumová kompozícia Just Fucking Rose"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#30211f]/35 to-transparent" />
            <div className="absolute bottom-9 right-9 text-right text-[#fff8ee]">
              <p className="text-[10px] uppercase tracking-[0.35em]">
                Kolekcia 02
              </p>
              <p className="mt-2 font-serif text-4xl italic">
                Just Fucking Rose
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="bg-[#f3eee5] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1300px]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#a1815d]">
                Vyberte si svoj príbeh
              </p>
              <h2 className="font-serif text-5xl font-light text-[#46382d] md:text-6xl">
                Naša <span className="italic text-[#a17b55]">kolekcia.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[#817363]">
              Dve mená. Dva svety. Objavte ich bližšie.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group cursor-pointer"
                onClick={() => setSelected(index)}
              >
                <div className="relative h-[420px] overflow-hidden bg-[#e7ddcf] md:h-[540px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
                  <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-xl text-white transition duration-300 group-hover:bg-white group-hover:text-[#493a2e]">
                    ↗
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 py-6">
                  <div>
                    <h3 className="font-serif text-2xl tracking-wide text-[#493a2e] md:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#8c7c6b]">
                      {product.description}
                    </p>
                  </div>
                  <span className="text-sm text-[#806b55]">
                    €{product.price}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        id="pribeh"
        className="relative overflow-hidden bg-[#493b31] px-6 py-28 text-[#f5eee4] md:py-36"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-[450px] w-[450px] rounded-full border border-[#b49a7b]/20" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-[350px] w-[350px] rounded-full border border-[#b49a7b]/20" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="mb-9 text-[10px] uppercase tracking-[0.4em] text-[#c9ad8c]">
            Svet HAVAC
          </p>
          <h2 className="font-serif text-5xl font-light leading-tight md:text-7xl">
            Nie je to len
            <br />
            <span className="italic text-[#d5b998]">to, čo nosíte.</span>
          </h2>
          <p className="mx-auto mt-9 max-w-xl text-sm leading-8 text-[#d0c2b1] md:text-base">
            Je to pocit. Spomienka. Prvý dojem. Malý detail, ktorý
            dokáže vyjadriť viac než tisíc slov.
          </p>
          <a
            href="#kolekcia"
            className="mt-12 inline-flex items-center gap-7 border border-[#c7ac8b] px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition duration-300 hover:bg-[#f3eee5] hover:text-[#493b31]"
          >
            Preskúmať kolekciu <span>↗</span>
          </a>
        </motion.div>
      </section>

      {/* FINAL VISUAL */}
      <section className="relative h-[500px] overflow-hidden md:h-[700px]">
        <motion.img
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1800&q=95"
          alt="Atmosférická parfumová fotografia"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#33251e]/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-7 text-[10px] uppercase tracking-[0.4em]">
            HAVAC PARFUMS
          </p>
          <h2 className="font-serif text-6xl font-light italic md:text-8xl">
            Make it yours.
          </h2>
          <a
            href="#kolekcia"
            className="mt-10 border border-white/80 px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:bg-white hover:text-[#493b31]"
          >
            Objaviť svet HAVAC
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontakt" className="bg-[#e8ded0] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#c8b9a6] pb-12 md:flex-row">
            <div>
              <p className="text-3xl font-light tracking-[0.35em] text-[#493b31]">
                HAVAC
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#8c7c6b]">
                Parfums
              </p>
            </div>
            <div className="flex flex-col gap-4 text-xs text-[#786858]">
              <a href="#domov" className="hover:text-[#a17b55]">
                Domov
              </a>
              <a href="#kolekcia" className="hover:text-[#a17b55]">
                Kolekcia
              </a>
              <a href="#pribeh" className="hover:text-[#a17b55]">
                Náš svet
              </a>
            </div>
            <p className="max-w-xs text-xs leading-7 text-[#8b7c6b]">
              Vôňa je osobný podpis. Objavte ten svoj.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 text-[9px] leading-5 tracking-[0.08em] text-[#948574] md:flex-row">
            <span>© 2026 HAVAC CONCEPT DESIGN</span>
            <span>
              Neoficiálny dizajnový koncept. Bez prepojenia na značku HAVAC.
              Ceny a objednávky sú iba ukážkové.
            </span>
          </div>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#211a15]/65 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-3xl overflow-auto bg-[#f3eee5] md:grid-cols-2"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-3 z-10 text-2xl text-[#59493a]"
              >
                ×
              </button>
              <img
                src={products[selected].image}
                alt={products[selected].name}
                className="h-[320px] w-full object-cover md:h-full"
              />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#a1815d]">
                  HAVAC PARFUMS
                </p>
                <h3 className="mt-6 font-serif text-3xl text-[#493b31]">
                  {products[selected].name}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#817363]">
                  {products[selected].description}
                </p>
                <p className="mt-8 text-xl text-[#806b55]">
                  €{products[selected].price}
                </p>
                <button
                  onClick={() => addToCart(selected)}
                  className="mt-8 bg-[#493b31] px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#806b55]"
                >
                  Pridať do tašky
                </button>
                <p className="mt-4 text-[9px] leading-5 text-[#a09282]">
                  Ukážková funkcia – nejde o skutočnú objednávku.
                </p>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-50 bg-black/40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col bg-[#f3eee5] p-7 text-[#493b31] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#d4c6b5] pb-6">
                <h3 className="font-serif text-3xl">Vaša taška</h3>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-3xl"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-auto py-6">
                {cart.length === 0 ? (
                  <p className="text-sm text-[#897968]">
                    Vaša taška je zatiaľ prázdna.
                  </p>
                ) : (
                  cart.map((index, itemIndex) => (
                    <div
                      key={`${index}-${itemIndex}`}
                      className="flex items-center justify-between gap-4 border-b border-[#ded2c3] py-5"
                    >
                      <div>
                        <p className="font-serif text-lg">
                          {products[index].name}
                        </p>
                        <p className="mt-2 text-xs text-[#8b7967]">
                          €{products[index].price}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setCart((current) =>
                            current.filter((_, i) => i !== itemIndex)
                          )
                        }
                        className="text-xs text-[#9a7860] underline"
                      >
                        Odstrániť
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-[#d4c6b5] pt-6">
                <div className="mb-6 flex justify-between">
                  <span className="text-sm">Spolu</span>
                  <span className="text-lg">€{total}</span>
                </div>
                <p className="text-[10px] leading-5 text-[#948574]">
                  Toto je iba dizajnová ukážka. Platby ani skutočné
                  objednávky nie sú dostupné.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
