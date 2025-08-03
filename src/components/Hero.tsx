import {useContext} from "react";
import {StarWarsContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";

const Hero = () => {
    const {hero = defaultHero}=useContext(StarWarsContext);
    console.log(hero);
    return (
        <section className="float-left w-1/4 me-4">
            <img className="w-full shadow-hero " src={characters[hero].img} alt="Hero"/>
        </section>
    );
};

export default Hero;