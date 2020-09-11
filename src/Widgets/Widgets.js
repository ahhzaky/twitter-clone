import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Input" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="zakysans"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://web.facebook.com/ahmad.zaky.9041"}
          options={{ text: "#reactjs is awesome", via: "zakysans" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
