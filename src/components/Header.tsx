import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {StarWarsContext} from "../utils/context.ts";

const Header = () => {
    const { currentName } = useContext(StarWarsContext);

    return (
        <header className="rounded-t-3xl bg-grey-color">
            <Navigation />
            <h1 className="text-center text-3xl py-6">{currentName}</h1>
        </header>
    );
};

export default Header;