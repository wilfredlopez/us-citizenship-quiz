import { getPercent } from '../../utils/getPercent'
import { RenderMode } from './QuizRenderer.interface'

interface Props {
    mode: RenderMode
    totalCorrect: number
    maxQuestions: number
}



export const QuizHeader = ({ mode, totalCorrect, maxQuestions }: Props) => {
    return (
        <section className="flex mt-1" style={{
            justifyContent: 'flex-end'
        }}>
            {mode === 'test' &&
                <div className="card card-circle">

                    {/* <p>
                        <b>Total Correct: </b> {totalCorrect}
                    </p> */}
                    <p className='text-center'><b className='text-success'>{totalCorrect}</b> out of <b>{maxQuestions}</b></p>
                    <p>
                        <b>Current Score: </b> {getPercent(totalCorrect, maxQuestions)}%
                    </p>
                </div>
            }
        </section>
    )
}
