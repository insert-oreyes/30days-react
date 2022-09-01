import './style.css'
import {motion} from 'framer-motion'

export const SliderShow = (props) => {
  const { movies } = props
  return (
    <div>
      {movies.map((movie) => {
        return (
          <motion.div className='item' drag={'x'}>
            <img src={movie.background} alt='' />
          </motion.div>
        )
      })}
    </div>
  )
}
