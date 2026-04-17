import React from 'react'
import { useParams } from 'react-router-dom';
import {useMovieDetailQuery} from '../../hooks/useMovieDetail'
import {useMovieReviewQuery} from '../../hooks/useMovieReview'
import {useMovieVideoQuery} from '../../hooks/useMovieVideo'
import Badge from 'react-bootstrap/Badge';
import "./MovieDetailPage.style.css"
import RecommandMovies from '../Homepage/components/RecommandMovies/RecommandMovies';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReviewContent from '../Homepage/components/ReviewContent/ReviewContent';

const MovieDetailPage = () => {

  const { id } = useParams();
  const { data } = useMovieDetailQuery({id});
  const { data:reviewData } = useMovieReviewQuery({id});
  const { data:videoData } = useMovieVideoQuery({id});

  const trailer = videoData?.results?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
 
  // console.log("id:", id);
  // console.log("data:", data);
  // console.log("reviewData:", reviewData);
  console.log("videoData:", videoData);

  return (
    <div
      className="movie-detail-page"
    >
      <div className="top-section"
            style={{
                    backgroundImage: `url(https://www.themoviedb.org/t/p/original${data.backdrop_path})`
      }}>
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

              <br></br>      
              <div>
                <Button variant="secondary" onClick={handleShow}>Watch Trailer</Button>
              </div>
            </div>

          </div>
        </div>
      </div>  
      
      <div className="content-section">
        <div className="review-inner">
          
          <ReviewContent reviewData={reviewData} />

          <div className="recommend-section">
            <h3>Recommand movies</h3>
            <RecommandMovies movieId={id}/>
          </div>

        </div>
      </div>


      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: "black", color: "white" }}>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ padding: 0 }}>
          {trailer ? (
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div style={{ padding: "20px" }}>No trailer</div>
          )}
        </Modal.Body>
      </Modal>

    </div>  
  )
}

export default MovieDetailPage