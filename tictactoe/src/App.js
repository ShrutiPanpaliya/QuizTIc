import './App.css';
import {useState,useEffect} from 'react';
import Square from './components/Square';
import { Patterns } from './Patterns';
function App() {
  const[board,setBoard]=useState(["","","","","","","","",""]);
  const [player,setPlayer]=useState("X");
  const[result,setResult]=useState({winner:"none",state:"none"})
  useEffect(() => {
    checkTie();
    checkWin();
    

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
     
    }
  }, [result]);
  const chooseSquare=(square)=>
  {
     setBoard(board.map((val,idx)=>{
      if(idx==square && val=="")
      {
        return player
      }
      else{return val}
           
     }))
    
  };
  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
        restartGame();
      }
    });
  };
 const checkTie=()=>
 {
   let filled = true;
   board.forEach((square)=>
   {
    if(square=="")return filled =false;
   })
   if(filled)
   {
    setResult({winner:"no one",state:"Tie"})
    restartGame();
   }
 };
 const restartGame=()=>
 {
 setBoard(["","","","","","","","",""]);
 setPlayer("X");
 };
  return (
    <div className="App">
      <div className='Board'>
        <div className='row'>
        <Square val={board[0]} chooseSquare={()=>{chooseSquare(0);}}/>
        <Square val={board[1]} chooseSquare={()=>{chooseSquare(1);}}/>
        <Square val={board[2]} chooseSquare={()=>{chooseSquare(2);}}/>
        </div>
       
        <div className='row'>
        <Square val={board[3]} chooseSquare={()=>{chooseSquare(3);}}/>
        <Square val={board[4]} chooseSquare={()=>{chooseSquare(4);}}/>
        <Square val={board[5]} chooseSquare={()=>{chooseSquare(5);}}/>
        </div>
        <div className='row'>
        <Square val={board[6]} chooseSquare={()=>{chooseSquare(6);}}/>
        <Square val={board[7]} chooseSquare={()=>{chooseSquare(7);}}/>
        <Square val={board[8]} chooseSquare={()=>{chooseSquare(8);}}/>
        </div>
      </div>
      
    
    </div>
  );
}

export default App;
