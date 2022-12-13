import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import Avatar from '../components/Avatar'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container">
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <Account session={session} />
        )}
      </div>
      <Avatar
        uid={''}
        url={undefined}
        size={0}
        onUpload={function (url: string): void {
          throw new Error('Function not implemented.')
        }}
      ></Avatar>
      <header>
        <h1>
          <img src="./images/shadpattwhtonblack.png" alt="Shadow Pattern" />
        </h1>
        <h3>Seattle WA</h3>
      </header>
      <main>
        <div className="shows">
          <h2>Upcoming Shows</h2>

          <h4>
            <a
              href="https://www.centralsaloon.com/shows/hillside-77-shadow-pattern-special-guests"
              target="blank"
              rel="noreferrer"
            >
              12/15/22
              <br />
              Central Saloon - Seattle
              <img
                src="./images/central-saloon.jpeg"
                alt="Alma Mater poster artwork"
              />
            </a>
          </h4>
          <h4>
            <a
              href="https://almatacoma.com/upcoming-shows/2022/12/30/alfredoghosts"
              target="blank"
            >
              12/30/22
              <br />
              Alma Mater - Tacoma
              <img
                src="./images/alma-mater-12.30.jpeg"
                alt="Alma Mater poster artwork"
              />
            </a>
          </h4>
          <h4>
            <a
              href="https://www.ticketweb.com/event/gniffke-shadow-pattern-ives-sunset-tavern-tickets/12662765?pl=sunset&REFID=clientsitewp/"
              target="blank"
            >
              1/11/23
              <br />
              Sunset Tavern - Ballard
              <img
                src="./images/sunset-tavern.jpeg"
                alt="Blue Moon poster artwork"
              />
            </a>
          </h4>
          <h4>
            <a target="_blank">
              1/18/23
              <br />
              Madame Lou's - Ballard
            </a>
          </h4>
        </div>

        <hr />
        <div className="youtube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dRG-m3mDTwA"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <h3>Debut EP "Demonstration"</h3>
        <div className="player">
          <iframe
            style={{
              border: '0',
              width: '600px',
              height: '275px',
              marginBottom: '2rem',
            }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3178066742/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/"
            seamless
          >
            <a
              target="blank"
              href="https://shadowpattern.bandcamp.com/album/demonstration"
            >
              Demonstration by Shadow Pattern
            </a>
          </iframe>
        </div>
        <img
          className="album"
          src="./images/Demonstration_Artwork.png"
          alt="album artwork for EP titled Demonstration"
        />
        <ul className="links">
          <li>
            <a
              target="blank"
              href="https://soundcloud.com/user-922331601"
              aria-label="Link to Soundcloud Page"
              title="Soundcloud"
            >
              <i className="fab fa-soundcloud"></i>
              <span className="link-text">Soundcloud</span>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://shadowpattern.bandcamp.com/?from=viewsite_dashboard"
              aria-label="Link to Bandcamp Page"
              title="Bandcamp"
            >
              <i className="fab fa-bandcamp"></i>
              <span className="link-text">Bandcamp</span>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.facebook.com/shadowpatternband/"
              aria-label="Link to Facebook Page"
              title="Facebook"
            >
              <i className="fab fa-facebook"></i>
              <span className="link-text">Facebook</span>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.instagram.com/shadowpatternband/"
              aria-label="Link to Instagram"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
              <span className="link-text">Instagram</span>
            </a>
          </li>
        </ul>
        <div className="shows past">
          <h2>Past Shows</h2>
          <h4>
            <a href="https://darrellstavern.com/show-calendar/" target="blank">
              11/19/22
              <br />
              Darrell's Tavern - Seattle
            </a>
          </h4>
          <h4>
            <a
              href="https://www.thebluemoonseattle.com/calendar"
              target="blank"
            >
              10/1/22
              <br />
              Blue Moon Tavern - Seattle
              <img
                src="./images/blue-moon-oct-1.png"
                alt="Blue Moon poster artwork"
              />
            </a>
          </h4>
          <h4>
            <a href="#" target="_blank">
              9/18/22
              <br />
              Ounces Tap House - West Seattle Bridge Re-opening Bash!
            </a>
          </h4>

          <h4>
            <a
              href="https://www.airporttavern.com/calendar/#/events"
              target="blank"
            >
              9/9/22
              <br />
              Airport Tavern • Tacoma
              <br />
              <img
                src="./images/airport-tavern.jpeg"
                alt="Airport Tavern poster artwork"
              />
            </a>
          </h4>
          <h4>
            <a href="https://darrellstavern.com/show-calendar" target="blank">
              7/29/22
              <br />
              Darrell's Tavern • Seattle
            </a>
          </h4>
          <h4>
            <a
              href="https://www.thebluemoonseattle.com/calendar"
              target="blank"
            >
              7/14/22
              <br />
              Blue Moon Tavern • Seattle
            </a>
          </h4>
          <h4>
            <a
              href="https://www.thefactoryluxe.com/events/groovy-nobody-kitty-junk-shadow-pattern-dog-pact"
              target="blank"
            >
              5/27/22
              <br />
              Factory Luxe
            </a>
          </h4>
          <img
            src="./images/factory-luxe.png"
            alt="Factory Luxe poster artwork"
          />
          <h4>
            <a href="#">
              4/27/22
              <br />
              Timbre Room
            </a>
          </h4>
          <img src="./images/Timbre_Room.jpeg" />
          <h4>
            <a href="https://www.facebook.com/events/561335671687390/">
              4/8/22
              <br />
              The Kraken Bar & Lounge
            </a>
          </h4>
          <img src="./images/kraken-lounge.jpeg" />
          <h4>
            <a href="https://www.julesmaessaloon.com/events/">
              3/12/22
              <br />
              Jules Mae's - Georgetown
            </a>
          </h4>
          <img src="./images/jules_maes-3.12.22.jpeg" />
          <h4>
            <a href="https://www.ticketweb.com/event/general-mojos-frond-shadow-pattern-alma-tickets/11663425">
              2/21/22
              <br />
              Fawcett Hall - Tacoma
            </a>
          </h4>
          <img src="./images/fawcett-hall-2-21-22.jpeg" />
          <h4>
            <a href="http://www.southgaterollerrink.com/index.html">
              2/4/22
              <br />
              Southgate Roller Rink - White Center
            </a>
          </h4>
          <img
            src="./images/Southgate_Poster.jpeg"
            alt="Drunky 2 Shoes poster artwork"
          />
          <h4>
            <a
              href="https://wl.seetickets.us/event/Dante-Marino/450764?afflky=ElCorazon"
              target="blank"
            >
              12/9/21
              <br />
              El Corazon - the Funhouse - Seattle
            </a>
          </h4>
          <img
            src="./images/funhouse-12-9-21.png"
            alt="Drunky 2 Shoes poster artwork"
          />
          <h4>
            <a
              href="https://www.twoshoebbq.net/events/live-music-shadow-pattern-catch-rabbit-mt-fog"
              target="blank"
            >
              10/21/21
              <br />
              Drunky Two Shoes - White Center
            </a>
          </h4>
          <img
            src="./images/EDITED_10-21_POSTER.jpeg"
            alt="Drunky 2 Shoes poster artwork"
          />
          <h4>
            <a
              href="https://www.facebook.com/events/591436385355874/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"
              target="blank"
            >
              9/12/21
              <br />
              Alma Mater
            </a>
          </h4>
          <img src="./images/Main-Green.jpg" alt="Alma Mater poster artwork" />
        </div>
      </main>

      <footer>
        <div>
          <a className="email" href="mailto:shadowpatternband@gmail.com">
            email
          </a>
        </div>
        <div>copyright © 2022 Shadow Pattern</div>
      </footer>
    </div>
  )
}

export default Home
