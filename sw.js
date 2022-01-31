// var CACHE_NAME = 'cs-cache-v1';
// var urlsToCache = [
// 	'/',
// 	'public/css/index.min.css',
// 	'public/images/banner.jpg', 
// 	'public/js/index.min.js',
// 	'public/sprite.svg'
// ];

// self.addEventListener('install', function(event) {
// 	event.waitUntil(
// 		caches.open(CACHE_NAME)
// 			.then(function(cache) {
// 				return cache.addAll(urlsToCache);
// 			})
// 	);
// });

// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		caches.match(event.request)
// 			.then(function(response) {
// 				if (response) {
// 					return response;
// 				}
// 				return fetch(event.request);
// 			}
// 		)
// 	);
// });
