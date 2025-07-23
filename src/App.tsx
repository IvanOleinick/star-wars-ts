import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {StarWarsContext} from "./utils/context.ts";


function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div>
            <StarWarsContext  value={{page,changePage:setPage}}>
                <Header />
            </StarWarsContext>
            <Main/>
            <Footer/>
        </div>

    )
}

export default App
