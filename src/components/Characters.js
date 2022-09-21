import React from 'react';



const Characters = ({ characters, colorPicker }) => {

    return (
        <div className="row">
            {characters.map((character) => (

                (character.id % 2 == 0) ?
                <div className="col mb-4" key={character.id}>
                    <div class="card">
                        <img src={character.image} class="card-img-top opacity" alt={character.name} />
                        <div class="card-body">
                            <h5 class="card-title">{character.name}</h5>
                        </div>
                    </div> 
                    </div>
                    :
                    
                    <div className="col mb-4" key={character.id}>
                    <div class="card">
                        <img src={character.image} class="card-img-top" alt={character.name} />
                        <div class="card-body">
                            <h5 class="card-title ">{character.name}</h5>
                        </div>
                    </div> 
                    </div>



            )

            )}
        </div>
    );
}

export default Characters;


