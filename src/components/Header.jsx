import React, { useRef } from 'react';
import useMobileMenu from '../hooks/useMobileMenu';

const Header = () => {
	const menuRef = useRef();
	const toggleRef = useRef();
	const { toggleMobileMenu, closeMobileMenu } = useMobileMenu(menuRef, toggleRef);

	return (
		<header className="appbar">
			<div className="logo"></div>
			<nav className="nav-links">
				<a href="#">Features</a>
				<a href="#">How it Works</a>
				<a href="#">Why Choose Us</a>
				<a href="#">Reviews</a>
				<a href="#">FAQs</a>
			</nav>
			<button className="action-btn">CTA Title</button>

			<div className="mobile-menu-toggle" ref={toggleRef} onClick={toggleMobileMenu}>
				<div className="hamburger"></div>
				<div className="hamburger"></div>
				<div className="hamburger"></div>
			</div>

			<div className="mobile-menu" ref={menuRef}>
				<nav className="mobile-nav-links">
					<a href="#" onClick={closeMobileMenu}>Features</a>
					<a href="#" onClick={closeMobileMenu}>How it Works</a>
					<a href="#" onClick={closeMobileMenu}>Why Choose Us</a>
					<a href="#" onClick={closeMobileMenu}>Reviews</a>
					<a href="#" onClick={closeMobileMenu}>FAQs</a>
				</nav>
				<button className="mobile-action-btn" onClick={closeMobileMenu}>CTA Title</button>
			</div>
		</header>
	);
};

export default Header;