import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Quiz2020 } from './pages/Quiz2020'
import { Quiz2020Practice } from './pages/Quiz2020Practice'
import { ResultsPage } from './pages/ResultsPage'
import { QuizRenderer } from './components/QuizRenderer/QuizRenderer'
import { questionsSpanish2020 } from './data/questionsSpanish2020'
import { QuizWrapper } from './components/QuizWrapper'
interface Props {

}

export const Routes = (props: Props) => {
    return (
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Quiz2020} path="/quiz/2020" exact />
            <Route component={() => <QuizWrapper><QuizRenderer inSpanish questions={questionsSpanish2020} /></QuizWrapper>} path="/quiz/es/2020" exact />
            <Route component={() => <QuizWrapper><QuizRenderer mode="practice" inSpanish questions={questionsSpanish2020} /></QuizWrapper>} path="/quiz/es/practice/2020" exact />
            <Route component={Quiz2020Practice} path="/quiz/practice/2020" />
            <Route path="/quiz/results" component={ResultsPage} />
        </Switch>
    )
}
