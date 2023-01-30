import {faFileLines, faUser, faPenToSquare, faAddressCard, faUsers, faGear, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
const featuresDb = [
    {
        id: 0,
        displayCount: 8,
        icon:null,
        name:null,
        notification:null
    },
    {
        id: 1,
        icon: faFileLines,
        name: "Buzz home",
        notification: null,
    },
    {
        id:2,
        icon: faFileLines,
        name: "My Buzz Post",
        notification: 8,
    },
    {
        id:3,
        icon: faPenToSquare,
        name: "Draft post",
        notification: 2,
    },
    {
        id:4,
        icon: faUser,
        name: "My Followers",
        notification: 33
    },
    {
        id:5,
        icon: faUser,
        name: "I am Following",
        notification: 33
    },
    {
        id:6,
        icon: faUsers,
        name: "My Team",
        notification: 12
    },
    {
        id:7,
        icon: faAddressCard,
        name: "My Reportees",
        notification : 12
    },
    {
        id : 8,
        icon: faGear,
        name: "Settings",
        notification: null
    },
    {
        id : 9,
        icon: faRightFromBracket,
        name: "Log out",
        notification: null
    }

];

export default featuresDb;