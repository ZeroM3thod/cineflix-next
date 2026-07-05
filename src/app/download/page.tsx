"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Download,
  Play,
  Bookmark,
  Share2,
  Clock,
  Calendar,
  ChevronLeft,
} from "lucide-react";

type Episode = {
  number: number;
  title: string;
  duration: string;
  thumb: string;
};

type Season = {
  number: number;
  year: string;
  episodes: Episode[];
};

const MOVIE = {
  title: "Game of Thrones",
  backdrop: "/assets/images/movies/dark-knight.jpg",
  poster: "/assets/images/movies/LOTR.jpg",
  rating: "9.3",
  year: "2011 - 2019",
  genre: ["Action", "Adventure", "Drama", "Fantasy"],
  duration: "57m / episode",
  quality: "1080p BluRay",
  language: "English",
  size: "480MB - 2.1GB",
  description:
    "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia. Amid the war for the Iron Throne, a forgotten race of ice creatures threatens to end all life in the realm.",
};

const QUALITIES = ["480p", "720p", "1080p"];

const SEASONS: Season[] = [
  {
    number: 1,
    year: "2011",
    episodes: [
      { number: 1, title: "Winter Is Coming", duration: "62m", thumb: "/assets/images/movies/dune.jpg" },
      { number: 2, title: "The Kingsroad", duration: "56m", thumb: "/assets/images/movies/1917.jpg" },
      { number: 3, title: "Lord Snow", duration: "58m", thumb: "/assets/images/movies/gladiator.jpg" },
      { number: 4, title: "Cripples, Bastards, and Broken Things", duration: "56m", thumb: "/assets/images/movies/venom.jpg" },
      { number: 5, title: "The Wolf and the Lion", duration: "55m", thumb: "/assets/images/movies/eternals.jpg" },
      { number: 6, title: "A Golden Crown", duration: "53m", thumb: "/assets/images/movies/panther.jpg" },
    ],
  },
  {
    number: 2,
    year: "2012",
    episodes: [
      { number: 1, title: "The North Remembers", duration: "53m", thumb: "/assets/images/movies/interstaller.jpg" },
      { number: 2, title: "The Night Lands", duration: "54m", thumb: "/assets/images/movies/matrix.jpg" },
      { number: 3, title: "What Is Dead May Never Die", duration: "53m", thumb: "/assets/images/movies/endgame.jpg" },
      { number: 4, title: "Garden of Bones", duration: "51m", thumb: "/assets/images/movies/casino-royale.jpg" },
      { number: 5, title: "The Ghost of Harrenhal", duration: "55m", thumb: "/assets/images/movies/shang-chi.jpg" },
    ],
  },
  {
    number: 3,
    year: "2013",
    episodes: [
      { number: 1, title: "Valar Dohaeris", duration: "55m", thumb: "/assets/images/movies/spider-men.jpg" },
      { number: 2, title: "Dark Wings, Dark Words", duration: "57m", thumb: "/assets/images/movies/red-notice.jpg" },
      { number: 3, title: "Walk of Punishment", duration: "56m", thumb: "/assets/images/movies/ww84.jpg" },
      { number: 4, title: "And Now His Watch Is Ended", duration: "53m", thumb: "/assets/images/movies/captain-marvel.jpg" },
    ],
  },
  {
    number: 4,
    year: "2014",
    episodes: [
      { number: 1, title: "Two Swords", duration: "58m", thumb: "/assets/images/movies/saving-private-ryan.jpg" },
      { number: 2, title: "The Lion and the Rose", duration: "53m", thumb: "/assets/images/movies/dark-knight.jpg" },
      { number: 3, title: "Breaker of Chains", duration: "57m", thumb: "/assets/images/movies/LOTR.jpg" },
    ],
  },
];

export default function DownloadPage() {
  const [activeSeason, setActiveSeason] = useState(1);

  const season = SEASONS.find((s) => s.number === activeSeason) ?? SEASONS[0];

  return (
    <div className="container">
      <main className="dl">
        {/* Backdrop hero */}
        <section className="dl-hero">
          <div className="dl-hero-bg">
            <img src={MOVIE.backdrop || "/placeholder.svg"} alt="" />
            <div className="dl-hero-scrim" />
          </div>

          <div className="dl-hero-inner">
            <Link href="/" className="dl-back">
              <ChevronLeft size={18} />
              <span>Back to Home</span>
            </Link>

            <div className="dl-hero-content">
              <div className="dl-poster">
                <img src={MOVIE.poster || "/placeholder.svg"} alt={MOVIE.title} />
              </div>

              <div className="dl-info">
                <div className="dl-badges">
                  <span className="dl-badge dl-badge-rating">
                    <Star size={14} />
                    {MOVIE.rating}
                  </span>
                  <span className="dl-badge">{MOVIE.quality}</span>
                  <span className="dl-badge">{MOVIE.language}</span>
                </div>

                <h1 className="dl-title">{MOVIE.title}</h1>

                <ul className="dl-meta">
                  <li>
                    <Calendar size={15} />
                    {MOVIE.year}
                  </li>
                  <li>
                    <Clock size={15} />
                    {MOVIE.duration}
                  </li>
                  <li>
                    <Download size={15} />
                    {MOVIE.size}
                  </li>
                </ul>

                <div className="dl-genres">
                  {MOVIE.genre.map((g) => (
                    <span key={g} className="dl-genre">
                      {g}
                    </span>
                  ))}
                </div>

                <p className="dl-desc">{MOVIE.description}</p>

                <div className="dl-actions">
                  <button className="dl-btn dl-btn-primary">
                    <Play size={18} />
                    Watch Trailer
                  </button>
                  <button className="dl-btn dl-btn-ghost">
                    <Bookmark size={18} />
                    Watchlist
                  </button>
                  <button className="dl-btn dl-btn-ghost dl-btn-icon" aria-label="Share">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Season + Episodes */}
        <section className="dl-episodes">
          <div className="dl-section-head">
            <h2 className="dl-section-title">Download Episodes</h2>
            <span className="dl-episode-count">
              {season.episodes.length} episodes
            </span>
          </div>

          {/* Season buttons */}
          <div className="dl-seasons" role="tablist" aria-label="Seasons">
            {SEASONS.map((s) => (
              <button
                key={s.number}
                role="tab"
                aria-selected={s.number === activeSeason}
                className={`dl-season-btn ${
                  s.number === activeSeason ? "active" : ""
                }`}
                onClick={() => setActiveSeason(s.number)}
              >
                Season {s.number}
                <span className="dl-season-year">{s.year}</span>
              </button>
            ))}
          </div>

          {/* Episode list */}
          <div className="dl-episode-list">
            {season.episodes.map((ep) => (
              <article className="dl-episode" key={ep.number}>
                <div className="dl-episode-thumb">
                  <img src={ep.thumb || "/placeholder.svg"} alt="" />
                  <span className="dl-episode-num">E{ep.number}</span>
                  <div className="dl-episode-play">
                    <Play size={22} />
                  </div>
                </div>

                <div className="dl-episode-body">
                  <div className="dl-episode-headline">
                    <h3 className="dl-episode-title">
                      <span className="dl-episode-tag">
                        S{season.number}:E{ep.number}
                      </span>
                      {ep.title}
                    </h3>
                    <span className="dl-episode-dur">
                      <Clock size={13} />
                      {ep.duration}
                    </span>
                  </div>

                  <div className="dl-quality-row">
                    {QUALITIES.map((q) => (
                      <button className="dl-quality-btn" key={q}>
                        <Download size={15} />
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
