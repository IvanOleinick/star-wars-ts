export interface SwContextValue {
    hero: string;
    changeHero: (hero: string) => void;
}

export interface Person {
    name: string;
    gender: string;
    skin_color: string;
    hair_color: string;
    eye_color: string;
    height: string;
    mass: string;
    birth_year: string;
    image: string;
}
export interface Character extends Partial<Person> {
    img: string;
    url: string;
}
