
"use client";

import "./liquid.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Product = {
  name: string;
  price: number;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    name: "LOST IN TIME",
    price: 89,
    image: "/images/lost-in-time.jpg",
    description:
      "A fragrance that captures a moment beyond time. Discover the character of LOST IN TIME.",
  },
  {
    name: "JUST FUCKING ROSE",
    price: 95,
    image: "/images/just-fucking-rose.jpg",
    description:
      "An expressive rose fragrance with an unforgettable identity.",
  },
];

export default function RedExperience() {
  const introRef = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".intro-liquid",
          { scale: 0.2, opacity: 0, rotation: -35 },
          {
            scale: 1.5,
            opacity: 0.9,
            rotation: 0,
            duration: 2,
            stagger: 0.15,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".intro-bottle",
          { opacity: 0, scale: 0.55, y: 100, rotationY: -35 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationY: 0,
            duration: 2,
            ease: "power3.out",
          },
          "-=1"
        )
        .fromTo(
          ".intro-copy",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.1 },
          "-=0.8"
        )
        .to({}, { duration: 1 })
        .to(introRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => setIntroVisible(false),
        });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 55 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  function skipIntro() {
    if (!introRef.current) return;
    gsap.killTweensOf(introRef.current);
    gsap.to(introRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => setIntroVisible(false),
    });
  }

  function addToCart(product: Product) {
    setCart((previous) => [...previous, product]);
    setCartOpen(true);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="red-site">
      {/* CINEMATIC INTRO */}
      {introVisible && (
        <div className="intro-screen" ref={introRef}>
          <div className="intro-grain" />
          <div className="liquid-scene">
            <div className="intro-liquid liquid-one" />
            <div className="intro-liquid liquid-two" />
            <div className="intro-liquid liquid-three" />
            <div className="intro-liquid liquid-four" />
            <div className="liquid-glow" />
          </div>

          <img
            className="intro-bottle"
            src="/images/lost-in-time-promo.jpg"
            alt="HAVAC Lost in Time perfume"
          />

          <div className="intro-copy">
            <p>THE ART OF FRAGRANCE</p>
            <h1>HAVAC</h1>
            <span>BEYOND THE ORDINARY</span>
          </div>

          <button className="skip-button" onClick={skipIntro}>
            SKIP INTRO ↗
          </button>

          <div className="intro-index">01 — 03</div>
        </div>
      )}

      {/* NAVIGATION */}
      <header className="site-header">
        <a href="#home" className="brand-logo">HAVAC</a>

        <nav>
          <a href="#collection">COLLECTION</a>
          <a href="#story">OUR STORY</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <button className="bag-button" onClick={() => setCartOpen(true)}>
          BAG ({cart.length})
        </button>
      </header>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-background" />
        <div className="hero-content">
          <div className="hero-text reveal">
            <p className="eyebrow">A DIFFERENT KIND OF PRESENCE</p>
            <h1>
              SCENT IS
              <br />
              <em>IDENTITY.</em>
            </h1>
            <p className="hero-description">
              More than a fragrance.
              <br />
              An impression that stays.
            </p>
            <a href="#collection" className="outline-button">
              DISCOVER THE COLLECTION <span>↗</span>
            </a>
          </div>

          <div className="hero-product">
            <div className="hero-orbit" />
            <img
              src="/images/lost-in-time-promo.jpg"
              alt="HAVAC Lost in Time"
            />
            <span className="hero-product-label">LOST IN TIME · 01</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>INDEPENDENT FRAGRANCE HOUSE</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>EST. HAVAC</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="statement-section">
        <div className="statement-inner reveal">
          <p className="eyebrow">THE HAVAC PHILOSOPHY</p>
          <h2>
            Some things
            <br />
            cannot be <em>explained.</em>
          </h2>
          <p>
            They are experienced. Remembered. Felt long after the moment
            has passed.
          </p>
        </div>
        <div className="statement-decoration">H</div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="collection-section">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">CURATED FRAGRANCES</p>
            <h2>THE COLLECTION</h2>
          </div>
          <p>Discover your signature.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card reveal" key={product.name}>
              <button
                className="product-image"
                onClick={() => setSelected(product)}
                aria-label={`View ${product.name}`}
              >
                <img src={product.image} alt={product.name} />
                <span className="product-number">0{index + 1}</span>
                <span className="view-product">VIEW PRODUCT ↗</span>
              </button>

              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>EAU DE PARFUM</p>
                </div>
                <span>€{product.price}</span>
              </div>

              <button
                className="add-button"
                onClick={() => addToCart(product)}
              >
                ADD TO BAG +
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section id="story" className="story-section">
        <div className="story-image reveal">
          <img
            src="/images/just-fucking-rose-promo.jpg"
            alt="HAVAC fragrance campaign"
          />
        </div>

        <div className="story-copy reveal">
          <p className="eyebrow">BEHIND THE FRAGRANCE</p>
          <h2>
            Not made
            <br />
            to <em>follow.</em>
          </h2>
          <p>
            HAVAC is about individuality, expression and the power of
            leaving an impression. A fragrance is personal. It becomes
            part of the way the world remembers you.
          </p>
          <a href="#collection" className="text-link">
            EXPLORE OUR FRAGRANCES ↗
          </a>
        </div>
      </section>

      {/* FINAL CAMPAIGN */}
      <section className="final-section">
        <div className="final-overlay" />
        <div className="final-content reveal">
          <p className="eyebrow">YOUR NEXT SIGNATURE</p>
          <h2>
            MAKE IT
            <br />
            <em>UNFORGETTABLE.</em>
          </h2>
          <a href="#collection" className="outline-button">
            SHOP THE COLLECTION ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="site-footer">
        <div className="footer-top">
          <h2>HAVAC</h2>
          <p>THE ART OF FRAGRANCE.</p>
        </div>
        <div className="footer-bottom">
          <span>© HAVAC · ALL RIGHTS RESERVED</span>
          <a href="#home">BACK TO TOP ↑</a>
          <span>FRAGRANCE WITH IDENTITY</span>
        </div>
      </footer>

      {/* PRODUCT DETAIL MODAL */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img src={selected.image} alt={selected.name} />
            <div className="modal-copy">
              <p className="eyebrow">HAVAC FRAGRANCE</p>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <strong>€{selected.price}</strong>
              <button
                className="add-button"
                onClick={() => {
                  addToCart(selected);
                  setSelected(null);
                }}
              >
                ADD TO BAG +
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="cart-backdrop" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-heading">
              <h2>YOUR BAG ({cart.length})</h2>
              <button onClick={() => setCartOpen(false)}>✕</button>
            </div>

            {cart.length === 0 ? (
              <p className="empty-cart">Your bag is currently empty.</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div className="cart-item" key={`${item.name}-${index}`}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>€{item.price}</p>
                    </div>
                    <button
                      onClick={() =>
                        setCart((previous) =>
                          previous.filter((_, i) => i !== index)
                        )
                      }
                    >
                      REMOVE
                    </button>
                  </div>
                ))}
                <div className="cart-total">
                  <span>SUBTOTAL</span>
                  <strong>€{total}</strong>
                </div>
                <p className="cart-note">
                  Concept store demonstration. Checkout is not connected.
                </p>
              </>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}
