import "./App.scss";
import NavigationBar from "./components/NavigationBar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Briefcase from "./components/Briefcase";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <main>
                <Profile />
                <Skills />
                <Briefcase />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
