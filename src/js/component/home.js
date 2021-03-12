import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { CardContainer } from "./card-container.js";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron
				title="A warm welcome!"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex urna, ultricies vel urna non, feugiat pretium orci. Praesent purus diam, mollis sed elementum vitae."
				buttonLabel="Call to action!"
				buttonURL="#"
			/>
			<CardContainer />
			<Footer />
		</div>
	);
}
