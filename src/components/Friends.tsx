import { NavLink } from "react-router";
import {characters, navItems} from "../utils/constants.ts";

interface FriendsProps {
    friend: string;
    className?: string;
}

const Friends = ({friend, className}: FriendsProps) => {
    return (
        <NavLink to={`/${navItems[0]}/${friend}`}>
        <img className={`w-full ${className}`} src={characters[friend].img} alt={characters[friend].img} />
        </NavLink>
    );
};

export default Friends;