import {  CategoryModels } from '../data/allQuestions'
import LinkBuilder from './LinkBuilder'

type Props = {}




const ByCategory = (_: Props) => {
   const Links =  CategoryModels.map(c => {
        return <LinkBuilder align='end' to={c.link}>{c.value}</LinkBuilder>
    })
  return (
    <div className="container-sm card mt-1">
    <h2 className="mt-1 mb-1 text-start">By Category: </h2>
    {Links}      
</div>

  )
}

export default ByCategory