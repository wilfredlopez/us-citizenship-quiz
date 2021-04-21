import { useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Question } from '../../model/Question'
import { QuizFooter } from './QuizFooter'
import { QuizForm } from './QuizForm'
import { QuizHeader } from './QuizHeader'
import { MessageType, RenderMode } from './QuizRenderer.interface'

interface Props {
    questions: Question[]
    mode?: RenderMode
    inSpanish?: boolean
}



export const QuizRenderer = ({ questions, mode = 'test', inSpanish = false }: Props) => {

    const history = useHistory()

    const [currentIndex, setCurrentIndex] = useState(0)
    const [totalCorrect, setTotalCorrect] = useState(0)
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null)
    const [enableNext, setEnableNext] = useState(false)
    const [enableSubmit, setEnableSubmit] = useState(true)
    const [revealAnswers, setRevealAnswers] = useState(false)
    const [displayHighlight, setDisplayHighlight] = useState(false)
    const [message, setMessage] = useState<MessageType>(null)


    const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex, questions])


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    function handleAnswerClick(index: number) {
        setSelectedOptionIndex(index)
    }


    function goToNext() {
        if (isLastQuestion()) {
            //NAVIGATE TO RESULTS PAGE
            console.warn(`[LAST_QUESTION]: Should navigate to results.`)
            history.push('/quiz/results', {
                totalCorrect,
                totalQuestions: 100
            })
            return
        }
        setCurrentIndex(i => (i + 1) % questions.length)
        setEnableNext(false)
        setMessage(null)
        setSelectedOptionIndex(null)
        setRevealAnswers(false)
        setDisplayHighlight(false)
        setEnableSubmit(true)
    }

    function isLastQuestion() {
        const next = (currentIndex + 1) % questions.length
        return currentIndex > 0 && next === 0
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (selectedOptionIndex !== null) {
            setEnableSubmit(false)
            const selectedAnswer = currentQuestion.options[selectedOptionIndex]
            if (currentQuestion.isCorrectAnswer(selectedAnswer)) {
                // console.log("GOOD ANSWER")
                setTotalCorrect(t => t + 1)
                setMessage("Correct!")
                setEnableNext(true)
                if (mode === 'test') {
                    setTimeout(() => {

                        goToNext()
                    }, 1000)
                }
            } else {
                // console.log("BAD ANSWER")
                setMessage("Incorrect!")
                setDisplayHighlight(true)
                if (mode === 'test') {
                    setTimeout(() => {
                        setEnableNext(true)
                        goToNext()
                    }, 2000)
                } else {
                    setEnableNext(true)
                    setEnableSubmit(true)
                }
            }
        }
    }

    return (
        <div className="container">
            <div className="container-md">
                <QuizHeader mode={mode} totalCorrect={totalCorrect} />
                <QuizForm
                    inSpanish={inSpanish}
                    currentQuestion={currentQuestion}
                    handleAnswerClick={handleAnswerClick}
                    handleSubmit={handleSubmit}
                    message={message}
                    displayHighlight={displayHighlight}
                    enableSubmit={enableSubmit}
                />

                <QuizFooter
                    inSpanish={inSpanish}
                    showFooter={mode === 'practice'}
                    revealAnswers={revealAnswers}
                    currentQuestion={currentQuestion}
                    enableNext={enableNext}
                    goToNext={goToNext}
                    setRevealAnswers={setRevealAnswers} />
            </div>
        </div>
    )
}
