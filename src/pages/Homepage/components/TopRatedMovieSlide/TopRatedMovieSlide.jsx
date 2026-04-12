import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import './TopRatedMovieSlide.style.css'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const TopRatedMoviesSlide = () => {

    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();
    const CarouselComponent = Carousel.default ? Carousel.default : Carousel;

    if(isLoading){
        return <Spinner animation="border"/>;
    }

    if(isError){
        return <Alert key='danger' variant='danger'>{error.message}</Alert>;
    }

    console.log("data:", data);

  return (
    <div>
        <h3>Top Rated Movies</h3>
        <CarouselComponent 
            infinite={true}
            centerMode={true}
            itemClass="movie-slider p-1"
            containerClass="carousel-container"
            responsive={responsive}
        >
        {data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index}/>
        ))}
        </CarouselComponent>
    </div>
  )
}

export default TopRatedMoviesSlide