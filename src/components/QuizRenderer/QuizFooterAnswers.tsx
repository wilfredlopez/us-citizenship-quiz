import { Question } from '../../model/Question'

interface Props {
    currentQuestion: Question
    setRevealAnswers: (cb: ((current: boolean) => boolean) | boolean) => void
}

export const QuizFooterAnswers = ({ currentQuestion, setRevealAnswers }: Props) => {
    return (<section>

        <div className="card">
            <ul style={{
                position: 'relative',
                listStyle: 'square',
                paddingLeft: '1rem'
            }}>
                {/* <p className="card-top">Posible Answers</p> */}
                <button className="btn card-top-right" onClick={() => setRevealAnswers(false)}>X</button>
                {currentQuestion.answers.map(a => {
                    return <li key={a}><p>{a}</p></li>
                })}
            </ul>
        </div>
    </section>)
}
