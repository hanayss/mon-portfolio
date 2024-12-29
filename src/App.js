import Footer from "./Footer";
import Header from "./Header";
import MyCareerPath from "./MyCareerPath";
import Projets from "./Projets";
import Skills from "./Skills";
import Welcome from "./Welcome";

function App() {
    return (
        <div>
            <Header />
            <Welcome />
            <MyCareerPath />
            <Skills />
            <Projets />
            <Footer />
        </div>
    );
}

export default App;
