import Friends from "./Friends.tsx";
import {arrayImages} from "../utils/constants.ts";

const DreamTeam = () => {
    return (
        <section className="float-right row w-1/2 border rounded-b-2xl mr-0 ml-2 grid grid-cols-3 gap-1">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {arrayImages.map((item, index) => {


                return <Friends friend={item} key={index}/>;
            })}
        </section>
    );
};

export default DreamTeam;