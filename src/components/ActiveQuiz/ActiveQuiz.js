import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = ({answers, question, onAnswerClick, 
                      quizLength, answerNumber, state}) => {
  return (
    <div className='ActiveQuiz'>
      <p className='Question'>
        <span>
          <strong>
            {answerNumber}.
          </strong>&nbsp;
          {question}
        </span>

        <small>{answerNumber} из { quizLength }</small>
      </p>

      <AnswersList
        state={state}
        answers={answers}
        onAnswerClick={onAnswerClick} />
    </div>
  )
}

export default ActiveQuiz