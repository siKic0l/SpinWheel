const CACHE_NAME = "spinwheel-offline-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./menu.html",
  "./asbak.html",
  "./coba.html",

  "./css/style.css",
  "./css/menu.css",
  "./css/coba.css",

  "./js/script.js",
  "./js/spin.js",
  "./js/asbak.js",
  "./js/kaos.js",

  "./assets/asbak.png",
  "./assets/background.jpg",
  "./assets/cobalagi.png",
  "./assets/freespin.png",
  "./assets/kaos.png",
  "./assets/korek.png",
  "./assets/music.mp3",
  "./assets/opening.jpeg",
  "./assets/sticker.png",
  "./assets/spin.wav",
  "./assets/win.wav",
  "./assets/zonk.mp3",

  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
