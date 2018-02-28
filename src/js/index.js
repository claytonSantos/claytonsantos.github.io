var animations = {
	init: function(){
		this.sizeHeight = document.documentElement.clientHeight;
		window.addEventListener('scroll', animations.scrolling);
	},
	getCoords: function(elem){
		return elem.getBoundingClientRect().top + pageYOffset;
	},
	scrolling: function(){
		let animatables = document.querySelectorAll(".animatable");
		if (animatables.length == 0) {
			window.removeEventListener('scroll', animations.scrolling);
		}
		for (var i = 0; i < animatables.length; ++i ) {
			var diff = animations.getCoords(animatables[i]) - animations.sizeHeight;
			var scroll = window.pageYOffset;
			if(scroll > diff){
				animatables[i].classList.remove('animatable');
				animatables[i].classList.add('animated');
			}
		}
	}
};
animations.init();

	if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('./sw.js').then(function(registration) {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}).catch(function(err) {
			console.log('ServiceWorker registration failed: ', err);
		});
	});
}