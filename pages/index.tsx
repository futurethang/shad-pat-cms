import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { Footer, Nav } from '../components'
import Shows from '../components/Shows'
import styles from '../styles/Home.module.scss'
import Socials from '../components/Socials';

const Home = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <header className={styles.header}>
        <h1>
          <img src="./shadpattwhtonblack.png" alt="Shadow Pattern" />
        </h1>
        <h3>Seattle Rock & Roll Band</h3>
      </header>
      <Socials />
      <main>
        <div className="shows">
          <Shows></Shows>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
