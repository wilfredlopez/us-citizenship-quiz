import { useEffect } from 'react'
import { Link } from 'react-router-dom'


// import flagBackground from '../assets/flag_background_1.png'
// const flagBackground = new URL('/flag_background_1.png', import.meta.url).href
const flagBackground = '/flag_background_1.png'
// import uscis from '../assets/uscis.png'
// const uscis = new URL('/uscis.png', import.meta.url).href
const uscis = '/uscis.png'
import './home.css'
import ByCategory from '../components/ByCategory'
import RandomQuestions from '../components/RandomQuestions'

interface Props {

}


export const Home = (_props: Props) => {
    useEffect(() => {
        document.title = 'Home | US Citizenship Quiz'
    }, [])
    return (
        <>
            <div style={{
                background: `url(${flagBackground})`,
                backgroundSize: "contain",
                width: "100vw",
                maxWidth: '100%',
                backgroundRepeat: "no-repeat",
                overflow: 'hidden'
            }}>
                {/* <img src={flagBackground} alt="us flag" className="image-full" /> */}
                <section className="container mb-1 text-center">
                    <div style={{
                        marginTop: 130
                    }} />
                    <img src={uscis} alt="U.S Citizenship and migration services" className="image-full max-width-sm" />
                    <div className="container-sm card mt-1">
                        <p
                            className="text-start"
                        >Use these study and testing tools to prepare for your upcoming naturalization interview with the United States Citizenship and Immigration Services.</p>


                        <h2 className="mt-1 mb-1 text-start">Available Quizes: </h2>
                        <div className="flex">
                            <Link to="/quiz/2025" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    US Civics Quiz  2025
                                </button>
                            </Link>

                        </div>
                        <div className="flex mt-1">
                            <Link to="/quiz/es/2025" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    US Civics Quiz  2025 (Spanish)
                                </button>
                            </Link>

                        </div>
                        <div className="flex mt-1">
                            <Link to="/quiz/practice/2025" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    US Civics Quiz 2025 (Practice Mode)
                                </button>
                            </Link>
                        </div>
                        <div className="flex mt-1">
                            <Link to="/quiz/es/practice/2025" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    US Civics Quiz 2025 (Spanish Practice Mode)
                                </button>
                            </Link>
                        </div>

                    </div>
                   <RandomQuestions />

                    <ByCategory />
                    <div className="mt-3 mb-3 pb-3">
                        <h3 className="pt-3">
                            More Resources:
                        </h3>
                        <div className="mt-1 mb-1">

                            <p>
                                Prepare for your the Civics test at
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.uscis.gov/citizenship/find-study-materials-and-resources"> uscis.gov</a>
                            </p>
                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}
