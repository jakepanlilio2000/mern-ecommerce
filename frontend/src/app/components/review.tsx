import React from 'react'
import ProfileIcon from './ui/profile-icon';
import Stars from './ui/stars';

interface ReviewProps{
    stars: number;
    avatar: string;
    review: string;
}

function Review({avatar, stars, review}: ReviewProps) {
    const getInterpretation = (stars: number) => {
        return "Excellent"
    }

  return (
    <div>
        <Stars rate={stars}></Stars>
        <h4>{getInterpretation(stars)}</h4>
        <p>{review}</p>
        <ProfileIcon src={avatar}></ProfileIcon>
    </div>
  )
}

export default Review