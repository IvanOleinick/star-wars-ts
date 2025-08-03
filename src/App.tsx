import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {StarWarsContext} from "./utils/context.ts";
import {defaultHero} from "./utils/constants.ts";


function App() {
    const [hero, setHero] = useState<string | undefined>(defaultHero);


    return (
        <div>
            <StarWarsContext
                value={{hero, changeHero: setHero}}>
                <Header/>
                <Main/>
                <Footer/>
            </StarWarsContext>

        </div>

    )
}

export default App
