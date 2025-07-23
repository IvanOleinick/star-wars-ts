export interface SwContextValue{
    page:string,
    changePage:(page:string)=>void,
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