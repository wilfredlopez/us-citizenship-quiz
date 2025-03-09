import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "./components/HomeIcon";
import Footer from "./components/Footer";

function Layout(props: PropsWithChildren<{}>) {
  return (
    <div>
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
      <main>{props.children}</main>

      <Footer/>
    </div>
  );
}

export default Layout;
