import React from 'react'
import {usePopularMoviesQuery} from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';
import "./Banner.style.css"

const Banner = () => {

  const {data, isLoading, isError, error} = usePopularMoviesQuery();

  const movie = data?.results?.[0];

  return (
    <div style={{
      backgroundImage: "url("+ `https://media.themoviedb.org/t/p/w1066_and_h600_face/${movie?.poster_path}` + ")"
    }}
    className="banner"
    >
      <div className='text-white banner-text-area'>
        <h1>{movie?.title}</h1>
        <p>{movie?.overview}</p>
      </div>
    </div>
  )
}

export default Banner