import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import './Quiz.css'

class Quiz extends Component {

  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id:1,
        question: 'Влада Муся-Пуся?',
        rightAnswerId: 1,
        answers: [
          {text: 'Да', id: 1},
          {text: 'Не', id: 2},
          {text: 'Полюбому', id: 3},
          {text: 'Незнаю', id: 4}
        ]
      },
      {
        id:2,
        question: 'В каком году основали Киев?',
        rightAnswerId: 3,
        answers: [
          {text: '1700', id: 1},
          {text: '1587', id: 2},
          {text: '1681', id: 3},
          {text: '1470', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className='Quiz'>
        <div className='QuizWrapper'>
          <h1>Ответьте на все вопросы</h1>

          {
            this.state.isFinished 
            ? <FinishedQuiz
                 />
            : <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState} />
          }   
        </div>
      </div>
    )
  }
}

export default Quiz