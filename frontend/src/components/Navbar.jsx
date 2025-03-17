import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-center">
      <div className="max-w-7xl grid grid-cols-17 gap-4">
        <div className="col-span-3">
          <img src="#" alt="Brand Icon" />
          <span>Brand Name</span>
        </div>
        <form className="col-span-4 col-start-5">
          <input type="text" placeholder="Search" />
          <i>Search Icon</i>
        </form>
        <div className="col-span-2 col-start-11">
          <a href="#">Heart</a>
          <a href="#">Cart</a>
        </div>
        <div className="col-span-4">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
