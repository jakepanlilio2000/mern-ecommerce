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
    // must be incase in parent div with flex(?)
    <div className="rounded-lg bg-primary flex flex-col justify-center items-center">
        <Stars rate={stars}></Stars>
        <h4 className="text-2xl">{getInterpretation(stars)}</h4>
        <p className="">{review}</p>
        <ProfileIcon src={avatar}></ProfileIcon>
    </div>
  )
}

export default Review