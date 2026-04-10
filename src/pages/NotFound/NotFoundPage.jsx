import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './NotFoundPage.style.css';

const NotFoundPage = () => {

    const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Not Found</h2>
      <p className="notfound-text">
        찾으시는 페이지가 존재하지 않습니다.
      </p>

      <Button variant="light" onClick={() => navigate('/')}>홈으로 돌아가기</Button>
    </div>    
  )
}

export default NotFoundPage