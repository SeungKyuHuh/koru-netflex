import React from 'react';
import { useState } from 'react';
import './ReviewContent.style.css'
import Button from 'react-bootstrap/Button';

  const ReviewContent = ({ reviewData }) => {
  const [expandedReviews, setExpandedReviews] = useState({});

  if (!reviewData?.results?.length) return null;

  const toggle = (id) => {
     setExpandedReviews((prev) => ({
         ...prev,
         [id]: !prev[id],
     }));
  };

  return (
    <div>
      <h3>Reviews</h3>

      <div className="review-list">
        {reviewData.results.map((review) => {
          const expanded = expandedReviews[review.id];
          const isLong = review.content.length > 200; 

          return (
            <div className="review-card" key={review.id}>
              <div className="review-header">
                <strong>{review.author}</strong>
              </div>

              <p className={`review-content ${expanded ? 'expanded' : ''}`}>
                {review.content}
              </p>

              {isLong && (
                <Button variant="dark"
                  className="toggle-btn"
                  onClick={() => toggle(review.id)}
                >
                  {expanded ? 'Fold' : 'See more'}
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewContent;