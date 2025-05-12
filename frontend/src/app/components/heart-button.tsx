import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function HeartButton({className}: {className?: string}) {
  return (
    <button className={`${className}`}>
        <FontAwesomeIcon icon={faHeart} />
    </button>
  )
}

export default HeartButton