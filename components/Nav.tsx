import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faFacebook, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

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
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://shadowpattern.bandcamp.com/?from=viewsite_dashboard"
              aria-label="Link to Bandcamp Page"
              title="Bandcamp"
            >
              <FontAwesomeIcon icon={faBandcamp} size='2x' />
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://soundcloud.com/user-922331601"
              aria-label="Link to Soundcloud Page"
              title="Soundcloud"
            >
              <FontAwesomeIcon icon={faSoundcloud} size='2x' />
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.facebook.com/shadowpatternband/"
              aria-label="Link to Facebook Page"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
          </li>
        </ul>
      </section>
    </nav>
  )
}
