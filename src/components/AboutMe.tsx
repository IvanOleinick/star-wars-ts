import { useParams } from "react-router";
import {useContext, useEffect, useState} from "react";
import { characters, saveData, loadCachedData } from "../utils/constants.ts";
import type { Person } from "../utils/types.ts";
import {StarWarsContext} from "../utils/context.ts";

const DEFAULT_HERO = "luke";

const AboutMe = () => {
    const { heroId } = useParams();
    const key = heroId && characters[heroId] ? heroId : DEFAULT_HERO;
    const character = characters[key];
    const [aboutMe, setAboutMe] = useState<Partial<Person>>({});
    const { setCurrentName } = useContext(StarWarsContext);


    useEffect(() => {
        const cached = loadCachedData<Person>(key);

        if (cached) {
            setAboutMe(cached)
            setCurrentName(cached.name);
            return;
        }

        fetch(character.url)
            .then(res => res.json())
            .then(data => {
                const person: Person = {
                    name: data.name,
                    gender: data.gender,
                    skin_color: data.skin_color,
                    hair_color: data.hair_color,
                    eye_color: data.eye_color,
                    height: data.height,
                    mass: data.mass,
                    birth_year: data.birth_year,
                    image: character.img,
                };
                setAboutMe(person);
                saveData<Person>(key, person, 30);
                setCurrentName(person.name);

            })
            .catch(err => console.error(err));
    }, [heroId]);

    if (!aboutMe.name) {
        return (
            <p className="farGalaxy">
                <span className="spinner-border spinner-border-sm"></span> Loading...
            </p>
        );
    }

    return (
        <div className="flex justify-between items-start">
            <div className="text-[1.7em] text-justify leading-[1.6]">
                {Object.entries(aboutMe).map(([k, v]) => {
                    if (k === "image") return null;
                    const label = k.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase());
                    return <p key={k}>{label}: {v}</p>;
                })}
            </div>
            <img className="w-1/2" src={aboutMe.image} alt={aboutMe.name} />
        </div>
    );
};

export default AboutMe;
