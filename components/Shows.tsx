import React, { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Show from './Show'
import styles from '../styles/Show.module.scss'
import { parseDate } from '../utils/dates';

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
          return parseDate(a.showDate) > parseDate(b.showDate) ? 1 : -1
        })

        setShows(data)
      }
    } catch (error) {
      setShows([])
      console.error(error)
    }
  }

  // const parseDate = (date: string) => {
  //   const dateNums = date.split('-')
  //   const parsed = dateNums.map((i) => parseInt(i))
  //   parsed[1]--
  //   return parsed
  // }

  function futureShows() {
    return (
      <div className={styles.shows}>
        {shows.length > 0 ? (
          shows.map((show) => {
            const [y, m, d] = parseDate(show.showDate)
            console.log(
              show.venue,
              show.showDate,
              new Date(y, m, d),
              new Date(),
            )
            return new Date(y, m, d) >= new Date() ? (
              <Show key={show.id} show={show}></Show>
            ) : null
          })
        ) : (
          <h2>No Shows</h2>
        )}
      </div>
    )
  }

  function pastShows() {
    return (
      <div className={styles.shows}>
        {shows.map((show) => {
          const [y, m, d] = parseDate(show.showDate)
          console.log(new Date(y, m, d), new Date())
          return new Date(y, m, d) < new Date() ? (
            <Show key={show.id} show={show}></Show>
          ) : null
        })}
      </div>
    )
  }

  return (
    <div>
      <h1>UPCOMING SHOWS</h1>
      {futureShows()}
      <h1>PAST SHOWS</h1>
      {pastShows()}
    </div>
  )
}
