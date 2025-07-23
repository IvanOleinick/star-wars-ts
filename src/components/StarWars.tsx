import {starWarsInfo} from "../utils/constants.ts";

const StarWars = () => {
    return (
        <div className="text-[1.7em] text-justify leading-[1.6] tracking-[.2em]">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;