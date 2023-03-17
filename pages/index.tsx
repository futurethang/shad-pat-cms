import { Footer, Nav } from '../components'
import UpcomingShows from '../components/UpcomingShows'
import PastShows from '../components/PastShows'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
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
  )
}

export default Home
