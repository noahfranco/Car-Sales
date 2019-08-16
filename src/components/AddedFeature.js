import React from 'react';
import { connect } from 'react-redux';
import { deleteFeature } from "../actions/Actions.js"; 

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.deleteFeature=(props.deleteFeature)}>X</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps = (state, ownProps) => {
  return state; 
}

export default connect(mapStateToProps, {deleteFeature})(AddedFeature)