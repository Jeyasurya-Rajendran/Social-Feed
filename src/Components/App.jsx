import React, {useState} from "react";
import DashboardNavigation from "./DashboardNavigation/DashboardNavigation";
import SideBarPanel from "./SideBarPanel/SideBarPanel";
import FeedPanel from "./FeedPanel/FeedPanel";
import './Styles/Style.scss';
import './Styles/BodySection.scss';
function App(){

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    function toggleSideBar(){
        setIsSideBarOpen(!isSideBarOpen);
    }

    function closeSideBarFromFeedList(){
        setIsSideBarOpen(false)
    }

    return (
        <div>
            <DashboardNavigation toggleSideBar={toggleSideBar}/>
            <div className="body-section">
                <SideBarPanel isSideBarOpen={isSideBarOpen}/>
                <FeedPanel closeSideBarFromFeedList={closeSideBarFromFeedList} isSideBarOpen={isSideBarOpen}/>
            </div>
            
            
        </div>
        
    )
}

export default App;