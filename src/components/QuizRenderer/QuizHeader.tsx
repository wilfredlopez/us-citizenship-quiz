import React from 'react'
import { getPercent } from '../../utils/getPercent'
import { RenderMode } from './QuizRenderer.interface'

interface Props {
    mode: RenderMode
    totalCorrect: number
}



export const QuizHeader = ({ mode, totalCorrect }: Props) => {
    return (
        <section className="flex mt-1" style={{
            justifyContent: 'flex-end'
        }}>
            {mode === 'test' &&
                <div className="card card-circle">

                    {/* <p>
                        <b>Total Correct: </b> {totalCorrect}
                    </p> */}
                    <p>
                        <b>Current Score: </b> {getPercent(totalCorrect)}%
                    </p>
                </div>
            }
        </section>
    )
}
