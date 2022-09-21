import React from 'react'


const Navbar = ({ tittle }) => {
    return (
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container mt-2">
                <a href="/" className="navbar-brand ">{tittle}</a>
            </div>
        </nav>
    );
}

export default Navbar;