import {useEffect, useState} from "react";
import {characters, saveData, loadCachedData} from "../../utils/constants.ts";
import type {Person} from "../../utils/types.ts";

export const useHeroData = (key: string) => {
    const [aboutMe, setAboutMe] = useState<Partial<Person>>({});

    useEffect(() => {
        if (!(key in characters)) return;

        const cached = loadCachedData<Person>(key);
        if (cached) {
            setAboutMe(cached);
            return;
        }

        const character = characters[key];

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
            })
            .catch(err => console.error(err));
    }, [key]);

    return aboutMe;
};
