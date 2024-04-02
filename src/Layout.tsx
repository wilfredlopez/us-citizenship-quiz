import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon } from './components/HomeIcon'


function Layout(props: PropsWithChildren<{}>) {
    return (
        <div >
            <header>
                <div className="container">
                    <div className="flex justify-between align-center">

                        <h1>
                            <Link to="/" className="unstyled-link">
                                US Citizenship Quiz
                            </Link>
                        </h1>

                        <Link to="/">
                            <HomeIcon />
                        </Link>
                    </div>

                </div>
            </header>
            <main>
                {props.children}
            </main>

            <footer className="pt-3 pb-3">
                <div className="container p-3">
                    <h4>Resources</h4>
                    <ul className="mt-1">
                        <li>
                            <a href="https://www.uscis.gov/">USCIS</a>

                        </li>
                        <li>
                            <a href="https://www.uscis.gov/citizenship/find-study-materials-and-resources">find-study-materials-and-resources (USCIS)</a>
                        </li>
                    </ul>
                </div>

            </footer>
            <section id="copyright-section">
                <p></p>
                <p></p>
                <p>
                    US Citizenship Quiz &copy;2024
                </p>
                <p>
                    <small>By Wilfred Lopez </small>
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://instagram.com/qbamc_rd" className="styled-link">Instagram: @QBAMC_RD</a>
                </p>
            </section>
        </div>
    )
}

export default Layout
