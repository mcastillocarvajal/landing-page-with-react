import React from "react";
import reactlogo from "../../img/reactlogo.png";
import { Card } from "./card.js";

export const CardContainer = () => {
	return (
		<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
			<Card
				title="Card title"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex urna, ultricies vel urna non, feugiat pretium orci. Praesent purus diam, mollis sed elementum vitae."
				imageUrl={reactlogo}
				buttonUrl="#"
				buttonLabel="Find out more!"
			/>
			<Card
				title="Card title"
				text="Fusce tempus, purus nec semper lobortis, nunc turpis facilisis augue, vitae imperdiet quam dolor id."
				imageUrl={reactlogo}
				buttonUrl="#"
				buttonLabel="Find out more!"
			/>
			<Card
				title="Card title"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex urna, ultricies vel urna non, feugiat pretium orci. Praesent purus diam, mollis sed elementum vitae."
				imageUrl={reactlogo}
				buttonUrl="#"
				buttonLabel="Find out more!"
			/>
			<Card
				title="Card title"
				text="Fusce tempus, purus nec semper lobortis, nunc turpis facilisis augue, vitae imperdiet quam dolor id."
				imageUrl={reactlogo}
				buttonUrl="#"
				buttonLabel="Find out more!"
			/>
		</div>
	);
};
