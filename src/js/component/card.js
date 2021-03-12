import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="col mb-4">
			<div className="card text-center h-100">
				<img
					className="card-img-top"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
				</div>
				<div className="card-footer">
					<a href={props.buttonUrl} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	imageUrl: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};
