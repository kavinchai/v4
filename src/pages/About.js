import React, { useState } from "react";
import "../css/About.css";
import imag from "../imgs/kavin_image.png";
import Navbar from "../components/Navbar";

const About = () => {
	const [myName, setMyName] = useState(true);
	return (
		<>
			<Navbar />
			<div className="about-component">
				<div className="about-container">
					<h1 className="about-header header-txt">
						{"<"}About{"/>"}
					</h1>
					<h2>What is this anyways?</h2>
					<p>
						Hi, my name is{" "}
						<mark
							className="highlight nameMark"
							onClick={() => setMyName((prev) => !prev)}
						>
							{myName === true ? "Kavin Chaisawangwong" : "กวิน ฉายสว่างวงศ์"}
						</mark>{" "}
						and I'm a 24 year old SWE based in New York City. I created this
						website when I was in college. I wanted to showchase what I was
						working on and what my interests were at the time.
					</p>
					<h2>So what now?</h2>
					<p>
						I'm still figuring that out. I want this website to be a place where
						I can share my thoughts, projects, and experiences. I want it to be
						a place where I can learn and grow. I want it to be a place where I
						can connect with others who share similar interests.
					</p>
					<h2>Thats cool, but what do you mean specifically?</h2>
					<p>
						I'll post what I'm studying, what cool photos I've taken recently,
						and other things that might pop into my head from time to time.
					</p>
					{/* <img src={imag} className="about-img-placeholder" alt="kavinImg" /> */}
				</div>
			</div>
		</>
	);
};

export default About;
