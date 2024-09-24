import { useState } from "react";
import questions from "../questions.js";
import quizCompleteImage from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  
  const quizIsComplete=activeQuestionIndex===questions.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  if(quizIsComplete){
    return <div id="summary">
      <img src={quizCompleteImage} alt="Quiz over but image doesn't exist"/>
      <h2>Quiz completed</h2>
    </div>
  }
  
  //For presenting options in random order
  const shuffledAnswers=[...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(()=>Math.random()-0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
