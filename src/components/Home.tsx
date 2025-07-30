import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {StarWarsContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const DEFAULT_HERO = "luke";

const Home = () => {
    const {heroId} = useParams();
    const {changeHero} = useContext(StarWarsContext);
    const key = heroId && characters[heroId] ? heroId : DEFAULT_HERO;

    useEffect(() => {
        changeHero(key)
    },[key])

    return (
        <main className="clear-both">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>


    );
};

export default Home;