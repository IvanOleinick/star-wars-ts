import Friends from "./Friends.tsx";
import {arrayImages} from "../utils/constants.ts";
import {useContext} from "react";
import {StarWarsContext} from "../utils/context.ts";

const DreamTeam = () => {
    const {hero} = useContext(StarWarsContext);

    return (
        <section className="float-right row w-1/2 border rounded-b-2xl mr-0 ml-2 grid grid-cols-3 gap-1">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {arrayImages.filter(a => a !== hero).map((item, index) => <Friends friend={item} key={index}/>)}
        </section>
    )
}
export default DreamTeam;