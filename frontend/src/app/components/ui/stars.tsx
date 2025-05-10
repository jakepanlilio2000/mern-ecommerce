import React from "react";

interface StarsProps {
  rate: number;
  className?: string;
}

function Stars({ rate, className }: StarsProps) {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className={`${className} flex items-center`}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`}>&#9733;</span> // ★
      ))}
      {hasHalfStar && <span>&#189;</span>} // Optional: use a half-star SVG if
      needed
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map(
        (_, i) => (
          <span key={`empty-${i}`}>&#9734;</span> // ☆
        )
      )}
    </div>
  );
}

export default Stars;
