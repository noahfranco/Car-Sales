import React from 'react';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

const App = (props) => {
  
console.log("here is props and app", props); 

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} additionalPrice={props.additionalPrice}  />
        <Total car={props.car}  />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
car: state.car,
store: state.store, 
additionalPrice: state.additionalPrice 
  }
}
// Connect Components 
export default connect(mapStateToProps, {})(App);
