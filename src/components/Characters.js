import React from 'react';



const Characters = ({ characters, colorPicker }) => {

    return (
        <div className="row">
            {characters.map((character) => (

                (character.id % 2 == 1) ?

                    <div className="col mb-4" key={character.id}>
                        <div className="card text-center">
                            <div className="card-header">
                                <h3>{character.name}</h3>
                            </div>
                            <div className="card-body bg-dark">
                                <img className="opacity " src={character.image} alt={character.name} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="col mb-4" key={character.id}>
                        <div className="card text-center">
                            <div className="card-header">
                                <h3>{character.name}</h3>
                            </div>
                            <div className="card-body bg-dark">
                                <img src={character.image} alt={character.name} />
                            </div>
                        </div>
                    </div>



            )

            )}
        </div>
    );
}

export default Characters;


