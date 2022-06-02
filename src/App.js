import React, {useState} from 'react';
import QuestionList from './components/QuestionList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {

  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [score , setScore] = useState(0);
  const [clicked , setClicked] = useState(false);
  const [showScore , setShowScore] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < QuestionList.length - 1){
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="App">

      <div className='__content'>
        <h1>hello quiz app</h1>
        <p>come in and find out</p>
      </div>

      <article className='article_wrapper'>
        {showScore ? (
          <div>
            <div className='completed'>Completed !</div>
            <div className='score_section'>
              Your Score: {score}/{QuestionList.length}
            </div>
          </div>
        ) : (
          <>
                <div className='wrapper_box'>
                  <div className='question_section_wrapper'>
                    <div className='question_count'>
                      Question {currentQuestion + 1} of {QuestionList.length}
                    </div>
                    <div className='question'>
                      {QuestionList[currentQuestion].question}
                    </div>
                  </div>
                  <div className='answer_section_wrapper'>
                    {QuestionList[currentQuestion].answerList.map((answerOption) => (
                      <li className='answer_list' key={uuidv4()}>
                        <button 
                        className='answer_button'
                        onClick={handleCorrectAnswer(answerOption.isCorrect)}
                        >{answerOption.answer}</button>
                      </li>
                    ))}
                  </div>
                </div>
                <div className='next_button_box'>
                  <button className='next_button'
                  onClick={handleNextQuestion}>
                    Next
                  </button>
                </div>
            </>
        )}
      </article>
    </div>
  );
}

export default App;
