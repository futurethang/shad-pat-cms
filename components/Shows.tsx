import React, { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Show from './Show'
import styles from '../styles/Show.module.scss'
import { parseDate, readableDate, sortableDate } from '../utils/dates'

export interface Show {
  showDate: string
  venue: string
  address: string
  bands: string
  posterURL: string
  link: string
  id: string
}

export default function Shows() {
  const supabase = useSupabaseClient()
  const [shows, setShows] = useState<Show[]>([])
  const [futureShows, setFutureShows] = useState<Show[]>([])
  const [pastShows, setPastShows] = useState<Show[]>([])

  useEffect(() => {
    getShows()
  }, [])

  async function getShows() {
    try {
      const { data, error, status } = await supabase.from('shows').select()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        data.sort((a, b) => {
          return sortableDate(a.showDate) > sortableDate(b.showDate) ? 1 : -1
        })
        const futureShows = data.filter(
          (d) => sortableDate(d.showDate) > new Date(),
        )
        const pastShows = data.filter(
          (d) => sortableDate(d.showDate) < new Date(),
        )
        setFutureShows(futureShows)
        setPastShows(pastShows.reverse())
      }
    } catch (error) {
      setShows([])
      console.error(error)
    }
  }

  const futureShowList = () => {
    return shows
  }

  function futureShowsRender() {
    return (
      <div className={styles.shows}>
        {futureShows.length > 0 ? (
          futureShows.map((show) => {
            return <Show key={show.id} show={show}></Show>
          })
        ) : (
          <h2>No Shows</h2>
        )}
      </div>
    )
  }

  function pastShowsRender() {
    return (
      <div className={styles.shows}>
        {pastShows.map((show) => {
          return <Show key={show.id} show={show}></Show>
        })}
      </div>
    )
  }

  return (
    <div>
      <h1 id="shows">UPCOMING SHOWS</h1>
      {futureShowsRender()}
      <h1 id="past-shows">PAST SHOWS</h1>
      {pastShowsRender()}
    </div>
  )
}
