import React from 'react';




const Pagination = ({ prev, next, onPrevious, OnNext }) => {

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev && (<li className="page-item"><button className="page-link button" onClick={onPrevious}>Previous</button></li>)    
                }
                {
                    next && (<li className="page-item"><button className=" page-link button" onClick={OnNext}>Next</button></li>)
                }
            </ul>

        </nav>);
}

export default Pagination;



