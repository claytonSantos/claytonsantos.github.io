let $ = (selector) => document.querySelector(selector);

let $s = (selector) => document.querySelectorAll(selector);

//// Here's the helper function that I use instead of document.querySelectorAll. It creates an
//// array of DOM nodes, which I think is useful because array methods like forEach() are ]
//// pretty rad.
function getDomNodeArray(selector) {
	let elemCollection = document.querySelectorAll(selector);
	// coerce the DOM collection into an array
	let elemArray = Array.prototype.slice.apply(elemCollection);
	return elemArray;
}

let Theme = {
	iconLightMode: $("#enableLightMode"),
	iconDarkMode: $("#enableDarkMode"),
	htmlElem: $("body"),

	init() {
		this.addListeners();
	},

	toggleTheme() {
		this.htmlElem.classList.toggle("theme--light");
	},

	addListeners() {
		this.iconLightMode.addEventListener("click", () => this.toggleTheme());
		this.iconDarkMode.addEventListener("click", () => this.toggleTheme());
	},
};

window.addEventListener("load", function () {
	Theme.init();
});
