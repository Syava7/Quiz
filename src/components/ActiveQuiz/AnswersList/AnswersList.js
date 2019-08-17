import React from 'react'
import './AnswersList.css'
import AnswersItem from './AnswersItem/AnswersItem'

const AnswersList = ({answers, onAnswerClick, state}) => (
  <ul className='AnswersList'>
    { answers.map((answer, index) => {
      return (
        <AnswersItem
          key={index}
          answer={answer}
          onAnswerClick={onAnswerClick}
          state={state ? state[answer.id] : null} />
      )
    })}
  </ul>
)

export default AnswersList