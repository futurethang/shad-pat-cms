import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import Avatar from '../components/Avatar'
import { useState } from 'react'
import Shows from '../components/Shows';
import styles from "../styles/Home.module.scss"

const Admin = () => {
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
      {adminOpen ? (
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
          <button onClick={()=>setAdminOpen(!adminOpen)}>Close Admin View</button>
          {!session ? (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          ) : (
            <>
              <Account session={session} />
              <Avatar
                uid={''}
                url={''}
                size={0}
                onUpload={function (url: string): void {
                  throw new Error('Function not implemented.')
                }}
              ></Avatar>
            </>
          )}
        </div>
      ) : (
        <button onClick={()=>setAdminOpen(!adminOpen)}>Open Admin View</button>
      )}

    </div>
  )
}

export default Admin
