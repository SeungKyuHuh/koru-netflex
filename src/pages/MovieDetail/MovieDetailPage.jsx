import React from 'react'
import { useParams } from 'react-router-dom';
import {useMovieDetailQuery} from '../../hooks/useMovieDetail'
import {useMovieReviewQuery} from '../../hooks/useMovieReview'
import Badge from 'react-bootstrap/Badge';
import "./MovieDetailPage.style.css"

const MovieDetailPage = () => {

  const { id } = useParams();
  const { data } = useMovieDetailQuery({id});
  const { data:reviewData } = useMovieReviewQuery({id});
 
  console.log("id:", id);
  console.log("data:", data);
  console.log("reviewData:", reviewData);

  return (
    <div
      className="movie-detail-page"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/original${data.backdrop_path})`
      }}
    >
    <div className="top-section">
      <div className="overlay">
        <div className="movie-detail-container">
          <div className="poster">
            <img
              src={`https://www.themoviedb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
            />
          </div>

          <div className="info">
            <div className="genres">
              {data.genres?.map((genre) => (
                <Badge bg="danger" key={genre.id}>{genre.name}</Badge>
              ))}
            </div>
            <h1>{data.title}</h1>
            
            <div className="meta">
              <span>⭐ {data.vote_average}</span>
              <span>👁 {data.popularity}</span>
              <span>
                {data.adult
                  ? <Badge bg="danger">19+</Badge>
                  : <Badge bg="primary">ALL</Badge>}
              </span>
            </div>

            <p className="overview">{data.overview}</p>

            <div className="extra">
              <div><Badge bg="danger">Budget</Badge> ${data.budget?.toLocaleString()}</div>
              <div><Badge bg="danger">Revenue</Badge> ${data.revenue.toLocaleString()}</div>
              <div><Badge bg="danger">Release</Badge> {data.release_date}</div>
              <div><Badge bg="danger">Runtime</Badge> {data.runtime} min</div>
            </div>
          </div>

        </div>
      </div>
    </div>  
    
    <div className="review-section">
      <div className="review-inner">
        <h3>Reviews</h3>
        <div className="review-list">
          {reviewData?.results?.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-header">
                <strong>{review.author}</strong>
              </div>

              <p className="review-content">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>  
  )
}

export default MovieDetailPage