import {
    RouteObject,
  } from "react-router-dom";


import { Home } from './pages/Home'
import { ResultsPage } from './pages/ResultsPage'
import { questionsSpanish } from './data/questionsSpanish'
import { allQuestions } from './data/allQuestions'
import { shuffle } from './utils/shuffle'
import Layout from "./Layout";
import CategoryPage from "./pages/CategoryPage";
import QuizPageGenerator from "./components/QuizPageGenerator";


const random10 = shuffle(allQuestions).slice(0, 10)
const random10Es = shuffle(questionsSpanish).slice(0, 10)

// const QuizPageGenerator = ({ title = "", ...rest }: QuizRendererProps & {
//     title?: string
// }) => {
//     useEffect(() => {
//         const docTitle = title ? title + ' | US Citizenship Quiz' : 'US Citizenship Quiz'
//         window.document.title = docTitle
//     }, [title])
//     return (<QuizWrapper> <QuizRenderer {...rest} /></QuizWrapper>)
// }



  export const routes:RouteObject[] = [
    {
      path: "/",
      element:<Layout><Home/></Layout> ,
    },
    {
      path: "/quiz/2024",
      element: <Layout><QuizPageGenerator title="2024" questions={allQuestions} /></Layout>,
    },
    {
      path:"/random/2024",
      element:<Layout><QuizPageGenerator title="Random Questions" maxQuestions={10} questions={random10} /></Layout>
    },
    {
      path:"/quiz/es/2024",
      element:<Layout><QuizPageGenerator title="2024 (es)" inSpanish questions={questionsSpanish} /></Layout>
    },
    {
      path:"/random/es/2024",
      element:<Layout><QuizPageGenerator title="Random Questions (es)" maxQuestions={10} inSpanish questions={random10Es} /></Layout>
    },
    {
      path:"/quiz/es/practice/2024",
      element:<Layout><QuizPageGenerator title="2024 (es)" mode="practice" inSpanish questions={questionsSpanish} /></Layout>
    },
    {
      path:"/quiz/practice/2024",
      element:<Layout><QuizPageGenerator title="2024" questions={allQuestions} mode="practice" /></Layout>
    },
    {
      path:"/quiz/results",
      Component: (props:any) => <Layout><ResultsPage {...props}/></Layout>
    },
    {path:'/category/:id',
    element: <Layout><CategoryPage/></Layout>
  
  }
  ]

