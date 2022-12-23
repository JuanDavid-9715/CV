import "./App.scss";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <main>
                <div className="PERFIL"></div>
                <div className="COMPETENCIAS"></div>
                <div className="EXPERIENCIA"></div>
                <div className="PORTAFOLIO"></div>
                <div className="CONTACTO"></div>
            </main>
            <footer className="FOOTER"></footer>
        </div>
    );
}

export default App;
