/* eslint-disable no-lone-blocks */
import React from "react";
import "././Button.css";

export default function Button (props){
	let classes = "button";
	classes += props.operation ? " operation" : "";
	classes += props.double ? " double" : "";
	classes += props.triple ? " triple" : "";

	return(
		<button
		className={classes}
		onClick={ e => props.click(props.label)}
		//onClick={e => props.click(props.label)} ou e => props.click(e.target.innerHTML)
		>
			{props.label}
		</button>
	)
}





{/* export default function Button(props) {
	let classes = "button";
	classes += props.operation ? " operation" : "";
	classes += props.double ? " double" : "";
	classes += props.triple ? " triple" : "";

	return (
				<button
		      onClick={e => props.click && props.click(props.label)} funcionamento?
					className={
						classes
						  `button
						${props.operation ? 'operation' : ''}
						${props.double ? 'double' : ''}
						${props.triple ? 'triple' : ''}`
					}
				>
					{props.label}
				</button>
			);
		} */}