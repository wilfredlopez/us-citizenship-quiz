import { Question } from '../../model/Question'
import { QuizFooterAnswers } from './QuizFooterAnswers'
import { translateString } from './translateString'

interface Props {
    enableNext: boolean
    goToNext: () => void
    revealAnswers: boolean
    setRevealAnswers: (cb: ((current: boolean) => boolean) | boolean) => void
    currentQuestion: Question
    showFooter: boolean
    inSpanish: boolean
}


export const QuizFooter = ({ enableNext, inSpanish, goToNext, revealAnswers, setRevealAnswers, currentQuestion, showFooter }: Props) => {
    if (!showFooter) {
        return null
    }
    return (
        <>
            <div className="pl-1 pr-1 pb-1">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>

                    <button
                        disabled={!enableNext}
                        className="btn btn-primary" onClick={goToNext}>{translateString(inSpanish, 'next')}</button>
                </div>
            </div>
            <section className="p-1">

                {revealAnswers ? (
                    <QuizFooterAnswers
                        currentQuestion={currentQuestion}
                        setRevealAnswers={setRevealAnswers} />
                )
                    :
                    (<div className="flex flex-end">
                        <button
                            onClick={() => setRevealAnswers((curr) => !curr)}
                            className="btn btn-sm btn-info-outline"
                        >
                            {revealAnswers ? translateString(inSpanish, 'hide') : translateString(inSpanish, 'reveal')}
                        </button>

                    </div>)
                }
            </section>
        </>

    )
}
