import {NavLink} from "react-router";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}:NavItemProps) => {
    return (
        <NavLink to={`${itemTitle}`}
            className="bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white">
            {itemTitle}
        </NavLink>
    );
};

export default NavItem;