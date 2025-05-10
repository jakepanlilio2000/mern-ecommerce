import React from 'react'
import ProfileIcon from './ui/profile-icon';
import Stars from './ui/stars';

interface ReviewProps{
    stars: number;
    avatar: string;
}

function Review({avatar}: ReviewProps) {
    const getInterpretation = (stars: number) => {
        return "Excellent"
    }

  return (
    <div>
        
        <ProfileIcon src={avatar}></ProfileIcon>
    </div>
  )
}

export default Review