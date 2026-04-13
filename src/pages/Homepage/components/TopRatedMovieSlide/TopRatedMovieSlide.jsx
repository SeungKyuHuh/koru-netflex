import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import {responsive} from '../../../../constants/responsive'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const TopRatedMoviesSlide = () => {

    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();

    if(isLoading){
        return <Spinner animation="border"/>;
    }

    if(isError){
        return <Alert key='danger' variant='danger'>{error.message}</Alert>;
    }

  return (
    <div>
        <MovieSlider title='Top Rated Movies' movies={data.results} responsive={responsive} />
    </div>
  )
}

export default TopRatedMoviesSlide