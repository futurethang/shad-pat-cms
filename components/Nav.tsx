import React from 'react'
import styles from '../styles/Socials.module.scss'

export default function Nav() {
  return (
    <nav>
      <section id="socials" className={styles.social}>
        <ul className="links">
          <li>
            <a
              target="blank"
              href="https://www.instagram.com/shadowpatternband/"
              aria-label="Link to Instagram"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
              <span className="link-text">Instagram</span>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://shadowpattern.bandcamp.com/?from=viewsite_dashboard"
              aria-label="Link to Bandcamp Page"
              title="Bandcamp"
            >
              <i className="fab fa-bandcamp"></i>
              <span className="link-text">Bandcamp</span>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://soundcloud.com/user-922331601"
              aria-label="Link to Soundcloud Page"
              title="Soundcloud"
            >
              <i className="fab fa-soundcloud"></i>
              <span className="link-text">Soundcloud</span>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.facebook.com/shadowpatternband/"
              aria-label="Link to Facebook Page"
              title="Facebook"
            >
              <i className="fab fa-facebook"></i>
              <span className="link-text">Facebook</span>
            </a>
          </li>
        </ul>
      </section>
    </nav>
  )
}
