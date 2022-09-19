import ResearchFocus from "./ResearchFocus";
import "../styles/Home.css";
import Research from "./Research";
import Openings from "./Openings";
import Resources from "./Resources";
import LinkButton from "../cpmponents/LinkButton";
import Header from "../cpmponents/Header";
import Collapsible from "../cpmponents/Collapsible";

const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <Header />
                {/* <Collapsible title='Toggle {test} link text</a>' links={['www.google.com','www','asdfasdfasdf']} children='asdfasdfasdf'/> */}
                <ResearchFocus />
                <Research />
                <Openings />
                <Resources />
            </div>
        </div>
    );
}

export default Home;