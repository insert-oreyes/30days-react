import React from 'react'
import './App.css'
import GifList from './components/GifList'

import { Link, Route } from 'wouter'

const App = () => {
  return (
    <div className='App'>
      <section className='appContainer'>
        <h1>Links</h1>
        <Link to='/gif/hamsters'>Hamsters Gifs</Link>
        <Link to='/gif/kangaroos'>Kangaroos Gifs</Link>
        <Link to='/gif/rabbits'>Rabbits Gifs</Link>
        <Link to='/gif/quokka'>Quokka Gifs</Link>
        <Route component={GifList} path='/gif/:keyword' />
      </section>
    </div>
  )
}

export default App
