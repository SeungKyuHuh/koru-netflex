import React from 'react'
import { useRecommandMoviesQuery } from '../../../../hooks/useRecommandMovies'
import MovieCard from '../../../../common/MovieCard/MovieCard';
import './RecommandMovies.style.css'

const RecommandMovies = ({movieId}) => {

  const {data} = useRecommandMoviesQuery({movieId});

  return (
    <div className="recommend-grid"> 
        {data.results.map((recommand, index) => <MovieCard movie={recommand} key={index}/>)}
    </div>
  )
}

export default RecommandMovies