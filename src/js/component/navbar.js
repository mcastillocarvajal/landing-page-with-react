import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
