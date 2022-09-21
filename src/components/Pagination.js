import React from 'react';


import '../styles/index.css'


const Pagination = ({ prev, next, onPrevious, OnNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        OnNext();
    }


    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev ? (<li className="page-item"><button className="page-link button" onClick={handlePrevious}>Previous</button></li>)
                        : null
                }
                {
                    next ? (<li className="page-item"><button className=" page-link button" onClick={handleNext}>Next</button></li>)
                        : null
                }
            </ul>

        </nav>);
}

export default Pagination;



