import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Question } from '../../model/Question'
import { QuizFooter } from './QuizFooter'
import { QuizForm } from './QuizForm'
import { QuizHeader } from './QuizHeader'
import { MessageType, RenderMode } from './QuizRenderer.interface'
import { SoundEffectPlayer } from '../../model/SoundEffectPlayer'

export interface QuizRendererProps {
    questions: Question[]
    mode?: RenderMode
    inSpanish?: boolean
    maxQuestions?: number
}

const soundEffectPlayer = new SoundEffectPlayer()


export const QuizRenderer = ({ questions, maxQuestions = 100, mode = 'test', inSpanish = false }: QuizRendererProps) => {

    // const history = useHistory()
    const history = useNavigate()

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
        soundEffectPlayer.init().setVolume(0.20)
    }, [])

    function handleAnswerClick(index: number) {
        setSelectedOptionIndex(index)
    }


    function goToNext(totalCorrectAfter = totalCorrect) {
        if (isLastQuestion()) {
            //NAVIGATE TO RESULTS PAGE
            history('/quiz/results', {
                state: {
                    totalCorrect: totalCorrectAfter,
                    totalQuestions: maxQuestions
                }
            })
            return
        }
        setTotalCorrect(totalCorrectAfter)
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
                setMessage("Correct!")
                soundEffectPlayer.play('good')
                setEnableNext(true)
                if (mode === 'test') {
                    setTimeout(() => {
                        goToNext(totalCorrect + 1)
                    }, 1000)
                } else {
                    setTotalCorrect(t => t + 1)
                }
            } else {
                // console.log("BAD ANSWER")
                setMessage("Incorrect!")
                soundEffectPlayer.play('wrong')
                setDisplayHighlight(true)
                if (mode === 'test') {
                    setTimeout(() => {
                        setEnableNext(true)
                        goToNext()
                    }, 1800)
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
                <QuizHeader maxQuestions={maxQuestions} mode={mode} totalCorrect={totalCorrect} />
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
