import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { ResultsPage } from './pages/ResultsPage'
import { QuizRenderer, QuizRendererProps } from './components/QuizRenderer/QuizRenderer'
import { QuizWrapper } from './components/QuizWrapper'
import { questionsSpanish2020 } from './data/questionsSpanish2020'
import { questions2020 } from './data/questions2020'
import { shuffle } from './utils/shuffle'
import { useEffect } from 'react'


const random10 = shuffle(questions2020).slice(0, 10)
const random10Es = shuffle(questionsSpanish2020).slice(0, 10)

const QuizPageGenerator = ({ title = "", ...rest }: QuizRendererProps & {
    title?: string
}) => {
    useEffect(() => {
        const docTitle = title ? title + ' | US Citizenship Quiz' : 'US Citizenship Quiz'
        window.document.title = docTitle
    }, [title])
    return (<QuizWrapper> <QuizRenderer {...rest} /></QuizWrapper>)
}


export const Routes = () => {
    return (
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={() => <QuizPageGenerator title="2020" questions={questions2020} />} path="/quiz/2020" exact />
            <Route component={() => <QuizPageGenerator title="Random Questions" maxQuestions={10} questions={random10} />} path="/random/2020" exact />
            <Route component={() => <QuizPageGenerator title="2020 (es)" inSpanish questions={questionsSpanish2020} />} path="/quiz/es/2020" exact />
            <Route component={() => <QuizPageGenerator title="Random Questions (es)" maxQuestions={10} inSpanish questions={random10Es} />} path="/random/es/2020" exact />
            <Route component={() => <QuizPageGenerator title="2020 (es)" mode="practice" inSpanish questions={questionsSpanish2020} />} path="/quiz/es/practice/2020" exact />
            <Route component={() => <QuizPageGenerator title="2020" questions={questions2020} mode="practice" />} path="/quiz/practice/2020" />
            <Route path="/quiz/results" component={ResultsPage} />
        </Switch>
    )
}


