import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TweetPreview(props){

    const {name, type, fileURL, removeTweetDoc} = props;

    // console.log(props);

    function removeDoc(event){
        props.removeTweetDoc(event );
    }


    return(
        <>
            {(type === ("image/jpg" || "image/jpeg" || "image/png")) && <div className="attachment-preview"><img src={fileURL} alt="Posted Image"/><div className="cursor"><FontAwesomeIcon icon={faXmark} onClick={removeDoc}/></div></div>}
            {(type === "application/pdf") && <><a href={fileURL}>{name}</a><FontAwesomeIcon icon={faXmark} onClick={removeDoc}/></>}
            {(type === ("video/webm" || "video/mp4" || "video/ogg")) && <><video src={fileURL} alt="Posted Video" controls/><FontAwesomeIcon icon={faXmark} onClick={removeDoc}/></>}
            {(type === ("audio/mp3" || "audio/wav" || "audio/mpeg")) && <><audio src={fileURL} controls/><FontAwesomeIcon icon={faXmark} onClick={removeDoc}/></>}
            
        </>
    )
}