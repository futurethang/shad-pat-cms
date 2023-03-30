import React from 'react'
import Nav from './Nav'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <h1>
        <Image src="./sp.gif" alt="Shadow Pattern" />
      </h1>
      <Nav />
    </header>
  )
}
