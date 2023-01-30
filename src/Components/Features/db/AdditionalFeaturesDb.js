import {faFileLines, faListCheck, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const AdditionalFeaturesDb  = [
    {
        id: 0,
        displayCount: 4,
        icon:null,
        name:null,
        notification:null
    },
    {
        id : 1,
        icon : faFileLines,
        name : "New Articles",
        notification : 82
    },
    
    {
        id : 2,
        icon : faFileLines,
        name : "New Modules",
        notification : 82
    },

    {
        id : 3,
        icon : faFileLines,
        name : "New Skills",
        notification : 82
    },
    {
        id: 4,
        icon : faListCheck,
        name : "New Tasks",
        notification : 8
    },
    {
        id: 5,
        icon : faCircleQuestion,
        name : "FAQ",
        notification : 8
    }

]

export default AdditionalFeaturesDb;