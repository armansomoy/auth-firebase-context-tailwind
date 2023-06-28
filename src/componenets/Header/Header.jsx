import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Login from "../Login/Login";

const HEader = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl border-solid border-1 border-gray-100">
          Auth
        </a>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        {user && (
          <Link to="/profile" className="btn btn-ghost normal-case text-xl">
            Profile
          </Link>
        )}
        <Link to="/orders" className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button className="btn btn-sm ml-2" onClick={handleLogOut}>
              SIgn Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default HEader;
