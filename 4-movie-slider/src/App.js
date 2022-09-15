import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './style.css'

const movies = [
  {
    background:
      'https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg',
    title: 'Title 1',
    id: 1,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/screenshot/t/tom-hollan/tom-holland-as-peter-parkerspider-man_gs9g.1080.jpg',
    title: 'Title 2',
    id: 2,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/screenshot/j/jake-gylle/jake-gyllenhaal-as-quentin-beckmysterio_64vp.1080.jpg',
    title: 'Title 3',
    id: 3,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/screenshot/s/samuel-l-j/samuel-l-jackson-as-nick-fury_5u6r.1080.jpg',
    title: 'Title 4',
    id: 4,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/screenshot/z/zendaya-as/zendaya-as-michelle-jones_q8c5.1080.jpg',
    title: 'Title 5',
    id: 5,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg',
    title: 'Title 6',
    id: 6,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/screenshot/t/tom-hollan/tom-holland-as-peter-parkerspider-man_gs9g.1080.jpg',
    title: 'Title 7',
    id: 7,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/screenshot/j/jake-gylle/jake-gyllenhaal-as-quentin-beckmysterio_64vp.1080.jpg',
    title: 'Title 8',
    id: 8,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/screenshot/s/samuel-l-j/samuel-l-jackson-as-nick-fury_5u6r.1080.jpg',
    title: 'Title 9',
    id: 9,
  },
  {
    background:
      'https://sm.ign.com/t/ign_za/screenshot/z/zendaya-as/zendaya-as-michelle-jones_q8c5.1080.jpg',
    title: 'Title 10',
    id: 10,
  },
]

const App = () => {
  const [width, setWidth] = useState(0)
  // useRef is kinda document.queryselector in JS
  const carousel = useRef()
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [carousel, movies])

  return movies?.length ? (
    <div>
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          // drag makes the motion of sliding, x means horizontal
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='innerCarousel'
        >
          {movies.map((movie) => {
            return (
              <motion.div className='item' key={movie.id}>
                <a href='#modalToPop'>
                  <img src={movie.background} alt='' />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  ) : (
    'No data assigned'
  )
}

export default App
