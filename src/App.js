import logo from './logo.svg';
import './App.css';
import './Box.css'
import Box from './components/Box'
import BoxForm from './components/BoxForm'
import { useState } from 'react';

function App() {
  //set up useState
  const [boxes, setBoxes] = useState([])

  //new box function
  const addBox = newBox => {
    setBoxes(currentBoxes => ([...currentBoxes, newBox]))
  }


  return (
    <div className="App">
      <BoxForm addFunction={addBox} />

      {
        boxes.map((box, i) => {
          console.log(i)
          return (
            <Box bColor={box.bColor} />
          )
        })
      }

    </div>
  );
}

export default App;
