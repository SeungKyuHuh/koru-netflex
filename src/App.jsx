import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout'
import Homepage from './pages/Homepage/Homepage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css';

// 홈페이지  (/)
// 영화 전체보여주는 페이지(서치)  (/movies)
// 영화 디테일 페이지  (/movies/:id)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage/>}></Route>
          <Route path="movies">
            <Route index element={<MoviePage/>}></Route>
            <Route path=":id" element={<MovieDetailPage/>}/>
          </Route>    
        </Route>

        <Route path="*" element={<NotFoundPage/>}></Route>

      </Routes>
    </div>
  )
}

export default App
