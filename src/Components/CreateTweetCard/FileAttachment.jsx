import React, { useState } from "react";
import TweetPreview from "./TweetPreview";

export default function FileAttachment() {

    const [tweetFile, setTweetFile] = useState({
        name : '',
        type : '',
        fileURL : ''
    });

    function addAttachment(event){
        event.preventDefault();
        let file = event.target.files[0];
        let type = file.type;
        let name = file.name;
        event.target.value = null;
        const reader = new FileReader();

        reader.onloadend(()=>{
            setTweetFile({
                name:name,
                type:type,
                fileUrl:reader.result
            })
        });

        reader.readAsDataURL(file);
    }

    return (
        <>
            <input
                type="file"
                onChange={addAttachment}
                className="attachment-file"
            />

            <TweetPreview 
                name={tweetFile.name}
                type={tweetFile.type}
                fileURL={tweetFile.fileURL}
                
            />
        </>
    )
}