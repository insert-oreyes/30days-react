import React, { useContext } from 'react'
import GifsContext from '../context/GifsContext.jsx'

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContext)

  return gifs
}
