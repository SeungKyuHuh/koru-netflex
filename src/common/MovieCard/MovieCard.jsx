import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./MovieCard.style.css";
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';
import {useMovieGenreQuery} from '../../hooks/useMovieGenre'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {

    const {data:genreData} = useMovieGenreQuery();

    const showGenre = (genreIdList) => {
        if(!genreData) return []
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj.name;
        })
        return genreNameList;
    }

    const navigate = useNavigate();
    const moveDetail = () => {
        navigate(`/movies/${movie.id}`);
    }

  return (
    <div
        style={{backgroundImage:
            "url("+`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"
        }}
        className="movie-card"
        onClick={moveDetail}
    >
        <div className="over-ray">
            <h1>{movie.title}</h1>
            {showGenre(movie.genre_ids).map((id) =>(
                <Badge bg="danger">{id}</Badge>
            ))}
            <div>
                <div>{movie.vote_average}</div>
                <div>{movie.popularity}</div>
                <div>{movie.adult?<Badge bg="danger">19+</Badge>:<Badge bg="primary">ALL</Badge>}</div>
                <div >{movie.release_date}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard