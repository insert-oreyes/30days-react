import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

import { Link, Route } from 'wouter'

const App = () => {
  return (
    <StaticContext.Provider value={{ name: 'Oscar', juniorDev: true }}>
      <div className='App'>
        <section className='appContent'>
          <h1>Links</h1>
          <GifsContextProvider>
            <Route component={Home} path='/' />
            <Route component={SearchResults} path='/search/:keyword' />
            <Route component={Detail} path='/gif/:id' />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
