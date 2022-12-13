import React, { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import styles from '../styles/Show.module.scss'

// @ts-ignore
export default function Show({ show }) {
  const supabase = useSupabaseClient()
  const [shows, setShows] = useState([])
  const [posterImgURL, setPosterImgURL] = useState('')

  useEffect(() => {
    downloadImage(show.posterURL)
    console.log('get show records')
  }, [])

  async function downloadImage(path: string) {
    console.log(path)
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

  return (
    <div className={styles.show}>
      <img className={styles.img} src={posterImgURL} alt={show.posterURL} />
      <h2>
        <a href={show.link} target="blank">
          {show.venue}
        </a>
      </h2>
      <h4>{show.address}</h4>
      <h3 className={styles.date}>{show.showDate}</h3>
      <h3>{show.bands}</h3>
    </div>
  )
}
