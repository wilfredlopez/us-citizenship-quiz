import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { ResultsPage } from './pages/ResultsPage'
import { QuizRenderer, QuizRendererProps } from './components/QuizRenderer/QuizRenderer'
import { QuizWrapper } from './components/QuizWrapper'
import { questionsSpanish2020 } from './data/questionsSpanish2020'
import { questions2020 } from './data/questions2020'
import { shuffle } from './utils/shuffle'


const random10 = shuffle(questions2020).slice(0, 10)
const random10Es = shuffle(questionsSpanish2020).slice(0, 10)

const QuizPageGenerator = ({ ...rest }: QuizRendererProps) => <QuizWrapper> <QuizRenderer {...rest} /></QuizWrapper>


export const Routes = () => {
    return (
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={() => <QuizPageGenerator questions={questions2020} />} path="/quiz/2020" exact />
            <Route component={() => <QuizPageGenerator maxQuestions={10} questions={random10} />} path="/random/2020" exact />
            <Route component={() => <QuizPageGenerator inSpanish questions={questionsSpanish2020} />} path="/quiz/es/2020" exact />
            <Route component={() => <QuizPageGenerator maxQuestions={10} inSpanish questions={random10Es} />} path="/random/es/2020" exact />
            <Route component={() => <QuizPageGenerator mode="practice" inSpanish questions={questionsSpanish2020} />} path="/quiz/es/practice/2020" exact />
            <Route component={() => <QuizPageGenerator questions={questions2020} mode="practice" />} path="/quiz/practice/2020" />
            <Route path="/quiz/results" component={ResultsPage} />
        </Switch>
    )
}


