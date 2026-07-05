import HeroCarousel from "@/components/HeroCarousel";
import { Bookmark, Star, PlayCircle } from "lucide-react";

function BrandIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="cf-ic"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function FacebookIcon() {
  return (
    <BrandIcon>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </BrandIcon>
  );
}

function TwitterIcon() {
  return (
    <BrandIcon>
      <path d="M22 5.9c-.7.3-1.5.5-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.3a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1z" />
    </BrandIcon>
  );
}

function InstagramIcon() {
  return (
    <BrandIcon>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4.1.6c-.8.3-1.4.7-2.1 1.4C1.3 2.7.9 3.3.6 4.1.3 4.8.1 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c0 1.3.2 2.2.5 2.9.3.8.7 1.4 1.4 2.1.7.7 1.3 1.1 2.1 1.4.7.3 1.6.5 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3 0 2.2-.2 2.9-.5.8-.3 1.4-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.7.5-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c0-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.4-1.4-2.1-.7-.7-1.3-1.1-2.1-1.4-.7-.3-1.6-.5-2.9-.5C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.4 1.4 0 1 0 0-2.9 1.4 1.4 0 0 0 0 2.9z" />
    </BrandIcon>
  );
}

function TikTokIcon() {
  return (
    <BrandIcon>
      <path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.4c-1.2.1-2.3-.2-3.5-.8v5.9c0 3.4-2.5 5.9-5.8 5.9A5.7 5.7 0 0 1 5 14.5c0-3.2 2.9-5.6 6.2-5.1v2.6c-.4-.1-.9-.2-1.3-.2-1.5 0-2.6 1.1-2.6 2.7 0 1.5 1.1 2.7 2.6 2.7 1.6 0 2.7-1.2 2.7-2.9V3h3.9z" />
    </BrandIcon>
  );
}

function YoutubeIcon() {
  return (
    <BrandIcon>
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 0 0 1 7.5C.5 9.4.5 12 .5 12s0 2.6.5 4.5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.5.5-4.5s0-2.6-.5-4.5zM9.8 15.5V8.5l5.7 3.5-5.7 3.5z" />
    </BrandIcon>
  );
}

export default function Home() {
  return (
    <div className="container">
      <main>
        <HeroCarousel />

        <section className="movies">
          <div className="movies-layout">
            <div className="movies-main">
              <div className="filter-bar">
                <div className="filter-dropdowns">
                  <select name="genre" className="genre">
                    <option value="all genres">All genres</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="animal">Animal</option>
                    <option value="animation">Animation</option>
                    <option value="biography">Biography</option>
                  </select>
                  <select name="year" className="year">
                    <option value="all years">All the years</option>
                    <option value="2023">2023</option>
                    <option value="2021-2022">2021-2022</option>
                    <option value="2010-2020">2010-2020</option>
                    <option value="2000-2009">2000-2009</option>
                    <option value="1980-1999">1980-1999</option>
                  </select>
                </div>
                <div className="filter-radios">
                  <input type="radio" name="grade" id="featured" defaultChecked />
                  <label htmlFor="featured">Featured</label>
                  <input type="radio" name="grade" id="popular" />
                  <label htmlFor="popular">Popular</label>
                  <input type="radio" name="grade" id="newest" />
                  <label htmlFor="newest">Newest</label>
                  <div className="checked-radio-bg" />
                </div>
              </div>

              <div className="movies-grid">
                <MovieCard
                  img="/assets/images/movies/red-notice.jpg"
                  title="Red Notice"
                  rating="6.4"
                  genre="Action/Comedy"
                  year="2022"
                />
                <MovieCard
                  img="/assets/images/movies/spider-men.jpg"
                  title="Spider-Man: Homecoming"
                  rating="7.4"
                  genre="Action/Adventure"
                  year="2023"
                />
                <MovieCard
                  img="/assets/images/movies/matrix.jpg"
                  title="The Matrix Resurrections"
                  rating="N/A"
                  genre="Sci-fi/Action"
                  year="2023"
                />
                <MovieCard
                  img="/assets/images/movies/eternals.jpg"
                  title="Eternals"
                  rating="6.8"
                  genre="Adventure/Action"
                  year="2022"
                />
                <MovieCard
                  img="/assets/images/movies/dune.jpg"
                  title="Dune"
                  rating="8.2"
                  genre="Sci-fi/Adventure"
                  year="2023"
                />
                <MovieCard
                  img="/assets/images/movies/1917.jpg"
                  title="1917"
                  rating="8.3"
                  genre="War/Drama"
                  year="2019"
                />
                <MovieCard
                  img="/assets/images/movies/shang-chi.jpg"
                  title="Shang-Chi and The Legend of The Ten Rings"
                  rating="7.6"
                  genre="Action/Fantasy"
                  year="2021"
                />
                <MovieCard
                  img="/assets/images/movies/casino-royale.jpg"
                  title="Casino Royale"
                  rating="8.0"
                  genre="Action/Adventure"
                  year="2006"
                />
                <MovieCard
                  img="/assets/images/movies/dark-knight.jpg"
                  title="The Dark Knight"
                  rating="9.0"
                  genre="Action/Adventure"
                  year="2008"
                />
                <MovieCard
                  img="/assets/images/movies/panther.jpg"
                  title="Black Panther"
                  rating="7.3"
                  genre="Action/Adventure"
                  year="2018"
                />
                <MovieCard
                  img="/assets/images/movies/venom.jpg"
                  title="Venom"
                  rating="6.7"
                  genre="Action/Adventure"
                  year="2018"
                />
                <MovieCard
                  img="/assets/images/movies/LOTR.jpg"
                  title="Lord Of The Rings: Return Of The King"
                  rating="8.9"
                  genre="Fantasy/Adventure"
                  year="2003"
                />
                <MovieCard
                  img="/assets/images/movies/saving-private-ryan.jpg"
                  title="Saving Private Ryan"
                  rating="8.6"
                  genre="War/Action"
                  year="1998"
                />
                <MovieCard
                  img="/assets/images/movies/interstaller.jpg"
                  title="Interstellar"
                  rating="8.6"
                  genre="Sci-fi/Adventure"
                  year="2014"
                />
                <MovieCard
                  img="/assets/images/movies/gladiator.jpg"
                  title="Gladiator"
                  rating="8.5"
                  genre="Action/Adventure"
                  year="2000"
                />
                <MovieCard
                  img="/assets/images/movies/endgame.jpg"
                  title="Avengers: Endgame"
                  rating="8.4"
                  genre="Action/Sci-fi"
                  year="2019"
                />
                <MovieCard
                  img="/assets/images/movies/ww84.jpg"
                  title="Wonder Woman 1984"
                  rating="5.4"
                  genre="Action/Adventure"
                  year="2020"
                />
                <MovieCard
                  img="/assets/images/movies/captain-marvel.jpg"
                  title="Captain Marvel"
                  rating="6.8"
                  genre="Action/Sci-fi"
                  year="2019"
                />
              </div>

              <button className="load-more">LOAD MORE</button>
            </div>

            <aside className="movies-sidebar">
              <h3 className="sidebar-heading">Top Viewed</h3>
              <div className="sidebar-list">
                <SidebarCard
                  rank={1}
                  img="/assets/images/movies/dark-knight.jpg"
                  title="The Dark Knight"
                  rating="9.0"
                  year="2008"
                />
                <SidebarCard
                  rank={2}
                  img="/assets/images/movies/LOTR.jpg"
                  title="Lord Of The Rings: ROTK"
                  rating="8.9"
                  year="2003"
                />
                <SidebarCard
                  rank={3}
                  img="/assets/images/movies/saving-private-ryan.jpg"
                  title="Saving Private Ryan"
                  rating="8.6"
                  year="1998"
                />
                <SidebarCard
                  rank={4}
                  img="/assets/images/movies/dune.jpg"
                  title="Dune"
                  rating="8.2"
                  year="2023"
                />
                <SidebarCard
                  rank={5}
                  img="/assets/images/movies/1917.jpg"
                  title="1917"
                  rating="8.3"
                  year="2019"
                />
                <SidebarCard
                  rank={6}
                  img="/assets/images/movies/casino-royale.jpg"
                  title="Casino Royale"
                  rating="8.0"
                  year="2006"
                />
              </div>
            </aside>
          </div>
        </section>

        <section className="category" id="category">
          <h2 className="section-heading">Category</h2>
          <div className="category-grid">
            <CategoryCard img="/assets/images/action.jpg" name="Action" total="100" />
            <CategoryCard img="/assets/images/comedy.jpg" name="Comedy" total="50" />
            <CategoryCard img="/assets/images/thriller.webp" name="Thriller" total="20" />
            <CategoryCard img="/assets/images/horror.jpg" name="Horror" total="80" />
            <CategoryCard img="/assets/images/adventure.jpg" name="Adventure" total="100" />
            <CategoryCard img="/assets/images/animated.jpg" name="Animated" total="50" />
            <CategoryCard img="/assets/images/crime.jpg" name="Crime" total="20" />
            <CategoryCard img="/assets/images/sci-fi.jpg" name="SCI-FI" total="80" />
          </div>
        </section>

        <section className="live" id="live">
          <h2 className="section-heading">Live Tv Shows</h2>
          <div className="live-grid">
            <LiveCard
              img="/assets/images/planet.jpg"
              avatar="/assets/images/bbcamerica.jpg"
              title="Planet Earth II"
              subtitle="Season 1 - Islands"
              viewers="305K viewers"
            />
            <LiveCard
              img="/assets/images/got.jpg"
              avatar="/assets/images/HBO-Logo-square.jpg"
              title="Game of Thrones"
              subtitle="Season 5 - Mother's Mercy"
              viewers="1.7M viewers"
            />
            <LiveCard
              img="/assets/images/vikins.jpg"
              avatar="/assets/images/HBO-Logo-square.jpg"
              title="Vikings"
              subtitle="Season 4 - What Might Have Been"
              viewers="468K viewers"
            />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/assets/images/logo.png" alt="" className="footer-logo" />
            <p className="slogan">
              Movies &amp; TV Shows, Online cinema,
              OTP.
            </p>
            <div className="social-link">
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="#" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <ul>
              <h4 className="link-heading">CineFlix</h4>
              <li className="link-item"><a href="#">About us</a></li>
              <li className="link-item"><a href="#">My profile</a></li>
              <li className="link-item"><a href="#">Pricing plans</a></li>
              <li className="link-item"><a href="#">Contacts</a></li>
            </ul>
            <ul>
              <h4 className="link-heading">Browse</h4>
              <li className="link-item"><a href="#">Live Tv</a></li>
              <li className="link-item"><a href="#">Live News</a></li>
              <li className="link-item"><a href="#">Live Sports</a></li>
              <li className="link-item"><a href="#">Streaming Library</a></li>
            </ul>
            <ul>
              <li className="link-item"><a href="#">TV Shows</a></li>
              <li className="link-item"><a href="#">Movies</a></li>
              <li className="link-item"><a href="#">Kids</a></li>
              <li className="link-item"><a href="#">Collections</a></li>
            </ul>
            <ul>
              <h4 className="link-heading">Help</h4>
              <li className="link-item"><a href="#">Account &amp; Billing</a></li>
              <li className="link-item"><a href="#">Plans &amp; Pricing</a></li>
              <li className="link-item"><a href="#">Supported devices</a></li>
              <li className="link-item"><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="copyright">
            <p>&copy; copyright 2023 CineFlix Made By @sadhin555</p>
          </div>
          <div className="wrapper">
            <a href="#">Privacy policy</a>
            <a href="#">Terms and conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MovieCard({
  img,
  title,
  rating,
  genre,
  year,
}: {
  img: string;
  title: string;
  rating: string;
  genre: string;
  year: string;
}) {
  return (
    <div className="movie-card">
      <div className="card-head">
        <img src={img} alt="" className="card-img" />
        <div className="card-overlay">
          <div className="bookmark">
            <Bookmark className="cf-ic" size="1em" />
          </div>
          <div className="rating">
            <Star className="cf-ic" size="1em" />
            <span>{rating}</span>
          </div>
          <div className="play">
            <PlayCircle className="cf-ic" size="1em" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-info">
          <span className="genre">{genre}</span>
          <span className="year">{year}</span>
        </div>
      </div>
    </div>
  );
}

function SidebarCard({
  rank,
  img,
  title,
  rating,
  year,
}: {
  rank: number;
  img: string;
  title: string;
  rating: string;
  year: string;
}) {
  return (
    <div className="sidebar-card">
      <div className="sidebar-rank">{rank}</div>
      <img src={img} alt="" className="sidebar-img" />
      <div className="sidebar-info">
        <h4 className="sidebar-title">{title}</h4>
        <div className="sidebar-meta">
          <Star className="cf-ic" size="1em" />
          <span>{rating}</span>
          <span className="sidebar-dot">/</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({
  img,
  name,
  total,
}: {
  img: string;
  name: string;
  total: string;
}) {
  return (
    <div className="category-card">
      <img src={img} alt="" className="card-img" />
      <div className="name">{name}</div>
      <div className="total">{total}</div>
    </div>
  );
}

function LiveCard({
  img,
  avatar,
  title,
  subtitle,
  viewers,
}: {
  img: string;
  avatar: string;
  title: string;
  subtitle: string;
  viewers: string;
}) {
  return (
    <div className="live-card">
      <div className="card-head">
        <img src={img} alt="" className="card-img" />
        <div className="live-badge">LIVE</div>
        <div className="total-viewers">{viewers}</div>
        <div className="play">
          <PlayCircle className="cf-ic" size="1em" />
        </div>
      </div>
      <div className="card-body">
        <img src={avatar} alt="" className="avatar" />
        <h3 className="card-title">
          {title} <br /> {subtitle}
        </h3>
      </div>
    </div>
  );
}
