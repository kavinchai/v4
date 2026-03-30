import { useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { scrollTo } from "../helper";

const Navbar = () => {
	const [myName, setMyName] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	const handleMobileNav = (selector) => {
		scrollTo(selector);
		setMenuOpen(false);
	};

	return (
		<div className="navBarComponent">
			<div className="navBarContainer">
				<div className="navNameContainer">
					<div
						className={
							myName === true
								? "firstName firstNameEng navName"
								: "firstName firstNameTh navName"
						}
						onClick={() => setMyName((prev) => !prev)}
					>
						{myName === true ? "kavin" : "กวิน"}
					</div>
					<div
						className={
							myName === true
								? "lastName lastNameEng navName"
								: "lastName lastNameTh navName"
						}
						onClick={() => setMyName((prev) => !prev)}
					>
						{myName === true ? "chai" : "ฉาย"}
					</div>
				</div>
				<div className="navMenu">
					{location.pathname === "/" ? (
						<>
							<button
								className="navBtn"
								onClick={() => scrollTo(".about-component")}
							>
								about
							</button>
							<button
								className="navBtn"
								onClick={() => scrollTo(".exp-component")}
							>
								experience
							</button>
							<button
								className="navBtn"
								onClick={() => scrollTo(".proj-component")}
							>
								projects
							</button>
						</>
					) : location.pathname === "/notes" ? (
						<Link to="/">
							<button className="navBtn">home</button>
						</Link>
					) : null}
				</div>
				<button
					className="hamburger"
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-label="Toggle menu"
				>
					<span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
					<span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
					<span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
				</button>
			</div>
			{menuOpen && (
				<div className="mobileMenu">
					{location.pathname === "/" ? (
						<>
							<button
								className="mobileMenuBtn"
								onClick={() => handleMobileNav(".about-component")}
							>
								about
							</button>
							<button
								className="mobileMenuBtn"
								onClick={() => handleMobileNav(".exp-component")}
							>
								experience
							</button>
							<button
								className="mobileMenuBtn"
								onClick={() => handleMobileNav(".proj-component")}
							>
								projects
							</button>
						</>
					) : location.pathname === "/notes" ? (
						<Link to="/">
							<button
								className="mobileMenuBtn"
								onClick={() => setMenuOpen(false)}
							>
								home
							</button>
						</Link>
					) : null}
				</div>
			)}
		</div>
	);
};

export default Navbar;
