import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'


function Layout(props: PropsWithChildren<{}>) {
    return (
        <div >
            <header>
                <div className="container">
                    <h1>
                        <Link to="/" className="unstyled-link">
                            US Citizenship Quiz
                        </Link>
                    </h1>

                </div>
            </header>
            <main>
                {props.children}
            </main>

            <footer>
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
                US Citizenship Quiz &copy;2021
            </section>
        </div>
    )
}

export default Layout
