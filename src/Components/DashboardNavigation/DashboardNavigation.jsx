import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faBars, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './DashboardNavigation.scss';
import './DashboardNavigationTablet.scss';

// const left_arrow = <FontAwesomeIcon icon="check-square" />

function DashboardNavigation(props) {

    
    function handleClick(event){
        event.preventDefault();
        props.toggleSideBar();
    }


    return (
        <header className="dashboard-navbar"> 
            <div className="dashboard-navbar-left-icon"><FontAwesomeIcon icon={faArrowLeftLong} /></div>
            <div className="dashboard-navbar-secondary">Dashboard</div>
            <div className="dashboard-navbar-left-icon"><FontAwesomeIcon icon={faAngleRight} /></div>
            <div className="dashboard-navbar-primary">Social Feed</div>
            <div className="toggle-btn" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
        </header>
    )
}

export default DashboardNavigation;