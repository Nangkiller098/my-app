import {Metadata} from 'next';
import React from 'react'

export const dynamic="force-static"

export const metadata:Metadata={
  title:'About us',
  description:"We are a social media company"
}

export default function About() {
  return (
    <main>
        <h1>About</h1>
        <p>we</p>
    </main>
  )
}
