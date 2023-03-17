import React, { useEffect, useState } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
// import styles from '../styles/Show.module.scss'
import ShowForm from './ShowForm'
import { Show } from './UpcomingShows'
import { readableDate } from '../utils/dates'

export default function ShowInstance({ show }: { show: Show }) {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [posterImgURL, setPosterImgURL] = useState('')
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  useEffect(() => {
    downloadImage(show.posterURL)
  }, [])

  async function downloadImage(path: string) {
    try {
      if (!path) return

      const { data, error } = await supabase.storage
        .from('posters')
        .download(path)

      if (error) {
        throw error
      }

      const url = URL.createObjectURL(data)
      setPosterImgURL(url)
    } catch (error) {
      console.log('Error downloading image: ', error)
    }
  }

  async function updateShow() {
    setShowUpdateForm(!showUpdateForm)
  }

  return (
    <div className='show'>
      <img className='img' src={posterImgURL} alt={show.posterURL} />
      <h3 className='date'>{readableDate(show.showDate)}</h3>
      <h2>
        <a href={show.link} target="blank">
          {show.venue}
        </a>
      </h2>
      <h4>{show.address}</h4>
      <h3>{show.bands}</h3>
      {session ? (
        <button onClick={() => updateShow()}>
          {showUpdateForm ? 'close' : 'edit'}
        </button>
      ) : null}
      {/* todo: the form needs to appear with the current date already inside it */}
      {showUpdateForm ? (
        <ShowForm session={session!} edit data={show}></ShowForm>
      ) : null}
    </div>
  )
}
