import React from 'react'
import {useState} from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';
import { Container, Col, Row } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import "./MoviePage.style.css"
import {useMovieGenreQuery} from '../../hooks/useMovieGenre'

// 경로 2가지
// nav바에서 클릭해서 온경우 => popularMovie 보여주기
// keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const[query, setQuery] = useSearchParams();
  const[page, setPage] = useState(1);
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("");  
  const keyword = query.get('q');

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});
  const {data:genreData} = useMovieGenreQuery();

  if(isLoading){
      return <Spinner animation="border"/>;
  }

  if(isError){
      return <Alert key='danger' variant='danger'>{error.message}</Alert>;
  }

  const PaginateComponent = ReactPaginate.default || ReactPaginate;  

  const handlePageClick = ({selected}) => {
    setPage(selected + 1);
  }

  const filteredMovies = data?.results?.filter((movie) =>
    genre ? movie.genre_ids.includes(Number(genre)) : true
  );

  const sortedMovies = [...(filteredMovies || [])].sort((a, b) => {
    if (sort === "popular") {
      return b.popularity - a.popularity;
    }
    if (sort === "rate") {
      return b.vote_average - a.vote_average;
    }
    if (sort === "latest") {
      return new Date(b.release_date) - new Date(a.release_date);
    }
    return 0;
  });

  const isMobile = window.innerWidth <= 768;
  
  // console.log("data:", data);
  // console.log("genreData:", genreData);

  return (
    <div >
      <Container>
        <Col lg={4} xs={12}>
          Genre &nbsp;  
          <select onChange={(event) => setGenre(event.target.value)}>
            <option value="">전체</option>
            {genreData?.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          &nbsp; &nbsp;  
          정렬 &nbsp;  
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="popular">인기순</option>
            <option value="rate">평점순</option>
            <option value="latest">최신순</option>
          </select>
        </Col>
        <Col lg={8} xs={12}>
          <Row className="movie-grid">
          {sortedMovies?.map((movie,index) => (
            <Col key={index} lg={4} xs={12} 
                 className="movie-col"
                 style={{ flex: "0 0 20%", maxWidth: "20%" }}
            >
              <MovieCard movie={movie} />
            </Col>
          ))}
          </Row>
          <PaginateComponent
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={isMobile ? 1 : 3}
            marginPagesDisplayed={isMobile ? 1 : 9}
            // pageCount={data?.total_pages}
            pageCount={Math.min(data?.total_pages, 500)}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1} 
          />                 
        </Col>
      </Container>
    </div>
  )
}

export default MoviePage