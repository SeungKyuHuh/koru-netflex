import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMoviesSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'

// 1. 배너 => Popular movie 의 첫번째 아이템 
// 2. Popular movie
// 3. Top rated movie
// 4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMoviesSlide />
    </div>
  )
}

export default Homepage