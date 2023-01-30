import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./CustomButton.scss";

function CustomButton(props) {
  const {
    name,
    type,
    color,
    isIconRequired,
    icon,
    functionality,
    isDisabled,
  } = props;

  const checkDisabled = checkButtonActive(isDisabled);
  const buttonStateClass = checkDisabled?"button-disabled":"button-active";

  function buttonAction(event) {
    event.preventDefault();
    functionality(event);
  }

  function checkButtonActive(isDisabled){
    if(isDisabled === "")
      return true;
    else
      return false;
  }

  function findButtonColor(color) {
    if (color === "dark") {
      return "button-dark";
    } else if (color === "contrast") {
      return "button-contrast";
    }

    return "button-light"
  }

  let buttonColorClass = findButtonColor(color);

  return (
    <button
      className={`${type} ${buttonColorClass} ${buttonStateClass}`}
      onClick={buttonAction}
      disabled={checkDisabled}
    >
      {name} {isIconRequired && <FontAwesomeIcon icon={icon} />}
    </button>
  );
}

export default CustomButton;
