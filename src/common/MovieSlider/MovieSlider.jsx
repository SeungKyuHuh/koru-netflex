import React from 'react'
import "./MoviceSlider.style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title, movies, responsive}) => {
    const CarouselComponent = Carousel.default ? Carousel.default : Carousel;

  return (
    <div>
        <h3>{title}</h3>
        <CarouselComponent 
            infinite={true}
            centerMode={true}
            itemClass="movie-slider p-1"
            containerClass="carousel-container"
            responsive={responsive}
        >
        {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index}/>
        ))}
        </CarouselComponent>        
    </div>
  )
}

export default MovieSlider