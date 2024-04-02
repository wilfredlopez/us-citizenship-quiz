import { useParams } from "react-router-dom"
import { Category } from "../model/Category"
import { allQuestions } from "../data/allQuestions"
import QuizPageGenerator from "../components/QuizPageGenerator"



function getQuestionsByCategory(categoryId:string){
        const category = Category.idToCategory(categoryId)
        return allQuestions.filter(q => q.category.toLocaleLowerCase() === category)
}


type Props = {}

const CategoryPage = (_: Props) => {
    const params = useParams<{id:string}>()
    const categoryQuestions = getQuestionsByCategory(params.id!)
    const title = Category.idToProperCase(params.id!)
  return (
        <div>
        <QuizPageGenerator addTitle={true} maxQuestions={categoryQuestions.length} title={title}  questions={categoryQuestions} />
        </div>
  )
}

export default CategoryPage