import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import MyCard from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex flex-column grid gap-5">
			<NavBar />
			<Jumbotron />
			<div className="row grid gap-5 justify-content-center">
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
