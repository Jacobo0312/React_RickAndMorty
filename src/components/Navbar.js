import React, { } from 'react'

import { SketchPicker } from 'react-color';


const Navbar = ({ tittle }) => {

    return (
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container mt-2">
                <a href="/" className="navbar-brand ">{tittle}</a>
            </div>

            <div>a

            </div>

        </nav>
    );
}

export default Navbar;