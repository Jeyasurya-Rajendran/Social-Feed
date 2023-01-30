import React, { useState, useEffect } from "react";

import CreateTweetCard from "../CreateTweetCard/CreateTweetCard";
import CreateTweetGenerateCard from "../CreateTweetCard/CreateTweetGenerateCard";
import TweetCard from "../TweetCard/TweetCard";

import "./FeedPanel.scss";
import "./FeedPanelTablet.scss";
import "./FeedPanelMobile.scss";
import avatar_img from "../Imgs/superman_img.jpg";

import moment from "moment";

function FeedPanel(props) {
  // State for tweet feed storage
  const [tweets, setTweets] = useState([]);

  function closeSideBar(){
    props.closeSideBarFromFeedList();
  }

  function addPosts(tweetInputs) {
    const {tweetText,tweetImageSource,tweetDocs,tweetDocType,audioURL} = tweetInputs;

    setTweets((prevTweet) => {
      return [
        {
          id: new Date().getTime(),
          img: avatar_img,
          name: "Jeyasurya",
          position: "ASE",
          date: moment().format(),
          tweetText: tweetText,
          tweetImg: tweetImageSource,
          tweetDoc: tweetDocs,
          tweetDocType: tweetDocType,
          tweetAudioRecorded: audioURL
        },
        ...prevTweet,
      ];
    });
  }

  function deletePost(id){
    const filteredPost = tweets.filter((tweet) => tweet.id !== id);
    setTweets(filteredPost);
  }

  function deleteAllPost(){
    setTweets([]);
  }

  // GetItem's useEffect need to stay 1st, so that when reloads local storage don't assign to initial [](empty array)
  useEffect(() => {
    const localTweet = localStorage.getItem("Tweet");
    if (localTweet !== null) {
      setTweets(JSON.parse(localTweet));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Tweet", JSON.stringify(tweets));
  }, [tweets]);

  return (
    <div className="feed-panel" onClick={closeSideBar}>
      <CreateTweetCard addPosts={addPosts} />
      <div>
        {tweets.map((tweet) => {
          return (
            <TweetCard
              key={tweet.id}
              id={tweet.id} 
              img={tweet.img}
              name={tweet.name}
              position={tweet.position}
              date={tweet.date}
              tweetText={tweet.tweetText}
              tweetImg={tweet.tweetImg}
              tweetDoc={tweet.tweetDoc}
              tweetDocType={tweet.tweetDocType}
              tweetAudioRecorded={tweet.tweetAudioRecorded
              }
              deletePost={deletePost}
              deleteAllPost={deleteAllPost}
            />
          );
        })}
      </div>
      {/* <CreateTweetGenerateCard /> */}
    </div>
  );
}

export default FeedPanel;
