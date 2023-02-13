
import {React,useContext} from "react";
import { QuizContext } from "../helpers/Context";
import '../App.css';
function MainMenu() {
   const {gameState,setGameState}=useContext(QuizContext);
  return (
    <div className='Menu'>
       <h1>MainMenu</h1>
       <button onClick={()=>{setGameState("quiz");}}>Start Quiz</button>
   
    </div>
    
   
  );
}

export default MainMenu;
