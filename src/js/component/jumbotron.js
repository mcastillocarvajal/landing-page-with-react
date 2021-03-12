import React from "react";
import PropTypes from "prop-types";

const myStyle = {
	borderStyle: "solid",
	borderColor: "white",
	marginTop: "5rem"
};

export const Jumbotron = props => {
	return (
		<div className="jumbotron" style={myStyle}>
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.text}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string
};
