import {NavLink} from "react-router";
import {useContext} from "react";
import {StarWarsContext} from "../utils/context.ts";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}:NavItemProps) => {
    const{hero}=useContext(StarWarsContext);
    return (
        <NavLink to={`${itemTitle}/${hero}`}
            className="bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white">
            {itemTitle}
        </NavLink>
    );
};

export default NavItem;