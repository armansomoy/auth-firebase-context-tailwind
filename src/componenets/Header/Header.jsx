import React from "react";
import { Link } from "react-router-dom";

const HEader = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl border-solid border-1 border-gray-100">Auth Firebase Context Tailwind</a>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
      </div>
    </div>
  );
};

export default HEader;
