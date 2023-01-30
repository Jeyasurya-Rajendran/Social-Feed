import React from "react";
import FeatureItem from "./FeatureItem";

// import featuresDb from "./db/FeaturesDb";
// import additionalFeatures from "./db/AdditionalFeaturesDb";

function FeatureList(props){

    const {title, featuresDb, isMoreFeaturesRequired} = props;
    
    return (
        <div>
            {(title !== null) && <div className="heading-primary">{title}</div>}
            {isMoreFeaturesRequired? 
                featuresDb.map((feature) => {
                return (
                    <FeatureItem
                        key={feature.id}
                        id={feature.id}
                        icon={feature.icon}
                        name={feature.name}
                        notification={feature.notification}
                    />
                );
            }):
            featuresDb.slice(0,featuresDb[0].displayCount).map((feature) => {
                return (
                    <FeatureItem
                        key={feature.id}
                        id={feature.id}
                        icon={feature.icon}
                        name={feature.name}
                        notification={feature.notification}
                    />
                );
            })    
        }
           
        </div>
    );
}

export default FeatureList;