import {createContext} from "react";
import type {SwContextValue} from "./types";
import {navItems} from "./constants.ts";

export const StarWarsContext =createContext<SwContextValue>({
    page:navItems[0],
    changePage:(page:string)=> console.log(page)
});
