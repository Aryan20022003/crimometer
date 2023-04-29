import React from "react";

const Nav = () => {
    return <div className="navbar bg-slate-900 mx-auto  w-11/12 p-4 rounded-full translate-y-3 mt-1">
        <div className="flex-1">
            <a href="ww" className="btn rounded-full btn-ghost normal-case text-2xl">Crimeo Meter</a>
        </div>
        <div className="flex-none">
            <ul className="menu  menu-horizontal px-1">
                <li className="rounded-full"><a href="ww">HOME</a></li>
                <li className="rounded-full"><a href="ww">AI circular</a></li>
            </ul>
        </div>
    </div>
}

export default Nav;