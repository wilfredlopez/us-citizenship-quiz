import { useMemo } from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { QuizWrapper } from '../components/QuizWrapper'
import { getPercent } from '../utils/getPercent'


interface StateProps { totalCorrect: number, totalQuestions: number }


export const ResultsPage = (props: RouteChildrenProps<{}, StateProps>) => {
    const { totalCorrect = 0, totalQuestions = 0 } = props.location?.state || {}

    const percent = useMemo(() => {
        return getPercent(totalCorrect, totalQuestions)
    }, [totalCorrect, totalQuestions])


    return (
        <QuizWrapper>
            <div className="container">
                <h1 className="text-center mt-1">US QUIZ RESULTS</h1>
                <section className="mt-2 container-sm">
                    <div className="card">


                        {percent > 60 ? <p>Congratulations! you passed.</p> : <p>Sorry. You failed the test.</p>}
                        <p>Scored: {percent}%</p>
                    </div>
                </section>
                <section className="flex flex-center mt-2">
                    <button className="btn btn-info btn-sm" onClick={() => props.history.goBack()}>
                        Go Back
                    </button>
                </section>
            </div>
        </QuizWrapper>
    )
}
