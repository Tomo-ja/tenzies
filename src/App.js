import React from 'react';
import Instruction from './components/Instruction';
import NumbersData from './Data'
import Block from './components/Block';

import './App.css';

function App() {

  const [numbers, setNumbers] = React.useState(NumbersData)

  const blockElements = numbers.map(number => {
    return(
      <Block 
        key={number.id} 
        id={number.id} 
        number={number.number} 
        held={number.held} 
      />
    )
  })

  return (
    <div className="App">
      <Instruction />
      <div className="block-area">
        {blockElements}
      </div>
    </div>
  );
}

export default App;
