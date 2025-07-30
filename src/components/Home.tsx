import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {StarWarsContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";


const Home = () => {
    const {heroId} = useParams();
    const {changeHero} = useContext(StarWarsContext);
    const key = heroId ??  defaultHero

    useEffect(() => {
        if(!(key in characters)) return;
        changeHero(key)
    }, [key])

    return (key in characters) ? (
        <main className="clear-both">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>


    ):<ErrorPage/>;
};

export default Home;