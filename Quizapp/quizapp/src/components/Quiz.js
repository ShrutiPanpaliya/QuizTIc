import {React,useState,useContext} from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/Context";
import '../App.css';
function Quiz() {
    const {score,setScore,setGameState}=useContext(QuizContext);
    const[currQuestion,setcurrQuestion]=useState(0);
  const[optionChosen,setoptionChosen]=useState("");
  const FinishQuiz=()=>
  {
    if(Questions[currQuestion].answer===optionChosen)
    {
        setScore(score + 1);
    }
    setGameState("end")
  };
  const NextQuestion=()=>
  {
    if(Questions[currQuestion].answer===optionChosen)
    {
        setScore(score + 1);
    }
    // alert(score)
    setcurrQuestion(currQuestion + 1);

  };
   
  return (
    <div className='Quiz'>
       <h1>{Questions[currQuestion].prompt}</h1>
    <div className="options" >
        <button onClick={()=> setoptionChosen("A")  }>{Questions[currQuestion].OptionA}</button>
        <button onClick={()=> setoptionChosen("B")}>{Questions[currQuestion].OptionB}</button>
        <button onClick={()=> setoptionChosen("C")}>{Questions[currQuestion].OptionC}</button>
        <button onClick={()=> setoptionChosen("D")}>{Questions[currQuestion].OptionD}</button>
    </div>
    {currQuestion===Questions.length-1?(
        <button onClick={FinishQuiz}>Finish Quiz</button>
    ):<button onClick={NextQuestion}>Next Question</button>}
    
    </div>
    
   
  );
}

export default Quiz;
