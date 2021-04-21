import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Quiz2020 } from './pages/Quiz2020'
import { Quiz2020Practice } from './pages/Quiz2020Practice'
import { ResultsPage } from './pages/ResultsPage'
import { QuizRenderer } from './components/QuizRenderer/QuizRenderer'
import { questionsSpanish2020 } from './data/questionsSpanish2020'
import { QuizWrapper } from './components/QuizWrapper'
import { questions2020 } from './data/questions2020'
import { shuffle } from './utils/shuffle'
interface Props {

}


const random10 = shuffle(questions2020).slice(0, 10)
const random10Es = shuffle(questionsSpanish2020).slice(0, 10)

export const Routes = (props: Props) => {
    return (
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Quiz2020} path="/quiz/2020" exact />
            <Route component={() => <QuizWrapper><QuizRenderer maxQuestions={10} questions={random10} /></QuizWrapper>} path="/random/2020" exact />
            <Route component={() => <QuizWrapper><QuizRenderer inSpanish questions={questionsSpanish2020} /></QuizWrapper>} path="/quiz/es/2020" exact />
            <Route component={() => <QuizWrapper><QuizRenderer maxQuestions={10} inSpanish questions={random10Es} /></QuizWrapper>} path="/random/es/2020" exact />
            <Route component={() => <QuizWrapper><QuizRenderer mode="practice" inSpanish questions={questionsSpanish2020} /></QuizWrapper>} path="/quiz/es/practice/2020" exact />
            <Route component={Quiz2020Practice} path="/quiz/practice/2020" />


            <Route path="/quiz/results" component={ResultsPage} />
        </Switch>
    )
}
