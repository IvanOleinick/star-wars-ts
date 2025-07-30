import {characters} from "../utils/constants.ts";

interface FriendsProps {
    friend: string;
    className?: string;
}

const Friends = ({friend, className}: FriendsProps) => {
    return (
        <img className={`w-full ${className}`} src={characters[friend].img} alt={characters[friend].img} />
    );
};

export default Friends;