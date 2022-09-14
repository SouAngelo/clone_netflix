import React, { useEffect, useState, useRef } from 'react'
import './sass/style.sass'
import api from '../../services/api'


const linkImg = "https://image.tmdb.org/t/p/original/"

function ListMovies({title, path, isLarge}) {

  const [movies, setMovies] = useState([])
  const [trailerLink, setTrailerLink] = useState('')
  const carousel = useRef(null)


  async function getMovies(_path = path){
    const response = await api.get(_path, {
      params:{
        language:'pt-BR'
      }
    })
    setMovies(response.data.results)
    
  }

  useEffect(()=>{
     getMovies()
  }, [path])


  function handleTrailer(img){

    if(trailerLink){
      setTrailerLink('')
    } else{

         const url = `https://youtube.com/results?search_query=${img.title || img.name || img.original_name} trailer`

         setTrailerLink(url)
    }
   
  }

  function backButton(e){
    e.preventDefault()
       
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  function nextButton(e){
    e.preventDefault()
       
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }


  return (
    <main>
      <div className='container-list'>
        <h1>{title}</h1>
        <div className='carousel-imgs' ref={carousel}>
          {movies.map((img) => {
            return(
             <img 
             key={img.id}
             src={`${linkImg}${isLarge ? img.backdrop_path : img.poster_path}`}
             className={`image ${isLarge && "image-large"}`}
             onClick={() => handleTrailer(img)}
               />
            )
          })}
        </div>
        {trailerLink && <a href={trailerLink} target='_blank' className='link-trailer'>Ver Trailer</a>}

        <div className='arrows'>
           <i className="fa-solid fa-angle-left" onClick={backButton}></i>
           <i className="fa-solid fa-angle-right" onClick={nextButton}></i>
        </div>
      </div>
    </main>
  )
}

export default ListMovies