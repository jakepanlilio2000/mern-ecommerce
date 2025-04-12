import React from 'react';

function Heading({ variant = 'small' }) {
  let classes = "text dark:text "; // default classes

  switch (variant) {
    case 'special-announcement':
      classes += "text-red-600 text-2xl font-bold uppercase";
      break;
    case 'special-announcement-small':
      classes += "text-red-500 text-lg font-semibold uppercase";
      break;
    case 'big':
      classes += "text-4xl font-bold";
      break;
    case 'small':
    default:
      classes += "text-sm";
      break;
  }

  return <span className={classes}>Heading</span>;
}

export default Heading;
