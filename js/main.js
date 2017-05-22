const mobileNav = (function(){
	let button = document.querySelector(".menu-button");
	let menu = document.querySelector(".dropdown");

	button.addEventListener("click", function(){
		console.log("click!");
		menu.classList.toggle("hidden");
	});
}());



