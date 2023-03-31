import React from 'react'
import Nav from './Nav'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <h1>
        <img src="./sp.gif" width='336' height='280' alt="Shadow Pattern" />
      </h1>
      <Nav />
    </header>
  )
}
