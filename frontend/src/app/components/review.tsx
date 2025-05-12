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
    <div className="rounded-lg bg-primary flex flex-col justify-center items-center size-60 md:size-100 relative py-10">
        <Stars rate={stars}></Stars>
        <h4 className="text-2xl">{getInterpretation(stars)}</h4>
        <p className="grow text-center line-clamp-6 w-60">{review}</p>
        <ProfileIcon src={avatar} className="size-12 absolute left-1/2 -translate-x-1/2 -bottom-5"></ProfileIcon>
    </div>
  )
}

export default Review