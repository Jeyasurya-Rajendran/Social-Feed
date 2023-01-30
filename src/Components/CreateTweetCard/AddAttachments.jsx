import React from "react";
import FileAttachment from "./FileAttachment";

function AddAttachment() {
    return (
        <>
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

            <FileAttachment />
        </>
    );
}
