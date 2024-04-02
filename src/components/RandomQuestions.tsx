import { Link } from 'react-router-dom'

type Props = {}

const RandomQuestions = (_: Props) => {
  return (
    <div className="container-sm card mt-1">
    <h2 className="mt-1 mb-1 text-start">10 Random Questions: </h2>
    <div className="flex flex-center">
        <Link to="/random/2024" className="unstyled-link">
            <button className="btn text-normal btn-gradient">
                2024 (EN)
            </button>
        </Link>

    </div>
    <div className="flex flex-center mt-1">
        <Link to="/random/es/2024" className="unstyled-link">
            <button className="btn text-normal btn-gradient">
                2024 (ES)
            </button>
        </Link>

    </div>

</div>

  )
}   

export default RandomQuestions