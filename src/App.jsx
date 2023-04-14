import { useState } from 'react'
import React from "react"
import Data from "./components/Data"
import Card from './components/Card'
import Navbar from './components/Navbar'

export default function App() {

  const card = Data.map(item => {
      return (
        <Card 
          key={item.id}
          item={item} 
        />
    )
  })
      return (
        <div>
          <Navbar />
          {card}
        </div>

      )
}

