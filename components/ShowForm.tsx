import { useState, useEffect } from 'react'
import {
  useUser,
  useSupabaseClient,
} from '@supabase/auth-helpers-react'
import { Show } from './UpcomingShows'
import styles from '../styles/Show.module.scss'


export default function ShowForm({
  data,
  edit,
  updateFormView
}: {
  data: Show | undefined
  edit: boolean
  updateFormView?: () => void
}) {
  const supabase = useSupabaseClient()
  const user = useUser()

  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [showDate, setDate] = useState(data?.showDate || Date)
  const [venue, setVenue] = useState(data?.venue || '')
  const [address, setAddress] = useState(data?.address || '')
  const [link, setLink] = useState(data?.link || '')
  const [bands, setBands] = useState(data?.bands || '')
  const [posterURL, setPosterURL] = useState(data?.posterURL || '')

  async function addShow({
    showDate,
    venue,
    address,
    bands,
    posterURL,
    link,
  }: {
    showDate: string
    venue: string
    address: string
    bands: string | Array<string>
    posterURL: string
    link: string
  }) {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      const newShow = {
        showDate: new Date(showDate),
        venue,
        address,
        bands: typeof bands === 'string' ? bands.split(',') : bands,
        posterURL,
        link,
      }
      let { error } = await supabase.from('shows').insert(newShow)
      if (error) throw error
      alert('Show Added!')
    } catch (error) {
      alert('Error creating the record!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  function getFilenameFromPath(path: string) {
    // Remove the fakepath prefix, if present
    let filename = path.replace(/^C:\\fakepath\\/i, '');
    
    // Return the filename without the path or extension
    return filename;
  }

  const uploadPoster: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    try {
      setUploading(true)
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const filePath = getFilenameFromPath(event.target.value)
      setPosterURL(filePath)
      let { error: uploadError } = await supabase.storage
        .from('posters')
        .upload(filePath, file, { upsert: true })

      if (uploadError) {
        throw uploadError
      }
    } catch (error) {
      alert('Error uploading avatar!')
      console.log(error)
    } finally {
      setUploading(false)
    }
  }

  async function updateShow() {
    let bandsUpdate = typeof bands === 'string' ? bands.split(',') : bands
    const newShow = {
      showDate: new Date(showDate),
      venue,
      address,
      bands: bandsUpdate,
      posterURL,
      link,
    }

    try {
      const { data: responseData, error } = await supabase
        .from('shows')
        .update(newShow)
        .eq('id', data?.id)
        .select()

      if (error) {
        throw error
      }
      alert("Show Updated!")
      updateFormView ? updateFormView() : null
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="form-widget">
      <div className={styles.addShow}>
        <h2>{!edit ? `Add a` : `Edit `} Show</h2>
        <form id="add-show">
          <label htmlFor="date">Date</label>
          <br />
          <input
            type="date"
            name="Date"
            id="date"
            value={showDate || ''}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="venue">Venue</label>
          <br />
          <input
            type="text"
            name="venue"
            id="venue"
            value={venue || ''}
            onChange={(e) => setVenue(e.target.value)}
          />
          <br />
          <label htmlFor="address">Address</label>
          <br />
          <input
            type="address"
            name="address"
            id="address"
            value={address || ''}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <label htmlFor="bands">
            Bands (comma separated, in order of appearance)
          </label>
          <br />
          <input
            type="text"
            name="bands"
            id="bands"
            value={bands || ''}
            onChange={(e) => setBands(e.target.value)}
          />
          <br />
          <label htmlFor="poster">Poster</label>
          <br />
          <input
            type="file"
            name="poster"
            id="poster"
            onChange={(e) => uploadPoster(e)}
          />
          <br />
          <label htmlFor="show-link">Show-link</label>
          <br />
          <input
            type="text"
            name="show-link"
            id="show-link"
            value={link || ''}
            onChange={(e) => setLink(e.target.value)}
          />
          <br />
          {!edit ? (
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                addShow({ showDate, venue, address, bands, posterURL, link })
              }}
            >
              Add Show
            </button>
          ) : (
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                updateShow()
              }}
            >
              Save Edits
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
