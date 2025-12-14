// Barra de Navegação
const menuButton = document.querySelector('.menu');
const closeButton = document.querySelector('.closebtn');
const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
	sidebar.style.width = '350px';
	menu.style.display = none;
});

closeButton.addEventListener('click', () => {
	sidebar.style.width = '0';
});

// Modo Escuro
function toggleDarkMode() {
	const isDark = document.body.classList.toggle("dark");

	// salva preferência
	localStorage.setItem("theme", isDark ? "dark" : "light");

	updateDarkModeUI(isDark);

	// som apenas no clique
	const audioSrc = isDark
		? "audio/bubble-popLua.mp3"
		: "audio/bubble-popSol.mp3";

	new Audio(audioSrc).play();
}

function updateDarkModeUI(isDark) {
	const moonImg = document.querySelector('.moon img');
	if (moonImg) {
		moonImg.src = isDark ? "img/lightmode.png" : "img/darkmode.png";
	}

	const logoImg = document.querySelector('img.logo-main');
	if (logoImg) {
		logoImg.src = isDark ? "img/darklogo.png" : "img/logo.png";
	}

	const logoAltImg = document.querySelector('img.logo-alt');
	if (logoAltImg) {
		logoAltImg.src = isDark
			? "img/darklogoalternativa.png"
			: "img/logoalternativa.png";
	}


	const menuImg = document.querySelector('.menu img');
	if (menuImg) {
		menuImg.src = isDark ? "img/darkmenu.png" : "img/menu.png";
	}

	const loginImg = document.querySelector('.box img[src*="login"]');
	if (loginImg) {
		loginImg.src = isDark ? "img/darklogin.png" : "img/login.png";
	}

	const profileImg = document.querySelector('.picture img');
	if (profileImg) {
		profileImg.src = isDark
			? "img/profile/lightProfile.png"
			: "img/profile/picture.png";
	}
}

function loadDarkMode() {
	const savedTheme = localStorage.getItem("theme");
	const isDark = savedTheme === "dark";

	if (isDark) {
		document.body.classList.add("dark");
	}

	updateDarkModeUI(isDark);
}

