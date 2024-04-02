import { useEffect } from "react"
import { QuizRenderer, QuizRendererProps } from "./QuizRenderer"
import { QuizWrapper } from "./QuizWrapper"

const QuizPageGenerator = ({addTitle, title = "", ...rest }: QuizRendererProps & {
    title?: string
    addTitle?: boolean
}) => {
    useEffect(() => {
        const docTitle = title ? title + ' | US Citizenship Quiz' : 'US Citizenship Quiz'
        window.document.title = docTitle
    }, [title])
    return (<QuizWrapper> <QuizRenderer title={addTitle ? title: undefined} {...rest} /></QuizWrapper>)
}


export default QuizPageGenerator