"use client";

import { useEffect, useRef, useCallback } from "react";

const K_IMG = (seed: string, w = 1600, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const K_ICONS = {
  play: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  ),
  plus: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  heart: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
  star: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

const kHeroSlides = [
  {
    title: "John Wick: Chapter 3 - Parabellum",
    badges: ["Movie"],
    rating: 8.4,
    episodes: 1,
    genres: ["Action", "Thriller"],
    studio: "Lionsgate",
    year: 2019,
    duration: "2h 11m",
    desc: "With a $14 million price on his head, John Wick is forced to fight his way through the underworld allies and enemies he has made over the years.",
    video: "/assets/videos/vi1.mp4",
    img: K_IMG("john-wick-3", 1600, 900),
    live: false,
  },
  {
    title: "Solo Leveling: Arise from Shadow",
    badges: ["TV", "Airing"],
    rating: 9.2,
    episodes: 24,
    genres: ["Action", "Fantasy"],
    studio: "A-1 Pictures",
    year: 2026,
    duration: "24m",
    desc: "Sung Jin-Woo, the weakest hunter alive, awakens a power that lets him grow endlessly stronger \u2014 and rewrite the rules of every dungeon he enters.",
    video: "/assets/videos/vi2.mp4",
    img: K_IMG("slsw", 1600, 900),
    live: true,
  },
  {
    title: "Red Notice",
    badges: ["Movie"],
    rating: 6.4,
    episodes: 1,
    genres: ["Action", "Comedy"],
    studio: "Netflix",
    year: 2021,
    duration: "1h 58m",
    desc: "An FBI profiler pursuing the world\u2019s most wanted art thief becomes his reluctant partner in crime to catch an elusive con artist.",
    video: "/assets/videos/vi3.mp4",
    img: K_IMG("red-notice-hero", 1600, 900),
    live: false,
  },
];

export default function HeroCarousel() {
  const heroIdx = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goKHero = useCallback((i: number) => {
    heroIdx.current =
      (i + kHeroSlides.length) % kHeroSlides.length;

    document.querySelectorAll(".k-hero-slide").forEach((el) => {
      const isActive =
        parseInt(el.getAttribute("data-i")!) === heroIdx.current;
      el.classList.toggle("active", isActive);
      const vid = el.querySelector("video") as HTMLVideoElement | null;
      if (vid) {
        if (isActive) {
          vid.currentTime = 0;
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
    document.querySelectorAll(".k-hero-dot").forEach((el, idx) => {
      el.classList.toggle("active", idx === heroIdx.current);
      if (idx === heroIdx.current) {
        const fill = el.querySelector(".fill") as HTMLElement;
        if (fill) {
          fill.style.animation = "none";
          void fill.offsetWidth;
          fill.style.animation = "";
        }
      }
    });
    startKHeroAuto();
  }, []);

  const startKHeroAuto = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => goKHero(heroIdx.current + 1),
      8000
    );
  }, [goKHero]);

  useEffect(() => {
    startKHeroAuto();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startKHeroAuto]);

  return (
    <section className="banner">
      <section className="k-hero" id="kHero" aria-label="Featured title">
        <div>
          {kHeroSlides.map((s, i) => (
            <div
              key={i}
              className={`k-hero-slide${i === 0 ? " active" : ""}`}
              data-i={i}
            >
              {s.video ? (
                <>
                  <video
                    className="k-hero-video"
                    src={s.video}
                    poster={s.img}
                    muted
                    loop
                    playsInline
                    {...(i === 0 ? { autoPlay: true } : {})}
                  />
                  <div className="k-hero-grain" />
                </>
              ) : (
                <div
                  className="k-hero-bg"
                  style={{ backgroundImage: `url('${s.img}')` }}
                />
              )}
              <div className="k-hero-scrim" />
              <div className="k-hero-inner">
                <div className="k-hero-content">
                  <h1 className="k-hero-title">{s.title}</h1>
                  <div className="k-hero-meta">
                    <span className="rating">
                      {K_ICONS.star} {s.rating}
                    </span>
                    <span className="dot">/</span>
                    <span>{s.duration}</span>
                    <span className="dot">/</span>
                    <span>{s.genres.join(", ")}</span>
                    <span className="dot">/</span>
                    <span>{s.studio}</span>
                    <span className="dot">/</span>
                    <span>{s.year}</span>
                  </div>
                  <p className="k-hero-desc">{s.desc}</p>
                  <div className="k-hero-actions">
                    <a href="#" className="k-btn-hero-primary">
                      {K_ICONS.play} Watch Now
                    </a>
                    <button
                      className="k-btn-hero-secondary"
                      aria-label="Add to watchlist"
                    >
                      {K_ICONS.plus}
                    </button>
                    <button
                      className="k-btn-hero-secondary"
                      aria-label="Like"
                    >
                      {K_ICONS.heart}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="k-hero-nav-arrows">
          <button
            className="k-hero-arrow"
            id="kHeroPrev"
            aria-label="Previous slide"
            onClick={() => goKHero(heroIdx.current - 1)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="k-hero-arrow"
            id="kHeroNext"
            aria-label="Next slide"
            onClick={() => goKHero(heroIdx.current + 1)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div className="k-hero-indicators">
          {kHeroSlides.map((_, i) => (
            <div
              key={i}
              className={`k-hero-dot${i === 0 ? " active" : ""}`}
              data-i={i}
              onClick={() => goKHero(i)}
            >
              <div className="fill" />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
