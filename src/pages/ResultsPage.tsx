import { useMemo } from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { ArrowBackIcon } from '../components/ArrowBackIcon'
import { QuizWrapper } from '../components/QuizWrapper'
import { getPercent } from '../utils/getPercent'


interface StateProps { totalCorrect: number, totalQuestions: number }


export const ResultsPage = (props: RouteChildrenProps<{}, StateProps>) => {
    const { totalCorrect = 0, totalQuestions = 0 } = props.location?.state || {}

    const percent = useMemo(() => {
        return getPercent(totalCorrect, totalQuestions)
    }, [totalCorrect, totalQuestions])

    const passed = percent >= 60

    return (
        <QuizWrapper>
            <div className="container">
                <section className="mt-2 container-sm">
                    <div className="card mt-1">
                        <h1 className="text-center">US QUIZ RESULTS</h1>


                        {passed ? <p>Congratulations! you passed.</p> : <p>Sorry. You failed the test.</p>}
                        <p>Scored: {percent}%</p>

                        {!passed &&
                            <div>
                                <small>You need 6 out of 10 to pass.</small>
                            </div>
                        }
                    </div>
                </section>
                <section className="flex flex-center mt-2">
                    <button className="btn btn-secondary" onClick={() => props.history.goBack()}>
                        <ArrowBackIcon width={15} /> &nbsp; Go Back
                    </button>
                </section>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </QuizWrapper>
    )
}
