import React from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    return (
        <header className='header'>
            <nav>
                <img src='/logo.svg' alt='Apple logo' />
                <ul>
                    {navLinks.map(({ label }) => {
                        return (
                            <li key={label}>
                                <a href='#'>{label}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className='flex-center gap-3'>
                    <button>
                        <img src='/search.svg' alt='Search' />
                    </button>
                    <button>
                        <img src='/cart.svg' alt='cart' />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
