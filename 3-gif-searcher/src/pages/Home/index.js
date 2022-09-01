import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['Hamsters', 'Kangaroos', 'Rabbits', 'Quokka']

function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const { loading, gifs } = useGifs()

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder='Enter Gif'
          type='text'
          value={keyword}
        />
        <button>🔎</button>
      </form>

      <h3 className='app-title'>Last search</h3>

      <ListOfGifs gifs={gifs} />

      <h3 className='app-title'>Popular gifs</h3>

      <ul>
        {POPULAR_GIFS.map((popularGifs) => (
          <li key={popularGifs}>
            <Link to={`/search/${popularGifs}`}>{popularGifs} Gifs</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
