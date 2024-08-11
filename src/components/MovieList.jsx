import React from 'react'
import Movie from './Movie'

function MovieList({movies}) {
  return (
    <div className='container mt-5'> 
    <div className='row my-3 pt-3'>
        {movies.map((movie,index)=>(
            <Movie
            key={index}
            title={movie.title}
            image={movie.image}
            description={movie.description}
            />
        ))}
    </div>
    </div>
  )
}

export default MovieList