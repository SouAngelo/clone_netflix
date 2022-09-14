import React, {useEffect, useState} from 'react'
import categories from '../../services/categories'
import api from '../../services/api'
import './banner.sass'

function Header() {

  const [movie, setMovie] = useState({})

  async function getBanner(){
    try {
       const movieBanner = categories.find((category) => category.name === 'netflixOriginals' )

       const response = await api.get(movieBanner.path, {
         params:{
           language:'pt-BR'
         }
       })
       const movies = response?.data.results
       const randomIndexMovie = Math.floor(Math.random() * movies.length)
       setMovie(movies[randomIndexMovie])

    } catch (error) {
      console.log('erro' + error)
    }
  }

  useEffect(() => {
    getBanner()
  }, [])

  return (
    <header style={{
      backgroundImage: `linear-gradient(
        rgba(0,0,0,.7),rgba(0,0,0,.7)
      ), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>

      <div className='header-content'>
        <h1 className='title'>{movie.title || movie.name || movie.original_name }</h1>
          <div className='btns'>
               <button className='btn'>Assistir</button>
               <button className='btn'>Minha lista</button>
          </div>

          <div className='description'>
            <p>{movie.overview}</p>
          </div>
      </div>
        
    </header>
  )
}

export default Header