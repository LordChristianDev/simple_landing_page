
// -- Opens Mobile Menu
function toggleMobileMenu() {
	const mobileMenu = document.getElementById('mobileMenu');
	const toggle = document.querySelector('.mobile-menu-toggle');

	if (mobileMenu.classList.contains('active')) {
		mobileMenu.classList.remove('active');
		toggle.classList.remove('active');
	} else {
		mobileMenu.classList.add('active');
		toggle.classList.add('active');
	}
}

// -- Closes Mobile Menu
function closeMobileMenu() {
	const mobileMenu = document.getElementById('mobileMenu');
	const toggle = document.querySelector('.mobile-menu-toggle');

	mobileMenu.classList.remove('active');
	toggle.classList.remove('active');
}

// -- In-charge of Closing the Menu when you Click Outside
document.addEventListener('click', function (event) {
	const mobileMenu = document.getElementById('mobileMenu');
	const toggle = document.querySelector('.mobile-menu-toggle');

	if (!toggle.contains(event.target) && !mobileMenu.contains(event.target)) {
		mobileMenu.classList.remove('active');
		toggle.classList.remove('active');
	}
});

// -- In-charge of Closing Menu when size Reaches Desktop Size
window.addEventListener('resize', function () {
	if (window.innerWidth > 900) {
		const mobileMenu = document.getElementById('mobileMenu');
		const toggle = document.querySelector('.mobile-menu-toggle');

		mobileMenu.classList.remove('active');
		toggle.classList.remove('active');
	}
});
