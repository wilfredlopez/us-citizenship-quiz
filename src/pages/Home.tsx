import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import flagBackground from '../assets/flag_background_1.png'
import uscis from '../assets/uscis.png'
import './home.css'

interface Props {

}


export const Home = (props: Props) => {
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
                            <Link to="/quiz/2020" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    US Civics Quiz  2020
                                </button>
                            </Link>

                        </div>
                        <div className="flex mt-1">
                            <Link to="/quiz/es/2020" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    US Civics Quiz  2020 (Spanish)
                                </button>
                            </Link>

                        </div>
                        <div className="flex mt-1">
                            <Link to="/quiz/practice/2020" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    US Civics Quiz 2020 (Practice Mode)
                                </button>
                            </Link>
                        </div>
                        <div className="flex mt-1">
                            <Link to="/quiz/es/practice/2020" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    US Civics Quiz 2020 (Spanish Practice Mode)
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="container-sm card mt-1">
                        <h2 className="mt-1 mb-1 text-start">10 Random Questions: </h2>
                        <div className="flex flex-center">
                            <Link to="/random/2020" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    2020 (EN)
                                </button>
                            </Link>

                        </div>
                        <div className="flex flex-center mt-1">
                            <Link to="/random/es/2020" className="unstyled-link">
                                <button className="btn text-normal btn-gradient">
                                    2020 (ES)
                                </button>
                            </Link>

                        </div>

                    </div>



                    <div className="mt-3 mb-3 pb-3">
                        <h3 className="pt-3">
                            More Resources:
                        </h3>
                        <div className="mt-1 mb-1">

                            <p>
                                Prepare for your the Civics test at
                                <a href="https://www.uscis.gov/citizenship/find-study-materials-and-resources"> uscis.gov</a>
                            </p>
                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}
