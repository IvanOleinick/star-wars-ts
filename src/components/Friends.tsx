interface FriendsProps {
    friend: string;
    className?: string;
}

const Friends = ({friend, className}: FriendsProps) => {
    return (
        <img className={`w-full ${className}`} src={friend} alt="Friend" />
    );
};

export default Friends;