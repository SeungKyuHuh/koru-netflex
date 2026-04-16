import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import {responsive} from '../../../../constants/responsive'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const UpcomingMoviesSlide = () => {
    const {data, isLoading, isError, error} = useUpcomingMoviesQuery();
    
  return (
    <div>
        <MovieSlider title='Top Rated Movies' movies={data.results} responsive={responsive} />
    </div>
  )
}

export default UpcomingMoviesSlide