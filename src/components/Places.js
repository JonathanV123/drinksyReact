import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AddItemForm from './AddItemForm.js';
import RemovePlace from './RemovePlace.js';
// const Places = ({ match }) => console.log(props) || (
//     <div id="placesContainer">
//         <ul id="nav">
//             <Link to='/'>Home</Link>
//             <Link to={`${match.url}/addPlace`}>Add</Link>
//             <Link to={`${match.url}/removePlace`}>Remove</Link>
//         </ul>
//         {/* <Route path={`${match.url}/addPlace`} render={(props) => <AddItemForm {...props} onAddItemChange={this.props.onAddItemChange} />}/> */}
//         <Route path={`${match.url}/removePlace`} component={RemovePlace} />
//     </div>
// )
export default Places;
