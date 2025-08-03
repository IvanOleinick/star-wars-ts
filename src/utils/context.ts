import {createContext} from "react";
import type {SwContextValue} from "./types";
import {defaultHero} from "./constants.ts";

export const StarWarsContext =createContext<SwContextValue>({
    hero:defaultHero,
    changeHero:(hero?:string)=> console.log(hero),

});
