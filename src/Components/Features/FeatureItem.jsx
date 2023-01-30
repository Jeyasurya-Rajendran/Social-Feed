import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Features.scss";

function FeatureItem(props) {
  const { icon, name, notification } = props;
  let [isIconPresent, isNamePresent, isNotificationPresent] = [false];

  if (icon !== null) {
    isIconPresent = true;
  }
  if (name !== null) {
    isNamePresent = true;
  }
  if (notification !== null) {
    isNotificationPresent = true;
  }

  return (
    <div className="features-item">
      <div className="feature-icon">
        {isIconPresent && <FontAwesomeIcon icon={props.icon} />}
      </div>
      <div className="features-context">
        {isNamePresent && <div className="features-title">{props.name}</div>}
        {isNotificationPresent && <div className="features-notify">{props.notification}</div>}
      </div>
    </div>
  );
}

export default FeatureItem;
