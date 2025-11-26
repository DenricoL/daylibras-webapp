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
	document.body.classList.toggle("dark");

	// Troca Ã­cone do modo (lua/sol)
	const moonImg = document.querySelector('.moon img');
	moonImg.src = document.body.classList.contains("dark") ? "img/lightmode.png"
		: "img/darkmode.png";

	// Troca cor da logo `DayLibras` (claro/escuro)
	const logoImg = document.querySelector('header img[src*="logo"]');
	if (logoImg) {
		logoImg.src = document.body.classList.contains("dark") ? "img/darklogo.png"
			: "img/logo.png";
	}

	// Troca cor do menu hamburguer (claro/escuro)
	const menuImg = document.querySelector('.menu img');
	if (menuImg) {
		menuImg.src = document.body.classList.contains("dark") ? "img/darkmenu.png"
			: "img/menu.png";
	}

	// Troca cor do login (claro/escuro)
	const loginImg = document.querySelector('.box img[src*="login"]');
	if (loginImg) {
		loginImg.src = document.body.classList.contains("dark") ? "img/darklogin.png"
			: "img/login.png";
	}
	
	// Troca cor da imagem do perfil (claro/escuro)
	const profileImg = document.querySelector('.picture img');
	if (profileImg) {
		profileImg.src = document.body.classList.contains("dark") ? "img/profile/lightProfile.png"
			: "img/profile/picture.png";
	}

	// sound effect ao clicar no toggle
	const audioSrc = document.body.classList.contains("dark") ? "audio/bubble-popLua.mp3"
		: "audio/bubble-popSol.mp3";
	const audio = new Audio(audioSrc);
	audio.play();
}
