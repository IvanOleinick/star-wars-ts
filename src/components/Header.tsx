import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {StarWarsContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const Header = () => {
    const {hero} = useContext(StarWarsContext);
const title=hero ?characters[hero].name:"Error";

    return (
        <header className="rounded-t-3xl bg-grey-color">
            <Navigation/>
            <h1 className="text-center text-3xl py-6">{title}
            </h1>
        </header>
    );
};

export default Header;