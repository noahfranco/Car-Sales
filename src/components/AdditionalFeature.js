import React from 'react';
import { toggleAddFetures } from "../actions/Actions.js"
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log("Here is props and aditional feature", props); 
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() =>  props.toggleAddFetures
        (props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = (state, ownProps) => {
  return state; 
}

export default connect(mapStateToProps, {toggleAddFetures})(AdditionalFeature)