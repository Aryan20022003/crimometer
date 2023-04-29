import React, { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar bg-slate-900 mx-auto p-3 md:w-11/12 md:p-4 rounded-full translate-y-2 md:translate-y-3 mt-1 ">
            <div className="flex-1">
                <a href="/" className="btn rounded-full btn-ghost normal-case text-2xl md:text-2xl">
                    Crimeo Meter
                </a>
            </div>
            <div className="flex-none">
                <ul className={`menu menu-horizontal md:flex-1 md:flex-grow `}>
                    <li className="rounded-full">
                        <a href="/">HOME</a>
                    </li>
                    <li className="rounded-full">
                        <a href="/">AI circular</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
