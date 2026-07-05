import HeroCarousel from "@/components/HeroCarousel";

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
              <a href="#">
                <ion-icon name="logo-facebook" />
              </a>
              <a href="#">
                <ion-icon name="logo-twitter" />
              </a>
              <a href="#">
                <ion-icon name="logo-instagram" />
              </a>
              <a href="#">
                <ion-icon name="logo-tiktok" />
              </a>
              <a href="#">
                <ion-icon name="logo-youtube" />
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
            <ion-icon name="bookmark-outline" />
          </div>
          <div className="rating">
            <ion-icon name="star-outline" />
            <span>{rating}</span>
          </div>
          <div className="play">
            <ion-icon name="play-circle-outline" />
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
          <ion-icon name="star-outline" />
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
          <ion-icon name="play-circle-outline" />
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
