
import React, { useRef, useState, useEffect, useCallback } from 'react';

// -- Custom hook for mobile menu
const useMobileMenu = (menuRef, toggleRef) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// -- Open Menu
	const toggleMobileMenu = useCallback(() => {
		setIsMenuOpen(prev => !prev);
	}, []);

	// -- Close Menu
	const closeMobileMenu = useCallback(() => {
		setIsMenuOpen(false);
	}, []);

	useEffect(() => {
		const menu = menuRef.current;
		const toggle = toggleRef.current;

		if (menu && toggle) {
			if (isMenuOpen) {
				menu.classList.add('active');
				toggle.classList.add('active');
			} else {
				menu.classList.remove('active');
				toggle.classList.remove('active');
			}
		}
	}, [isMenuOpen]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			const menu = menuRef.current;
			const toggle = toggleRef.current;

			if (menu && toggle && !toggle.contains(event.target) && !menu.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 900) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		isMenuOpen,
		toggleMobileMenu,
		closeMobileMenu
	};
};

export default useMobileMenu;