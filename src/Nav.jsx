// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar bg-slate-900 mx-auto p-3 md:w-11/12 md:p-4 rounded-full translate-y-2 md:translate-y-3 mt-1 ">
      <div className="flex-1">
        <Link
          to="/"
          className="btn rounded-full btn-ghost normal-case text-2xl md:text-2xl"
        >
          Crimometer
        </Link>
      </div>
      <div className="flex-none">
        <ul className={`menu menu-horizontal md:flex-1 md:flex-grow `}>
          <li className="rounded-full">
            <Link to="/">HOME</Link>
          </li>
          <li className="rounded-full">
            <Link to="/generate">AI circular</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
