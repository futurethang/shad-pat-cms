import React from 'react'
import Nav from './Nav'
import styles from '../styles/Home.module.scss'
import SlideShow from './Slideshow'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <h1>
          <video playsInline autoPlay muted loop >
            <source src="./sp-logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <img src="./sp.gif" width='336' height='280' alt="Shadow Pattern" /> */}
        </h1>
        <SlideShow />
      </div>
      <Nav />
    </header>
  )
}
