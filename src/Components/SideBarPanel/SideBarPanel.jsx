import React, { useState } from "react";

import Profile from "../Profile/Profile";
import FeatureList from "../Features/FeatureList";
import CustomButton from "../Button/CustomButton";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import profile_pic from "../Imgs/superman_img.jpg";

import "./SideBarPanel.scss";
import "./SideBarPanelTablet.scss";
import "./SideBarPanelMobile.scss";

import featuresDb from "../Features/db/FeaturesDb";
import additionalFeaturesDb from "../Features/db/AdditionalFeaturesDb";

function SideBarPanel(props) {
  const [isMoreFeaturesRequired, setIsMoreFeaturesRequired] = useState(false);
  const [isMoreAdditionalFeaturesRequired, setIsMoreAdditoionalFeaturesRequired] = useState(false);

  function changeFeatures() {
    setIsMoreFeaturesRequired(!isMoreFeaturesRequired);
  }

  function changeAdditionalFeatures() {
    setIsMoreAdditoionalFeaturesRequired(!isMoreAdditionalFeaturesRequired);
  }

  const sideBarPanelClass = props.isSideBarOpen
    ? "side-bar-toggle"
    : "side-bar-panel";

  return (
    <div className={sideBarPanelClass}>
      <div>
        <Profile img={profile_pic} name="Jeyasurya" />
      </div>
      <div className="features">
        <FeatureList
          title={null}
          featuresDb={featuresDb}
          isMoreFeaturesRequired={isMoreFeaturesRequired}
        />

        <div>
          <CustomButton
            name={isMoreFeaturesRequired ? "See Less" : "See More"}
            type="full-button"
            color="contrast"
            isIconRequired={true}
            icon={isMoreFeaturesRequired ? faAngleUp : faAngleDown}
            functionality={changeFeatures}
          />
        </div>
      </div>

      {/* Recently Added */}
      <div className="recently-added">
        <FeatureList
          title="Recently Added"
          featuresDb={additionalFeaturesDb}
          isMoreFeaturesRequired={isMoreAdditionalFeaturesRequired}
        />

        <div>
          <CustomButton
            name={isMoreAdditionalFeaturesRequired ? "See Less" : "See More"}
            type="full-button"
            color="contrast"
            isIconRequired={true}
            icon={isMoreAdditionalFeaturesRequired ? faAngleUp : faAngleDown}
            functionality={changeAdditionalFeatures}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBarPanel;
