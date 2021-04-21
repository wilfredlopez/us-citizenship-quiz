import { QuizRenderer } from '../components/QuizRenderer'
import { questions2020 } from '../data/questions2020'
import { QuizWrapper } from '../components/QuizWrapper'







export const Quiz2020 = () => {
    return (<QuizWrapper>
        <QuizRenderer questions={questions2020} />
    </QuizWrapper>)
}
