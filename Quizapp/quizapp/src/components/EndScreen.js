import {React,useContext} from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/Context";
import '../App.css';

function EndScreen() {
  const{score,setScore,setGameState}=useContext(QuizContext);
   const RestartQuiz=()=>
   {
    setScore(0);
    setGameState("menu")
   };

  return (
    <div className='EndScreen'>
       <h1>Quiz Finsihed</h1>
       <h3>{score}/{Questions.length}</h3>
       <button onClick={RestartQuiz}>RestartQuiz</button>
    </div>
    
   
  );
}

export default EndScreen;
