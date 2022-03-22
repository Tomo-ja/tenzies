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
        keepNumber= {keepNumber}
      />
    )
  })

  function reSetNumber (){
    setNumbers(prevNumbers => {
      let newnBlocks = prevNumbers.map((block) => {
        if (block.held){
          return {...block}
        }else{
          return ({
            ...block,
            "number": takeRandomNumber()
          })
        }
      })
      return(
        newnBlocks
      )
    })
  }

  function keepNumber (event){
    const {id} = event.target
    setNumbers(prevNumbers => {
      let newnBlocks = prevNumbers.map((block) => {
        if (block.id == id){
          return (
            {
              ...block,
              "held": !block.held,
            })
        }else{
          return {...block}
        }
      })
      return(
        newnBlocks
      )
    })
  }


  function takeRandomNumber (){
    return Math.floor(Math.random() * 10) + 1
  }

  return (
    <div className="App">
      <Instruction />
      <div className="block-area">
        {blockElements}
      </div>
      <div className="roll-btn" onClick={reSetNumber}>Roll</div>
    </div>
  );
}

export default App;
