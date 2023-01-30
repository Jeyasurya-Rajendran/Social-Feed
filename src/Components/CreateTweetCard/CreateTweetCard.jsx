import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";
import { ReactMic } from "react-mic";
import AvatarImg from "../Avatar/AvatarImg";
import CustomButton from "../Button/CustomButton";
import TweetPreview from "./TweetPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faMicrophone,
  faStop,
  faVideo,
  faXmark,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import avatar_img from "../Imgs/superman_img.jpg";
import "./CreateTweetCard.scss";
import "./CreateTweetCardTablet.scss";
import "./CreateTweetCardMobile.scss";

function CreateTweetCard(props) {
  const [tweetShowText, setTweetShowText] = useState("");
  const [tweetText, setTweetText] = useState("");
  const [tweetImageSource, setTweetImageSource] = useState("");
  const [tweetDocs, setTweetDocs] = useState("");
  const [tweetDocType, setTweetDocType] = useState("");
  const [attachmentPreview, setAttachmentPreview] = useState("");
  const [isWebCamClicked, setIsWebCamClicked] = useState(false);
  const [isAudioRecorderVisible, setAudioRecorderVisible] = useState(false);
  const [isAudioRecordOn, setIsAudioRecordOn] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const webRef = useRef(null);
  const [textRow, setTextRow] = useState(1);
  let webCamConstraints = {
    width: { min: 250 },
    height: { min: 250 },
  };

  const [tweetInputs, setTweetInputs] = useState({
    tweetText: tweetText,
    tweetImageSource: tweetImageSource,
    tweetDocs: tweetDocs,
    tweetDocType: tweetDocType,
    audioURL : audioURL
  });


  // Adding input - only tweet to state
  function addInput(event) {
    const value = event.target.value;
    let text = value.split("\n");
    let str = text.join("[n]");

    if (text.length < 6) {
      setTextRow(text.length);
    }


    setTweetText(str);
    setTweetShowText(value);
  }

  function addAttachment(event) {
    const reader = new FileReader();
    event.preventDefault();
    let file = event.target.files[0];
    setTweetDocType(file.type);
    setAttachmentPreview(file.name);
    event.target.value = null;
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      reader.onloadend = () => {
        console.log("entered");
        setTweetImageSource(reader.result);
      };
    } else {
      reader.onloadend = () => {
        console.log("Doc entered");
        setTweetDocs(reader.result);

      };
    }
    reader.readAsDataURL(file);
  }

  function removeTweetDoc(event) {
    event.preventDefault();
    setAttachmentPreview("");
    setTweetDocType("");
    setTweetDocs("");
    setTweetImageSource("");
  }

  function webCamButtonClicked(event) {
    event.preventDefault();
    setIsWebCamClicked(!isWebCamClicked);
    setAudioRecorderVisible(false);
  }

  function addWebCamImageScreenshot(event) {
    event.preventDefault();
    // setWebCamImage(webRef.current.getScreenshot());
    setTweetImageSource(webRef.current.getScreenshot());
    setIsWebCamClicked(!isWebCamClicked);
    setAttachmentPreview("Captured Image");
  }

  function addAudioRecorder(event) {
    event.preventDefault();
    setIsWebCamClicked(false);
    setAudioRecorderVisible(!isAudioRecorderVisible);
  }

  function toggleRecording(event) {
    event.preventDefault();
    setIsAudioRecordOn(!isAudioRecordOn);
  }

  function onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  function onStop(recordedBlob) {
    console.log(recordedBlob);
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log("Blob entered");
      setAudioURL(reader.result);
    };

    reader.readAsDataURL(recordedBlob.blob);
    console.log(reader);
  }

  function removeAudioRecorded(event){
    event.preventDefault();
    setAudioURL("");
  }

  // Onclick eventHandling - sending tweet to parent by calling parent function via prop(prop.post)-passing child state as argument , event.preventDefault() used to prevent the current comp from being reloaded on submitting forms
  function addPost(event) {
    event.preventDefault();
    console.log("clicked");

    if (
      tweetText !== "" &&
      (tweetImageSource !== "" ||
      tweetDocs !== "" ||
      audioURL !== "" ||
      true)
    ) {
      console.log(tweetInputs);
      props.addPosts(tweetInputs);
      setTextRow(1);
      setTweetShowText("");
      setTweetText("");
      setTweetImageSource("");
      setTweetDocs("");
      setTweetDocType("");
      setAttachmentPreview("");
      setAudioURL("");
      setAudioRecorderVisible(false);
    } else{
      alert("Enter some text to post!!!");
    }

    
  }

  useEffect(() => {
    setTweetInputs({ tweetText, tweetImageSource, tweetDocs, tweetDocType, audioURL });
  }, [tweetText, tweetImageSource, tweetDocs, tweetDocType, audioURL]);

  // console.log(tweetInputs);

  return (
    <div className="card-container">
      <div className="post-flex">
        <AvatarImg img={avatar_img} />

        <form className="post-text">
          <textarea
            className="post-content"
            onChange={addInput}
            name="tweet"
            rows={textRow}
            cols="40"
            placeholder="Share something here..."
            value={tweetShowText}
          />
          <CustomButton
            name="Post"
            type="normal-button"
            color="contrast"
            isIconRequired={false}
            functionality={addPost}
            isDisabled={tweetShowText}
          />
        </form>
      </div>

      <div className="additional-features">
        <div className="addOn">
          <FontAwesomeIcon icon={faVideo} className="media-icon" />
          Any attachment
        </div>
        <div className="addOn">
          <FontAwesomeIcon icon={faCamera} className="media-icon" />
          Capture it
        </div>
        <div className="addOn">
          <FontAwesomeIcon icon={faMicrophone} className="media-icon" />
          Say it
        </div>
      </div>

      <div className="attachment">
        <input
          type="file"
          onChange={addAttachment}
          className="attachment-file"
        />
        <button onClick={webCamButtonClicked} className="web-cam-button">
          Click
        </button>
        <button onClick={addAudioRecorder} className="audio-button">
          Audio
        </button>
      </div>

      <TweetPreview 
        name="tweet name"
        type={tweetDocType}
        fileURL={tweetDocs}
        removeTweetDoc={removeTweetDoc}
      />

      {/* {attachmentPreview !== "" ? (
        <div className="attachment-preview">
          {attachmentPreview}{" "}
          <div className="cursor"><FontAwesomeIcon icon={faXmark} onClick={removeTweetDoc} /></div>
        </div>
      ) : null} */}
      {isWebCamClicked && (
        <div className="web-cam">
          <Webcam
            ref={webRef}
            videoConstraints={webCamConstraints}
            width={300}
            height={300}
          />
          <button onClick={addWebCamImageScreenshot}>
            <FontAwesomeIcon icon={faCamera} size="2x" />
          </button>
        </div>
      )}

      {isAudioRecorderVisible && (
        <div className="audio-recorder">
          <div className="audio-recorder-display">
            <ReactMic
              record={isAudioRecordOn}
              className="sound-wave"
              onStop={onStop}
              onData={onData}
              strokeColor="#702963"
              backgroundColor="#e3e1e1"
              height = "80"
              width = "200"
            />
          </div>
          <div className="audio-recoder-button">
            <button onClick={toggleRecording} type="button">
              {isAudioRecordOn ? <FontAwesomeIcon icon={faStop} size="2x" border="none" color="red"/>: <FontAwesomeIcon icon={faPlay} size="2x" border="none"/>}
            </button>
          </div>
        </div>
      )}

      {isAudioRecorderVisible && <div className="audio-preview"><audio src={audioURL} controls></audio><FontAwesomeIcon icon={faXmark} onClick={removeAudioRecorded} /></div>}
      {/* {console.log(audioURL)} */}
    </div>
  );
}

export default CreateTweetCard;