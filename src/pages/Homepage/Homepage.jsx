import React, { Suspense } from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMoviesSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'
import Spinner from 'react-bootstrap/Spinner';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage'

// 1. 배너 => Popular movie 의 첫번째 아이템 
// 2. Popular movie
// 3. Top rated movie
// 4. upcoming movie
const Homepage = () => {
  return (
    <div>
        <ErrorBoundary fallbackRender={({ error }) => <ErrorMessage error={error} />}>
          <Suspense fallback={
            <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '60vh' }}>
              <Spinner animation='border' variant='light' />
            </div>
          }>
            <Banner />
            <PopularMovieSlide />
            <TopRatedMovieSlide />
            <UpcomingMoviesSlide />
          </Suspense>
        </ErrorBoundary>
    </div>
  )
}

export default Homepage