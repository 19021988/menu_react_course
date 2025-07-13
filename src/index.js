import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Pizza(props) {
	console.log(props);
	// Check if the pizza is sold out - Early return pattern
	// if (props.pizzaObject.soldOut) {
	// 	return (
	// 		<li className="pizza sold-out">
	// 			<img src={props.pizzaObject.photoName} alt={props.name} />
	// 			<div className="pizza-info">
	// 				<h3>{props.pizzaObject.name}</h3>
	// 				<p>{props.pizzaObject.ingredients}</p>
	// 				<span className="price">SOLD OUT</span>
	// 			</div>
	// 		</li>
	// 	);
	// }
	// // If not sold out, render the pizza normally
	// return (
	// 	<li className="pizza">
	// 		<img src={props.pizzaObject.photoName} alt={props.name} />
	// 		<div className="pizza-info">
	// 			<h3>{props.pizzaObject.name}</h3>
	// 			<p>{props.pizzaObject.ingredients}</p>
	// 			<span className="price">{props.pizzaObject.price}</span>
	// 		</div>
	// 	</li>
	// );

	// Using a ternary operator to conditionally render the pizza
	return (
		<li className={`pizza ${props.pizzaObject.soldOut ? "sold-out" : ""}`}>
			<img src={props.pizzaObject.photoName} alt={props.name} />
			<div className="pizza-info">
				<h3>{props.pizzaObject.name}</h3>
				<p>{props.pizzaObject.ingredients}</p>
				<span className="price">
					{props.pizzaObject.soldOut ? "SOLD OUT" : props.pizzaObject.price}
				</span>
			</div>
		</li>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast REACT Restaurant Co.</h1>
		</header>
	);
}

function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>

			<ul className="pizzas">
				{pizzaData.map((pizza) => (
					<Pizza pizzaObject={pizza} key={pizza.name} />
				))}
			</ul>

			{/* <Pizza
				name="Pizza Spinaci"
				ingredients="Tomato, mozarella, spinach, and ricotta cheese"
				photoName="pizzas/spinaci.jpg"
				price="12 EUR"
			/>*/}
		</main>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closedHour = 23;
	const isOpen = hour >= openHour && hour < closedHour;

	// isOpen
	// 	? console.log("The restaurant is open!")
	// 	: console.log("The restaurant is closed!");

	return (
		<footer className="footer">
			<div className="order">
				<p>
					{new Date().toLocaleDateString()} © 2025 Fast REACT Restaurant – JP
					studies
				</p>

				{isOpen ? (
					<button className="btn">Order</button>
				) : (
					<p>
						We are open from {openHour}:00 to {closedHour}:00. Please come back
						tomorrow!
					</p>
				)}
			</div>
		</footer>
	);
}

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

// Render the App component into the root element REACT v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
