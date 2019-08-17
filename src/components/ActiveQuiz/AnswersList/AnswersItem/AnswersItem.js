import React from 'react'
import './AnswersItem.css'

const AnswersItem = ({answer, onAnswerClick, state}) => {

  const cls = ['AnswersItem']

  if (state) {
    cls.push(`AnswersItem ${state}`)
  }

  return (
    <li className={cls.join(' ')}
      onClick={() => onAnswerClick(answer.id)} 
    >
      { answer.text }
    </li>
  )
}

export default AnswersItem