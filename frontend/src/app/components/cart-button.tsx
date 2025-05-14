import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartButton({className}: {className?: string}) {
  return (
    <button className={`${className} rounded-full size-7 bg-white`}>
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
}

export default CartButton;
