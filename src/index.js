import React from "react";
import ReactDOM from "react-dom/client";

function App() {
	return (
		<div>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Pizza() {
	return (
		<div>
			<img src="pizzas/spinaci.jpg" alt="Spinaci Pizza" />
			<h2>Pizza Spinaci</h2>
			<p>Tomato, mozarella, spinach, and ricotta cheese</p>
		</div>
	);
}

function Header() {
	return <h1>Fast REACT Restaurant</h1>;
}

function Menu() {
	return (
		<div>
			<h2>Our Menu</h2>
			<Pizza />
			<Pizza />
			<Pizza />
		</div>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closedHour = 23;
	const isOpen = hour >= openHour && hour < closedHour;

	isOpen
		? alert("The restaurant is open!")
		: alert("The restaurant is closed!");

	return (
		<footer>
			{new Date().toLocaleDateString()} © 2025 Fast REACT Restaurant - JP
			studies
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
