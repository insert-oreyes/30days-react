import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext.jsx'

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(
    function () {
      setLoading(true)
      // Getting keyword from localstorge
      const keywordToUse =
        keyword || localStorage.getItem('lastKeyword') || 'random'

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        // Saving keyword in localstorge
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword]
  )
  return { loading, gifs }
}
