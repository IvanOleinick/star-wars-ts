import Home from "./Home.js";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {navItems} from "../utils/constants.ts";
import {StarWarsContext} from "../utils/context.ts";
import {useContext} from "react";

const Main = () => {
    const {page} = useContext(StarWarsContext);
    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>
    }

};

export default Main;