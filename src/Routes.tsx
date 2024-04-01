import {
    RouteObject,
  } from "react-router-dom";


import { Home } from './pages/Home'
import { ResultsPage } from './pages/ResultsPage'
import { QuizRenderer, QuizRendererProps } from './components/QuizRenderer/QuizRenderer'
import { QuizWrapper } from './components/QuizWrapper'
import { questionsSpanish2020 } from './data/questionsSpanish2020'
import { questions2020 } from './data/questions2020'
import { shuffle } from './utils/shuffle'
import { useEffect } from 'react'
import Layout from "./Layout";


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



  export const routes:RouteObject[] = [
    {
      path: "/",
      element:<Layout><Home/></Layout> ,
    },
    {
      path: "/quiz/2020",
      element: <Layout><QuizPageGenerator title="2020" questions={questions2020} /></Layout>,
    },
    {
      path:"/random/2020",
      element:<Layout><QuizPageGenerator title="Random Questions" maxQuestions={10} questions={random10} /></Layout>
    },
    {
      path:"/quiz/es/2020",
      element:<Layout><QuizPageGenerator title="2020 (es)" inSpanish questions={questionsSpanish2020} /></Layout>
    },
    {
      path:"/random/es/2020",
      element:<Layout><QuizPageGenerator title="Random Questions (es)" maxQuestions={10} inSpanish questions={random10Es} /></Layout>
    },
    {
      path:"/quiz/es/practice/2020",
      element:<Layout><QuizPageGenerator title="2020 (es)" mode="practice" inSpanish questions={questionsSpanish2020} /></Layout>
    },
    {
      path:"/quiz/practice/2020",
      element:<Layout><QuizPageGenerator title="2020" questions={questions2020} mode="practice" /></Layout>
    },
    {
      path:"/quiz/results",
      Component: (props:any) => <Layout><ResultsPage {...props}/></Layout>
    }
  ]

