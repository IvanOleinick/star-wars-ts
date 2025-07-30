import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";

import ErrorPage from "./ErrorPage.tsx";
import {useErrorPage} from "./hooks/useErrorPage.tsx";


const Home = () => {
    const {isError}=useErrorPage();
    // const {heroId} = useParams();
    // const {changeHero} = useContext(StarWarsContext);
    // const key = heroId ??  defaultHero
    //
    // useEffect(() => {
    //     if(!(key in characters)) return;
    //     changeHero(key)
    // }, [key])

    return !isError ? (
        <main className="clear-both">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>


    ):<ErrorPage/>;
};

export default Home;