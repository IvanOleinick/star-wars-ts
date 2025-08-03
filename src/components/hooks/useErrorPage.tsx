import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {StarWarsContext} from "../../utils/context.ts";
import {characters, defaultHero} from "../../utils/constants.ts";

export const useErrorPage = () => {
    const {heroId} = useParams();
    const {changeHero} = useContext(StarWarsContext);
    const key = heroId ?? defaultHero

    useEffect(() => {
        if (!(key in characters)) return;
        changeHero(key)
    }, [key])
    return {
        isError: !(key in characters),
        key,
        heroId,

    }
}