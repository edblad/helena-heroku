import React from "react"
import "../style.css"
import CenterDiv from '../components/centerdiv.js'
import ColorChanger from '../components/colorchanger.js'
import Layout from '../components/layout.js'


export default function Home() {
  return (
    <Layout>
      <CenterDiv background="#f37272">
          <h1>Hej!</h1>
          <p style={{background: "#ffa2a2", color: "#333", padding: "20px", borderRadius: "10px"}}>Det här är min sida byggd i React, genererad med hjälp av Gatsby och deployad till Heroku.</p>
          <ColorChanger />
      </CenterDiv>
    </Layout>
  )
}