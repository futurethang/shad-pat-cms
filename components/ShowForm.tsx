import { useState, useEffect } from 'react'
import Avatar from './Avatar'
import {
  useUser,
  useSupabaseClient,
  Session,
} from '@supabase/auth-helpers-react'
import { Show } from './Shows'
// type Profiles = Database['public']['Tables']['profiles']['Row']

export default function ShowForm({
  session,
  edit,
  data,
}: {
  session: Session
  edit: boolean
  data: Show | undefined
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
    bands: string
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
        bands: bands.split(','),
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

  const uploadPoster: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    try {
      setUploading(true)
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${showDate}-${venue}.${fileExt}`
      const filePath = `${fileName}`
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
    const newShow = {
      showDate: new Date(showDate),
      venue,
      address,
      bands: bands.split(','),
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
      console.log(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="form-widget">
      <div className="add-show">
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
              Edit Show
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
