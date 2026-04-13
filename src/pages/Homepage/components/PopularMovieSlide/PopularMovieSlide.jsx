import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {

    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    
    if(isLoading){
        return <Spinner animation="border"/>;
    }

    if(isError){
        return <Alert key='danger' variant='danger'>{error.message}</Alert>;
    }

  return (
    <div>
        <MovieSlider title='Popular Movies' movies={data.results} responsive={responsive} />
    </div>
  )
}

export default PopularMovieSlide