import React, { useState } from 'react';



// eslint-disable-next-line
const mainTheme = {
  backgroundColor: "sandybrown",
  height: "100%",
  top:'0', 
  bottom:'0', 
  left:'0', right:'0', position: 'absolute'
}

function randomizeButtonPositions() {
  var buttons = document.querySelectorAll("button");
  buttons.forEach( (b) => {
    b.style.left = (Math.random()*80+10)+"%";
    b.style.top = (Math.random()*80+10)+"%";
  } );
}


let score = 1;

// when true button is clicked
// eslint-disable-next-line
function addingScore() { 
  randomizeButtonPositions();
  score ++;
  document.getElementById('scoreDisplay').innerText = 'Your obedience score: ' + score;
}

// When wrong button is clicked
// eslint-disable-next-line
function reducingScore() { 
  randomizeButtonPositions();
  score --;
  document.getElementById('scoreDisplay').innerText = 'Your obedience score: ' + score; 
}





// button component
function Button({text,correctness}) {
  const [isHovered, setIsHovered] = useState(false); // set hover state
  const buttonStyle = {
    backgroundColor: isHovered ? 'blanchedalmond' : 'chocolate',
    color: isHovered ? 'chocolate' : 'blanchedalmond',
    borderColor: 'chocolate',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  if (correctness) {
    return (
      <div>
        <button
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => addingScore()}
        >
          {text}
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => reducingScore()}
      >
        {text}
      </button>
    </div>
  );
}

export default function DessertGame() {
  return (
    <div style={{mainTheme}}>
      <p id="scoreDisplay">Testing your obedience</p>
      <Button 
        text = "Click"
        correctness={true}
      ></Button>
      <Button 
        text = "Do not click"
        correctness={false}
      ></Button>
    </div>
  )
}

