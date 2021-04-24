import React from 'react'
import { Question } from '../../model/Question'
import { ArrowForwardIcon } from '../ArrowForwardIcon'
import { MessageType } from './QuizRenderer.interface'
import { translateString } from './translateString'


interface Props {
    handleSubmit: (evt: React.FormEvent) => void
    currentQuestion: Question
    handleAnswerClick: (index: number) => void
    message: MessageType
    displayHighlight: boolean
    enableSubmit: boolean
    inSpanish: boolean
}

function shouldDisplayHighlight(option: string, question: Question, displayRedColor: boolean) {
    return question.isCorrectAnswer(option) && displayRedColor
}

export const QuizForm = ({ handleSubmit, inSpanish, currentQuestion, enableSubmit, handleAnswerClick, message, displayHighlight }: Props) => {
    return (
        <section className="card mt-1 mb-2">

            <div className="p-1">
                <h5 className="q-title">{currentQuestion.text}</h5>
            </div>
            <form onSubmit={handleSubmit}>
                <ul className="pl-3 radio-toolbar">
                    {currentQuestion.options.map((op, i) => {
                        return <li key={op + currentQuestion.number}>
                            <input

                                id={op}
                                name={currentQuestion.number.toString()}
                                type="radio" onClick={() => handleAnswerClick(i)}></input>
                            <label htmlFor={op} className={displayHighlight && shouldDisplayHighlight(op, currentQuestion, displayHighlight) ? 'highlight-q' : ''}>{op}</label>
                        </li>
                    })}
                </ul>
                <div className="submit-btn-container mt-2">
                    <button
                        disabled={!enableSubmit}
                        type="submit"
                        className="btn btn-submit">{translateString(inSpanish, 'submit')}
                        <ArrowForwardIcon className="translate-x-1" />
                    </button>
                </div>
                <div className="pt-1">
                    <p className={message === null ? "message" : message === 'Correct!' ? 'message success' : 'message danger'}>{message}</p>

                </div>
                <div className="pt-1">
                    {message === "Incorrect!" && (
                        <p>
                            {currentQuestion.tip && (
                                (<span><b>TIP: </b>  {currentQuestion.tip}</span>)
                            )}
                        </p>
                    )}
                </div>

            </form>

        </section>
    )
}
