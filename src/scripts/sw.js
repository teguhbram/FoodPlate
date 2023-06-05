import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './index.html',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './icons/favicon-32x32.png',
  './icons/favicon-16x16.png',
  '../public/images/heros/hero-image_2.jpg',
  './manifest.json',
  './app.bundle.js',
  './sw.bundle.js',
  'https://restaurant-api.dicoding.dev',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap',
  'https://use.fontawesome.com/b070c8f1df.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    CacheHelper.cachingAppShell([...assetsToCache]),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    CacheHelper.deleteOldCache(),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    CacheHelper.revalidateCache(event.request),
  );
});
