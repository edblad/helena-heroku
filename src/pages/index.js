import React from "react"
import CenterDiv from '../components/centerdiv.js'
import ColorChanger from '../components/colorchanger.js'

export default function Home() {
  return (
    <CenterDiv>
        <h1>Hej!</h1>
        <p>Det här är min sida byggd i React, genererad med hjälp av Gatsby och deployad till Heroku.</p>
        <ColorChanger />
    </CenterDiv>
  )
}