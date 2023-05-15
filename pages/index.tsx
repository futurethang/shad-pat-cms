import { Footer, Nav } from '../components'
import UpcomingShows from '../components/UpcomingShows'
import PastShows from '../components/PastShows'
import Header from '../components/Header'
import { DefaultSeo, NextSeo } from 'next-seo'
import { GoogleAnalytics } from 'nextjs-google-analytics'

const SEO = {
  title: 'Shadow Pattern - Seattle Rock and Roll Band',
  description: 'Shadow Pattern is a five piece rock band from Seattle, WA. We play original music in a psychedelic, blues, and surf rock style.',
  openGraph: {
    type: 'music.band',
    url: 'https://shadowpattern.com/',
    title: 'Shadow Pattern - Seattle Rock and Roll Band',
    description: 'Shadow Pattern is a five piece rock band from Seattle, WA. We play original music in a psychedelic, blues, and surf rock style.',
    site_name: 'Shadow Pattern',
    locale: 'en_US',
    music: [
      {
        releaseDate: '2021-04-01',
        album: 'Demonstration',
        creator: 'Shadow Pattern',
        song: 'Night Stroll',
        track: 1,
        disc: 1,
        duration: 120,
      },
    ],
    see_also: [
      {
        url: 'https://www.instagram.com/shadowpatternband/',
      },
      {
        url: 'https://www.facebook.com/shadowpatternband/',
      },
    ],
  },
};

const Home = () => {
  return (
    <div>
      <GoogleAnalytics trackPageViews />
      <DefaultSeo
        {...SEO}
      />
      <div className="parallax-container">
        <div className="parallax-background">
          <img src="/sidewall-bg.webp" alt="Background Image" />
        </div>
        <div className="content">
          <Header />
          <main>
            <section className="shows">
              <UpcomingShows />
            </section>

            <section>
              <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3178066742/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" seamless></iframe>
            </section>

            <section className="shows">
              <PastShows />
            </section>
          </main>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Home
