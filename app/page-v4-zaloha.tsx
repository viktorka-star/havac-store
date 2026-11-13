
"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "LOST IN TIME",
    type: "EXTRAIT DE PARFUM · 30 ML",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85",
    description:
      "Vôňa, ktorá zostáva v pamäti. Objav svoj vlastný podpis.",
    color: "#e8e0d6",
  },
  {
    id: 2,
    name: "JUST FUCKING ROSE",
    type: "EXTRAIT DE PARFUM · 30 ML",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85",
    description:
      "Výrazný charakter. Nezameniteľný dojem.",
    color: "#e9d9d8",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<(typeof products)[0] | null>(null);
  const [cart, setCart] = useState<(typeof products)[0][]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: (typeof products)[0]) => {
    setCart((current) => [...current, product]);
    setSelected(null);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((current) => current.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#191817]">
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        button { cursor: pointer; }
        .serif { font-family: Georgia, 'Times New Roman', serif; }
        .nav-link { transition: opacity .2s; }
        .nav-link:hover { opacity: .5; }
        .product-image { transition: transform .7s cubic-bezier(.2,.7,.2,1); }
        .product-card:hover .product-image { transform: scale(1.045); }
        .line-button { transition: all .25s ease; }
        .line-button:hover { background: #191817; color: white; }
        .overlay { animation: fade .25s ease; }
        @keyframes fade { from {opacity:0} to {opacity:1} }
        @keyframes rise { from {opacity:0; transform:translateY(20px)} to {opacity:1; transform:translateY(0)} }
        .rise { animation: rise .8s ease both; }
      `}</style>

      {/* NAVIGATION */}
      <div className="border-b border-black/10 px-6 py-3 text-center text-[9px] tracking-[.22em] uppercase">
        Neoficiálny dizajnový koncept e-shopu HAVAC
      </div>

      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-black/10 bg-[#f8f7f4]/95 px-6 py-5 backdrop-blur-md md:px-12">
        <a href="#" className="serif text-3xl tracking-[.17em]">
          HAVAC<span className="text-[#9b756d]">.</span>
        </a>

        <nav className="hidden items-center gap-9 text-[10px] tracking-[.2em] md:flex">
          <a href="#kolekcia" className="nav-link">KOLEKCIA</a>
          <a href="#pribeh" className="nav-link">NÁŠ PRÍBEH</a>
          <a href="#kontakt" className="nav-link">KONTAKT</a>
        </nav>

        <button
          onClick={() => setCartOpen(true)}
          className="text-[10px] tracking-[.18em]"
        >
          KOŠÍK ({cart.length})
        </button>
      </header>

      {/* HERO */}
      <section className="grid min-h-[650px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
          <p className="rise mb-7 text-[10px] tracking-[.3em] text-[#9b756d]">
            VÔNE S VLASTNÝM CHARAKTEROM
          </p>
          <h1 className="serif rise max-w-xl text-6xl leading-[1.04] tracking-[-.045em] md:text-7xl lg:text-[88px]">
            Viac než len
            <br />
            <i className="font-normal text-[#9b756d]">vôňa.</i>
          </h1>
          <p className="mt-8 max-w-sm text-sm leading-7 text-[#77716c]">
            Objav svet osobitých vôní, ktoré podčiarknu tvoju jedinečnosť.
          </p>
          <a
            href="#kolekcia"
            className="line-button mt-10 flex w-fit items-center gap-8 border border-[#24211f] px-7 py-4 text-[10px] tracking-[.2em]"
          >
            OBJAVIŤ KOLEKCIU <span>↗</span>
          </a>
        </div>

        <div className="relative min-h-[480px] overflow-hidden bg-[#e9e3dc] p-7 md:min-h-[650px] md:p-12">
          <div className="absolute inset-7 border border-white/70 md:inset-12" />
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=90"
            alt="Atmosférická fotografia parfumového flakónu"
            className="h-full min-h-[430px] w-full object-cover md:min-h-[550px]"
          />
          <div className="absolute bottom-12 left-12 bg-[#f8f7f4]/90 px-5 py-4">
            <p className="text-[9px] tracking-[.25em] text-[#9b756d]">HAVAC PERFUMES</p>
            <p className="serif mt-1 text-xl">Tvoj vlastný podpis.</p>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-black/10 px-6 py-10 md:px-16">
        <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-3 md:gap-10">
          <div>
            <p className="serif text-2xl">Osobitosť</p>
            <p className="mt-2 text-[9px] tracking-[.2em] text-[#827a74]">VÔNE S CHARAKTEROM</p>
          </div>
          <div className="border-y border-black/10 py-5 md:border-x md:border-y-0 md:py-0">
            <p className="serif text-2xl">Emócia</p>
            <p className="mt-2 text-[9px] tracking-[.2em] text-[#827a74]">POCIT, KTORÝ ZOSTÁVA</p>
          </div>
          <div>
            <p className="serif text-2xl">Identita</p>
            <p className="mt-2 text-[9px] tracking-[.2em] text-[#827a74]">VYJADRI SÁM SEBA</p>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="kolekcia" className="px-6 py-24 md:px-14 lg:px-20">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] tracking-[.3em] text-[#9b756d]">
              VYBRANÉ PRE TEBA
            </p>
            <h2 className="serif text-5xl md:text-6xl">Objav kolekciu.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#77716c]">
            Dve vône. Dva rozdielne charaktery. Ktorá bude tá tvoja?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10">
          {products.map((product, index) => (
            <article key={product.id} className="product-card group">
              <button
                onClick={() => setSelected(product)}
                className="block w-full text-left"
              >
                <div
                  className="relative flex h-[430px] items-center justify-center overflow-hidden p-7 md:h-[540px]"
                  style={{ backgroundColor: product.color }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image h-full w-full object-cover"
                  />
                  <span className="absolute left-6 top-6 text-[9px] tracking-[.2em]">
                    0{index + 1} / 02
                  </span>
                  <span className="absolute bottom-6 right-6 bg-[#f8f7f4] px-5 py-3 text-[9px] tracking-[.18em]">
                    ZOBRAZIŤ DETAIL ↗
                  </span>
                </div>
                <div className="flex items-start justify-between py-6">
                  <div>
                    <h3 className="serif text-2xl md:text-3xl">{product.name}</h3>
                    <p className="mt-2 text-[9px] tracking-[.18em] text-[#89817b]">
                      {product.type}
                    </p>
                  </div>
                  <p className="text-sm">€{product.price}</p>
                </div>
              </button>
              <button
                onClick={() => addToCart(product)}
                className="line-button w-full border border-black/30 py-4 text-[10px] tracking-[.2em]"
              >
                PRIDAŤ DO KOŠÍKA
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section id="pribeh" className="grid grid-cols-1 bg-[#eae5df] md:grid-cols-2">
        <div className="flex min-h-[430px] flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
          <p className="mb-6 text-[10px] tracking-[.3em] text-[#9b756d]">
            SVET HAVAC
          </p>
          <h2 className="serif text-5xl leading-tight md:text-6xl">
            Nie je to len
            <br />
            <i>to, čo cítiš.</i>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-[#77716c]">
            Je to dojem, ktorý zanecháš. Vôňa je súčasťou tvojej identity
            a spôsob, ako vyjadriť vlastný charakter.
          </p>
          <a
            href="#kolekcia"
            className="line-button mt-9 w-fit border border-black/40 px-7 py-4 text-[10px] tracking-[.2em]"
          >
            OBJAVIŤ VÔNE ↗
          </a>
        </div>

        <div className="min-h-[430px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=85"
            alt="Minimalistická parfumová kompozícia"
            className="h-full min-h-[430px] w-full object-cover"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center md:py-32">
        <p className="mb-5 text-[10px] tracking-[.3em] text-[#9b756d]">
          NÁJDI SVOJU VÔŇU
        </p>
        <h2 className="serif text-5xl md:text-7xl">
          Zanechaj dojem.
        </h2>
        <a
          href="#kolekcia"
          className="line-button mt-9 inline-block border border-black px-8 py-4 text-[10px] tracking-[.2em]"
        >
          PRESKÚMAŤ KOLEKCIU
        </a>
      </section>

      {/* FOOTER */}
      <footer id="kontakt" className="bg-[#211e1c] px-7 py-14 text-[#f8f7f4] md:px-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="serif text-4xl tracking-[.16em]">HAVAC.</p>
            <p className="mt-4 text-[9px] tracking-[.2em] text-white/50">
              VÔNE S VLASTNÝM CHARAKTEROM
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[10px] tracking-[.15em] text-white/70">
            <a href="#kolekcia">KOLEKCIA</a>
            <a href="#pribeh">NÁŠ PRÍBEH</a>
            <a href="#kontakt">KONTAKT</a>
          </div>
        </div>
        <div className="mt-16 border-t border-white/20 pt-6 text-[9px] leading-5 text-white/40">
          Neoficiálny dizajnový koncept vytvorený na ukážku možného vzhľadu e-shopu.
          Nie je to oficiálny obchod HAVAC. Produkty, ceny a košík sú iba ukážkové.
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      {selected && (
        <div
          className="overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative grid w-full max-w-3xl grid-cols-1 bg-[#f8f7f4] md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-3 z-10 text-2xl"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="h-[330px] w-full object-cover md:h-full"
            />
            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="text-[9px] tracking-[.2em] text-[#9b756d]">
                HAVAC PERFUMES
              </p>
              <h3 className="serif mt-5 text-3xl">{selected.name}</h3>
              <p className="mt-3 text-[9px] tracking-[.15em] text-[#827a74]">
                {selected.type}
              </p>
              <p className="mt-7 text-sm leading-7 text-[#77716c]">
                {selected.description}
              </p>
              <p className="mt-7 text-xl">€{selected.price}</p>
              <button
                onClick={() => addToCart(selected)}
                className="line-button mt-7 border border-black py-4 text-[10px] tracking-[.2em]"
              >
                PRIDAŤ DO KOŠÍKA
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {cartOpen && (
        <div
          className="overlay fixed inset-0 z-[60] bg-black/50"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#f8f7f4] p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-6">
              <h3 className="serif text-3xl">Tvoj košík</h3>
              <button onClick={() => setCartOpen(false)} className="text-2xl">×</button>
            </div>

            <div className="flex-1 overflow-auto">
              {cart.length === 0 ? (
                <p className="py-10 text-sm text-[#77716c]">
                  Tvoj košík je zatiaľ prázdny.
                </p>
              ) : (
                cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-black/10 py-5">
                    <img src={item.image} alt={item.name} className="h-24 w-20 object-cover" />
                    <div className="flex-1">
                      <p className="serif text-lg">{item.name}</p>
                      <p className="mt-2 text-sm">€{item.price}</p>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="mt-3 text-[9px] tracking-[.15em] text-[#9b756d]"
                      >
                        ODSTRÁNIŤ
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-black/10 pt-6">
              <div className="flex justify-between">
                <span className="text-sm">Spolu</span>
                <span className="serif text-2xl">€{total}</span>
              </div>
              <p className="mt-4 text-[10px] leading-5 text-[#89817b]">
                Ukážkový košík – objednávky a platby nie sú aktivované.
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="line-button mt-5 w-full border border-black py-4 text-[10px] tracking-[.2em]"
              >
                POKRAČOVAŤ V PREHLIADANÍ
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
