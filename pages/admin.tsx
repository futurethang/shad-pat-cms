import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import { useState } from 'react'
import UpcomingShows from '../components/UpcomingShows'
import PastShows from '../components/PastShows'

const Admin = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  const [adminOpen, setAdminOpen] = useState(false)

  return (
    <div className='container'>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <>
          <Account session={session} />

        </>
      )}
      <main>
        <div className="shows">
          <UpcomingShows />
          <PastShows />
        </div>
      </main>
    </div>
  )
}

export default Admin
