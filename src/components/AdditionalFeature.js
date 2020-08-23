import React from 'react';
import { addFeature } from "../actions/carActions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
      disabled={props.feature.disabled}
      onClick={() => props.addFeature(props.feature)}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
