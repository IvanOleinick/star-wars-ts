import {baseUrl, id_person, tag_base, tag_peoples} from "../utils/constants.ts";
import {saveData, loadCachedData} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import type {Person} from "../utils/types";


const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState<Partial<Person>>({});
    const STORAGE_KEY = 'aboutMe';

    useEffect(() => {
        const cached = localStorage.getItem(STORAGE_KEY);
        if (cached) {
            const data = loadCachedData<Person>(STORAGE_KEY);
            if (data) {
                setAboutMe(data);
                return;
            }
        }

        fetch(`${baseUrl}/${tag_base}/${tag_peoples}/${id_person}`)
            .then(res => res.json())
            .then(data => {
                const person = {
                    name: data.name,
                    gender: data.gender,
                    skin_color: data.skin_color,
                    hair_color: data.hair_color,
                    eye_color: data.eye_color,
                    height: data.height,
                    mass: data.mass,
                    birth_year: data.birth_year,
                    image: data.image,
                };

                setAboutMe(person);
                saveData<Person>(STORAGE_KEY, person, 30);
            })
            .catch(err => console.error(err));
    }, []);

    if (!aboutMe) {
        return (
            <p className="farGalaxy">
                <span className="spinner-border spinner-border-sm"></span>
                Loading...
            </p>
        );
    }

    return (
        <div className="flex justify-between items-start">
            <div className="text-[1.7em] text-justify leading-[1.6]">
                {Object.entries(aboutMe).map(([key, value]) => {
                    if (key === "image") return null;

                    const label = key
                        .replace(/_/g, ' ')
                        .replace(/^\w/, c => c.toUpperCase());

                    return (
                        <p key={key}>
                            {label}: {value}
                        </p>
                    );
                })}
            </div>
            <img className="w-1/2" src={`/${aboutMe.image}`} alt={aboutMe.name}/>
        </div>
    );
};

export default AboutMe;
