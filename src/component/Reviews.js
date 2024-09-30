import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    { id: 1, restaurant: 'Pizza Place', review: 'Delicious pizza!' },
    { id: 2, restaurant: 'Burger Joint', review: 'Best burgers in town.' },
  ];

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.restaurant}:</strong> {review.review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

