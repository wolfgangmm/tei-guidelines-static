const CACHE = "guidelines-resources";
const CACHE_STATIC = "guidelines-static-resources"

importScripts('/resources/scripts/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.precaching.cleanupOutdatedCaches();

workbox.precaching.precacheAndRoute([{"revision":"604d1e5008c94cefcba00aa41aecd39f","url":"css/tei.css"},{"revision":"260e461532d0ac21e374996f36747308","url":"resources/css/prismjs/prism-coy.css"},{"revision":"71b9932d9d32092edc342f5c433fa88e","url":"resources/css/prismjs/prism-coy.min.css"},{"revision":"1e8d6e1a8ac0dd71207abdb3951f4cf3","url":"resources/css/prismjs/prism-dark.css"},{"revision":"0c0d287d69147c0b0bae67dd7d6ce7ce","url":"resources/css/prismjs/prism-dark.min.css"},{"revision":"4ad7a5bdc0d4613381fa7b95cfe97496","url":"resources/css/prismjs/prism-funky.css"},{"revision":"54768bff1033c3f68fb8e5998931af42","url":"resources/css/prismjs/prism-funky.min.css"},{"revision":"aa66583a70a798af500be4538725848d","url":"resources/css/prismjs/prism-okaidia.css"},{"revision":"8f13447e86a47622c128ecc3269a022b","url":"resources/css/prismjs/prism-okaidia.min.css"},{"revision":"e043b46d9424d589d56fba0190b80771","url":"resources/css/prismjs/prism-solarizedlight.css"},{"revision":"55b3f0dda6411d27a5441232aad40650","url":"resources/css/prismjs/prism-solarizedlight.min.css"},{"revision":"f46d7519e3b65a6912814727b47a57ff","url":"resources/css/prismjs/prism-tomorrow.css"},{"revision":"93bb1f846906ab54d3e4d1131e0887ff","url":"resources/css/prismjs/prism-tomorrow.min.css"},{"revision":"55c58036264c40f70b70566c07819913","url":"resources/css/prismjs/prism-twilight.css"},{"revision":"bf0656a1cdc271a2c89da016d574ccbd","url":"resources/css/prismjs/prism-twilight.min.css"},{"revision":"f2c5a96cd675919b8b29a8dd667b6104","url":"resources/css/prismjs/prism.css"},{"revision":"3d63b6da134643cdd75afe1ae8928ba5","url":"resources/css/prismjs/prism.min.css"},{"revision":"aae40f2eed1566baebf8ba7ca1fc063b","url":"resources/css/styles.css"},{"revision":"d577c84bc29b8b6709bd63f73fdb0d2d","url":"resources/css/theme.css"},{"revision":"6438a19f119ad66db1ac9c09d3676d2a","url":"resources/fonts/font.css"},{"revision":"0854f692304a0e4464e4056205556030","url":"resources/scripts/app.js"},{"revision":"09b3a78d9590008cdd58f70e86f97d08","url":"resources/scripts/es-global-bridge-6abe3a88.js"},{"revision":"c63fcf84c0c07500dd3cbe1659d299fa","url":"resources/scripts/iron-form-f540b15b.js"},{"revision":"d4e44759c7175e288d4168838066955f","url":"resources/scripts/paper-checkbox-f6a70487.js"},{"revision":"68186f6e5a3ef115639d590c7fdcaa20","url":"resources/scripts/pb-component-docs.js"},{"revision":"d5f920db7e1ff44eb08fb4a66a84f090","url":"resources/scripts/pb-components-bundle.js"},{"revision":"8c0bd48575dd9750c2de593b269bfff6","url":"resources/scripts/pb-edit-app.js"},{"revision":"8a8bf6fc39183e46dfb10e157692634c","url":"resources/scripts/pb-leaflet-map.js"},{"revision":"ee51c350cef2418eda7160c4c11b894f","url":"resources/scripts/pb-message-1a0c0c52.js"},{"revision":"cc09533837f963307e7699807e736b41","url":"resources/scripts/pb-mixin-15ff531f.js"},{"revision":"6ed6119f6689d7dc793ce8e4a050ae22","url":"resources/scripts/pb-odd-editor.js"},{"revision":"bb2ce2bb93e7941e946102225eabfc25","url":"resources/scripts/polymer-hack.js"},{"revision":"7d059a9324f7fd477a14ee1f90715288","url":"resources/scripts/search.js"},{"revision":"d6e9eb44a24f1e781164287002302b0c","url":"resources/scripts/workbox-sw.js"},{"revision":"f2ecab655d7d7449e1ba37ec328c07a2","url":"autocomplete.json"},{"revision":"4d26d532032b57e5eb54eb1273e29ede","url":"back-1.json"},{"revision":"9b7b0f05abbb6469ac07e61074aeca40","url":"body-1.json"},{"revision":"7e1845ba9c767e2ceef2421a4c9800bb","url":"front-1.json"},{"revision":"e12c841d5f9fce1a6470977cbfb6596b","url":"index.json"},{"revision":"616cc9434c8612018cb18b679619bd33","url":"offline.json"},{"revision":"0c365e7aa68cf32da6f9508bbd65c577","url":"title-view1-1.json"}]);

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image' ||
      request.destination === 'script' ||
      request.destination === 'style',
    new workbox.strategies.CacheFirst({
      cacheName: CACHE_STATIC,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
);

workbox.routing.setDefaultHandler(new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
}));

async function offlinePage(file) {
  const cached = await self.caches.match(file);
  if (!cached) {
      console.log('offline page not found in cache');
      return Response.error();
  }
  return cached;
}

const handler = async (event) => {
    console.log('Destination: %o', event.request.headers);
    if (event.request.headers.get('Accept').includes('application/json')) {
      return offlinePage('/offline.json');
    }
    switch (event.request.destination) {
        case 'document':
            return offlinePage('/offline.html');
        default:
            return Response.error();
    }
};

workbox.routing.setCatchHandler(handler);