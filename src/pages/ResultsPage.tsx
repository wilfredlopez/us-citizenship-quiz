import { useMemo } from 'react'
import { ArrowBackIcon } from '../components/ArrowBackIcon'
import { QuizWrapper } from '../components/QuizWrapper'
import { getPercent } from '../utils/getPercent'
import { useLocation, Location, Link } from 'react-router-dom';


interface StateProps { totalCorrect: number, totalQuestions: number }


export const ResultsPage = (_: StateProps) => {
    const location:Location<StateProps> = useLocation()
    
    const { totalCorrect = 0, totalQuestions = 0 } = location?.state || {}

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
                    <button className="btn btn-secondary" onClick={() => window.history.back()}>
                        <ArrowBackIcon width={15} /> &nbsp; Go Back
                    </button>
                </section>
                <section className="flex flex-center mt-2">
                    <Link to={'/'} className="btn btn-secondary">
                         Home
                    </Link>
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
