import React, { useState } from "react";
import Profile from "../Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis} from "@fortawesome/free-solid-svg-icons";
import "./TweetCard.scss";
import "./TweetCardTablet.scss";
import "./TweetCardMobile.scss";

import moment from "moment";

function TweetCard(props) {
  const {
    id,
    img,
    name,
    position,
    date,
    tweetText,
    tweetImg,
    tweetDoc,
    tweetDocType,
    tweetAudioRecorded,
    deletePost,
    deleteAllPost,
  } = props;

  const duration = moment(date).fromNow();
  const isTweetImage = isTweetImagePresent(tweetImg);
  const isTweetText = isTweetContentPresent(tweetText);
  const isTweetDocPdf = isTweetDocPdfPresent(tweetDocType);
  const isTweetDocVideo = isTweetDocVideoPresent(tweetDocType);
  const isTweetDocAudio = isTweetDocAudioPresent(tweetDocType);
  const isTweetAudioRecorded = isTweetAudioRecordedPresent(tweetAudioRecorded);
  const [isPostOptionClicked, setIsPostOptionClicked] = useState(false);
  
  let tweetTextDecoded = tweetAddNewLine(tweetText);

  function tweetAddNewLine(tweetText){
    let text = tweetText.split("[n]");
    let str = [];
    str = [...str, text];
    return str;
  }


  function isTweetImagePresent(tweetImg){
    return (tweetImg !== "")? true: false;
  }

  function isTweetContentPresent(tweetText) {
    return (tweetText !== "")? true:false;
  }

  function isTweetDocPdfPresent(tweetDocType){
    return (tweetDocType === "application/pdf")? true:false;
  }

  function isTweetDocVideoPresent(tweetDocType){
    return (tweetDocType === "video/mp4" || tweetDocType === "video/webm")? true:false;
  }

  function isTweetDocAudioPresent(tweetDocType){
    return (tweetDocType === "audio/mpeg")? true:false;
  }

  function isTweetAudioRecordedPresent(tweetAudioRecorded){
    return (tweetAudioRecorded !== "")? true:false;
  }

  function handlePostOptions() {
    setIsPostOptionClicked(!isPostOptionClicked);
  }

  function deletePostCard() {
    // setIsDeletePost(!isDeletePost);
    deletePost(id);
    handlePostOptions();
    // setIsDeletePost(!isDeletePost);
  }

  function deleteAllPostCard() {
    deleteAllPost();
    handlePostOptions();
  }

  return (
    <div className="card-container">
      <div className="card-title">
        <div className="card-header">
          <Profile img={img} name={name} position={position} date={duration} />
        </div>
        <div className="post-options">
          <div className="cursor"><FontAwesomeIcon icon={faEllipsis} onClick={handlePostOptions} /></div>
          <div style={{ display: isPostOptionClicked ? "block" : "none" }}>
            <ul>
              <li onClick={deletePostCard}><div>Delete</div></li>
              <li onClick={deleteAllPostCard}><div>Delete All</div></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-content">
        {/* {isTweetText ? <div>{tweetTextDecoded}</div> : null} */}
        {isTweetText ? tweetTextDecoded[0].map((tweetTextIterated)=>{
          return (
            <div>{tweetTextIterated}<br/></div>
          )
        }) : null}
        {isTweetImage && <img src={tweetImg} alt="Tweet Posted" className="tweet-img"/>}
        {isTweetDocPdf && <a href={tweetDoc} download >Tweet Document File</a>}
        {isTweetDocVideo && <video src={tweetDoc} alt="Tweet Docs" style={{width:"300px", height: "fit-content" }} controls/>}
        {isTweetDocAudio && <audio src={tweetDoc} controls />}
        {isTweetAudioRecorded && <audio src={tweetAudioRecorded} controls download="audio_file.mp3"/>}


      </div>
    </div>
  );
}

export default TweetCard;
