import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Shows from '../components/Shows';
import styles from "../styles/Home.module.scss"

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  const [adminOpen, setAdminOpen] = useState(false)

  return (
    <div className={styles.container}>
      
      <header className={styles.header}>
        <h1>
          <img src="./shadpattwhtonblack.png" alt="Shadow Pattern" />
        </h1>
        <h3>Seattle WA</h3>
      </header>
      <main>
        <div className="shows">
          <Shows></Shows>
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
