import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function HeartButton() {
  return (
    <button>
        <FontAwesomeIcon icon={faHeart} />
    </button>
  )
}

export default HeartButton