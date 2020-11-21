import React from 'react';
import web from "../src/images/1.jfif";
import {NavLink} from 'react-router-dom';
const Cards =(props)=>{
	return (
		<>
			<div className ="col-md-4 col-10 ma-auto">
		<div className="card">
  <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Learn as your wish It's gonna help you.</p>
    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
		</>
		);
};
export default Cards;