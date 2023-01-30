import React from "react";
import AvatarImg from "../Avatar/AvatarImg";

function Profile(props) {
    return (
        <div className="profile-info">
            <AvatarImg
                img = {props.img}
            />
            <div className="profile-text">
                <div className="profile-name">{props.name}</div>
                <div className="profile-position">{props.position}</div>
                <div className="date">{props.date}</div>
            </div>
            
        </div>
    )
}

export default Profile;