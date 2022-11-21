const CACHE = "guidelines-resources";
const CACHE_STATIC = "guidelines-static-resources"

importScripts('/resources/scripts/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.precaching.cleanupOutdatedCaches();

workbox.precaching.precacheAndRoute([{"revision":"4606193dc05be431f7da03e022e573a5","url":"index.jsonl"},{"revision":"604d1e5008c94cefcba00aa41aecd39f","url":"css/tei.css"},{"revision":"dd347b3baee823b424d396ce214b90ee","url":"resources/css/styles.css"},{"revision":"7445d1b8495cd4cf7a18d0707120da52","url":"resources/css/theme.css"},{"revision":"0854f692304a0e4464e4056205556030","url":"resources/scripts/app.js"},{"revision":"09b3a78d9590008cdd58f70e86f97d08","url":"resources/scripts/es-global-bridge-6abe3a88.js"},{"revision":"65701ee23f50679ce1a35f87abbc4d0a","url":"resources/scripts/iron-form-ee64c98d.js"},{"revision":"53935687651d89c4405fc48876d22667","url":"resources/scripts/paper-checkbox-ea000977.js"},{"revision":"923badcbcdb49ad3594e2848196f7b1e","url":"resources/scripts/pb-component-docs.js"},{"revision":"e8b20c8b17eab6923ff489861e0b9d0c","url":"resources/scripts/pb-components-bundle.js"},{"revision":"a2a25529e2533652cf4f3d8ef29f556c","url":"resources/scripts/pb-edit-app.js"},{"revision":"cc02735e90a416b2c9cc8d566c31b5fb","url":"resources/scripts/pb-leaflet-map.js"},{"revision":"b8ebf9b58011cb64ffff640d53fc3b04","url":"resources/scripts/pb-message-a461d7ee.js"},{"revision":"949015c807f3f3ddd8e2419e4e6c97ce","url":"resources/scripts/pb-mixin-ae9e2885.js"},{"revision":"93ae94c54173f5491f339dd76d9ef0c0","url":"resources/scripts/pb-odd-editor.js"},{"revision":"bb2ce2bb93e7941e946102225eabfc25","url":"resources/scripts/polymer-hack.js"},{"revision":"0d42d8b51530c6cb752502e39da7e6ab","url":"resources/scripts/search.js"},{"revision":"d6e9eb44a24f1e781164287002302b0c","url":"resources/scripts/workbox-sw.js"},{"revision":"f2ecab655d7d7449e1ba37ec328c07a2","url":"autocomplete.json"},{"revision":"4d26d532032b57e5eb54eb1273e29ede","url":"back-1.json"},{"revision":"9b7b0f05abbb6469ac07e61074aeca40","url":"body-1.json"},{"revision":"7e1845ba9c767e2ceef2421a4c9800bb","url":"front-1.json"},{"revision":"e12c841d5f9fce1a6470977cbfb6596b","url":"index.json"},{"revision":"616cc9434c8612018cb18b679619bd33","url":"offline.json"},{"revision":"0c365e7aa68cf32da6f9508bbd65c577","url":"title-view1-1.json"}]);

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