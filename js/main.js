
let button = document.querySelector(".menu-button");
let menu = document.querySelector(".test");

	button.addEventListener("click", function(){
		console.log("click!");
		menu.classList.toggle("hidden");
	});


