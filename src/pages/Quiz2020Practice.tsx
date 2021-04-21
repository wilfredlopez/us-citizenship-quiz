import { QuizRenderer } from '../components/QuizRenderer'
import { QuizWrapper } from '../components/QuizWrapper'
import { questions2020 } from '../data/questions2020'

interface Props {

}

export const Quiz2020Practice = (props: Props) => {
    return <QuizWrapper><QuizRenderer questions={questions2020} mode="practice" /></QuizWrapper>
}
