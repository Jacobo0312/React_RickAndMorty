
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import { BlockPicker } from 'react-color';
import Tippy from '@tippyjs/react';




function App() {


  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [color, setColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);



  const url = 'https://rickandmortyapi.com/api/character';

  const getCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info)
      })
      .catch(error => console.error('Error:', error))
  };

  useEffect(() => {
    getCharacters(url);
  }, [])


  const onPrevious = () => {
    getCharacters(info.prev)
  }

  const OnNext = () => {
    getCharacters(info.next);
  }





  return (
    <>

      <Navbar tittle="Characters Rick And Morty" colorPicker=
      { <div>
          <button className="btn btn-secondary" onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
            {showColorPicker ? 'Close'
              : 'Change color background'
            }</button>


          {showColorPicker && 

            //<Tippy interactive ={true} placement={'bottom'} content={
            <BlockPicker 
            color={color} 
            onChangeComplete={updateColor => setColor(updateColor.hex)} 
            />
            //}></Tippy>
      }
          

        </div> 
      }/>


      <div className="container mt-5">

       

        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} OnNext={OnNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} OnNext={OnNext} />


        
      </div>

      <style>{'body {background-color:' + color + ';'}</style>







    </>

  );
}

export default App;
