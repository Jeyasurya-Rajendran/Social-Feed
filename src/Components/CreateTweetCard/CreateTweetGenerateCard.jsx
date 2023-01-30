import React, {useRef,useEffect} from "react";
import AvatarImg from "../Avatar/AvatarImg";
import CustomButton from "../Button/CustomButton";
import avatar_img from "../Imgs/superman_img.jpg";
import "./CreateTweetGenerateCard.scss";


export default function CreateTweetGenerateCard(){

    const tweetTextRef = useRef(null);

    // useEffect(()=>{
    //     localStorage.setItem("TweetData",JSON.stringify(tweetTextRef));
    // },[tweetTextRef]);

    return (
        <>
            <div className="card-container">
                <div className="card-input">
                    <AvatarImg img={avatar_img}/>
                    <textarea className="card-textarea" ref={tweetTextRef} placeholder="Share something here..."/>
                    <CustomButton 
                        name="post"
                        type="normal-button"
                        color="contrast"
                        isIconRequired={false}
                    />

                </div>
            </div>
        </>
    )

}