'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "02f317704c5be53d01f065a58cbfaa4d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eff8535e7f518364a99b0a16b423fef7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "adef44fd9534d05c5b4b9511afcffca3",
".git/logs/refs/heads/master": "256ce778158fdfbd5960c4749eaa4a6f",
".git/logs/refs/remotes/origin/master": "bef9b20bfddd9b64f302aba284403f52",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/617cc785b75d82c78d9d1575ae7e68a7dd955c": "843ae465d28b0cc28961df5facbaf43a",
".git/objects/06/be1f0e4dd0d450442dc91a8733c0761add92a2": "a34861dd795b8f4c91efe2611cda7af4",
".git/objects/0b/56087aae679614dd8ba6efecd1a3979512e466": "18bac5b598ec63b58e8410f67bc398bc",
".git/objects/0c/736470e518c4aea343b1b83f1f506ed90b3c53": "feb248489b6def248ac6546652620595",
".git/objects/29/5c0d1ceebbdfdb65648e7c4db43ee550a6a95d": "93ec7a03ad38ea3d2827acc52de6ba47",
".git/objects/29/e9e605d38445507c405b444419ed76c7e63bfd": "bdedf02282fdaa0e56c6a4728fded573",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/b307c917eae3d5ba9225c817ce2cb5b5b83f37": "ed6d483ee7a911a46baee16cd04820ab",
".git/objects/4a/5bc3958b164df21ed073620b89b58c1d1e420c": "0d4e8359bc787e27a5dac2e84593a9fa",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/65a1496663e24e4050298a390d4f6142236cdc": "28a32e452ecc3759d11cae39606e34f8",
".git/objects/5c/97bfb748576c3de0ed3e2cb602d4a29a484118": "eb5589ab57dffea6447441b17684e63a",
".git/objects/5d/fb66cf48ad8c4a07f7e1ea03ac145ea93ecab5": "ba913252c752250c0c5bbcb61d347ea1",
".git/objects/66/6220d0e3550fdd5637beb4f25bb92f508bf14f": "a8002c78176426573467897884c077b4",
".git/objects/6c/84c4e9c284f768d088b725421839d2a7cdbf1a": "bf3296d95e855cf79a971bd476c12c3a",
".git/objects/77/281cf95d02253e752318826b1118e88779656c": "d63e2dfa57613d7d61bf8d3103480471",
".git/objects/78/cceca2af652cb83ca0c7e5afc9792e6c89e817": "ae43222415f62fa74a700921991c124e",
".git/objects/79/a627ea84d6f9ffe1e8512d170568c0dda765a3": "12c997853c57a87af1b91128a9d0a6cc",
".git/objects/7c/20649018498ae763ccbb6bccea8ff3c4f849eb": "c5e053facedf28ffb17bb488fefc7dab",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/a2fc0ab00f6fd330bf23f5aeba8a003c0e7963": "123f46cf13a2e900ef00e3501875a52e",
".git/objects/86/ee816964c37185c72ff01f1e8aeea759fa7241": "e1ab218799a9d0b095987981600d60c2",
".git/objects/88/8186a3a2cb455ce3b63fd7c03b706ac4819f81": "e30f9881444801d0c7c152dac467e45e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c4fc2ba7fc12722e2e78c2237f6d7e9a906dc9": "b87271e1911fea61a6f24e6bca8fe349",
".git/objects/8d/e60ca2f8c2b5e57f1d3fa6952a9ca7ba0b1d64": "1f4a006964be9ddae5d68978ceae7a6e",
".git/objects/90/94f45a732caad28217146b2d69555e43b2a2ac": "8b605ee75942c1f3beab9d3ff27cff34",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/99/3211b1799a069549fca75a1b73763e27f769e4": "a1b9f78547ee307733d9a6eb6f9bcca8",
".git/objects/9f/622a58c64ee110be03a67ff1938110867ae04d": "79c7142967bdca769ba8393887dbc140",
".git/objects/a2/ee9a263dd891f3a4683a29b33575c406b7143b": "60cfe94e20f9c3f3320f77bd84c4998d",
".git/objects/a5/711671587b2dfcae36ee84ebac8b803bb81e88": "88e8ceeea7f56fe9cc2bf3c5eb3a5b9b",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b3/738bfc0ba3d21513548c3a1d67f78f99c27429": "10ad947ba04e542e260cce9b094f8804",
".git/objects/b6/57faa3974b40a02bef4de74f9222ec0c456673": "f94d10fa79e481788ed0d19b982e5ec3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/fc56a0b09978052e9b363c1f3ef6c5d48c472b": "f5947203bf58ade862188dc0d5585a3a",
".git/objects/c3/164f05c1a562712fbc96a94794eb94f685154a": "95671f669f26a09c9d9044faf6557cb3",
".git/objects/c7/d6abe9882e8a34137ec8f7b7723203d0057b97": "39bc10cf28e34ab02901045a6e3a44fa",
".git/objects/cf/b59f71da02eea2cb354939b6119b13a8b7ee30": "9a9cfee7bec30a1c03abe61c33ad8633",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/ef882f3bc31d2efc743e70fdd3f020678025a2": "bba1e742fae60a2afc28353c9a04bd0e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/43df5c23cb44e7b53219edaa90ce4bd885cf50": "04c56e2c07dc7959d1df612051e519b8",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a7622eec63cc738a5d2f1b8ecb5519e04e2c66": "5b3f4a059a687a7878afba3c0096b916",
".git/objects/ed/ca39d5fbf85b48d9da73b1ec3b8aafb2093960": "d76b69d58398c5df26a6cc2864fbfa4c",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f9/0c16990e097261856c6cbde7bb9b8f7a54cf32": "5ae96c4c5b7ecfe70b4b22a3e761bb05",
".git/objects/fc/991dd85fdf6405e359432eb208bafc25f9ef85": "23b036c93e55b0e428a5d7258b14ce6a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/7b440859ad13261607eb82b8f4d92f5ef5a84c": "86a093480cb05973da9a236f9892abdf",
".git/refs/heads/master": "e02a96962308da2c678afae640df0605",
".git/refs/remotes/origin/master": "e02a96962308da2c678afae640df0605",
"assets/AssetManifest.bin": "eddbe78c500f0a1cb4572186d26ce742",
"assets/AssetManifest.json": "48f7ed65008a9a2032b8b80c5c55b872",
"assets/assets/icon/icons_google.png": "4aa71741c5ce4b3934dad5ef3c80b48f",
"assets/assets/icon/logos_facebook.png": "0833b053623deeac53edebf59cfc5429",
"assets/assets/image/default_avatar.png": "f6b3f7948cd1d836f41338d7d52c3483",
"assets/assets/image/gradient_circle.png": "ea4def257ff7b51b428166fd83dbbca0",
"assets/assets/image/login_page_logo.png": "dcb7007230ede2261cf1b2c7ab62e222",
"assets/assets/image/login_screen_image.png": "5cf2d498bc260d2aaabb25396898783a",
"assets/assets/image/profile.png": "e2463633ba65b326ff2c5e1f41c87999",
"assets/assets/image/quote_image_1.png": "6bdf31204da3322d3d56a1bf032b7ffc",
"assets/assets/image/quote_image_2.png": "2f1155f59ac2a95000f39f988e559373",
"assets/assets/image/quote_image_3.png": "e015a5c5fa4059c5dc2ce8feb6bf3bab",
"assets/assets/logo/ic_launcher.png": "c3d769192350e880e8063cdf1dcb3062",
"assets/assets/logo/ic_launcher_adaptive_back.png": "abba0bcd8e65b62c9a5591eef7fc1206",
"assets/assets/logo/ic_launcher_adaptive_fore.png": "6919c4b19f1809e3434c16b23bc97ff6",
"assets/assets/logo/logo.png": "6c40722fb2a571761cc6b9f45565e2e9",
"assets/assets/logo/logo1.png": "8b9763d3c7138ed4d338ff4535b26173",
"assets/assets/logo/logo_launcher.png": "bb405df9a5a94cb6fa0e10d2ad0a71a4",
"assets/assets/lottie/login.json": "13fba284dd9ea5cf6db27a5845f24c45",
"assets/FontManifest.json": "2e0c418f2172c89dd7b1b8ef41a6dd4b",
"assets/fonts/MaterialIcons-Regular.otf": "86d1443b758aee687f01bb9c9b7a1106",
"assets/fonts/OpenSans-Bold.ttf": "5112859ee40a5dfa527b3b4068ccd74d",
"assets/fonts/OpenSans-ExtraBold.ttf": "9653672b9552d4e42cebc073f0231368",
"assets/fonts/OpenSans-Regular.ttf": "7df68ccfcb8ffe00669871052a4929c9",
"assets/fonts/OpenSans-SemiBold.ttf": "58fb53a79ecf1314a1f38bceb8b2a992",
"assets/NOTICES": "eecf7f597835f96321b31c8d7d845950",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"ic_launcher.png": "c3d769192350e880e8063cdf1dcb3062",
"ic_launcher_adaptive_fore.png": "6919c4b19f1809e3434c16b23bc97ff6",
"index.html": "f5183be9ed3ab22c358522cc093e48df",
"/": "f5183be9ed3ab22c358522cc093e48df",
"main.dart.js": "dbdfc91586d550a05d92e5a755f89414",
"manifest.json": "35fe45f185d5aaea7f061f1c4499ad5b",
"version.json": "68d0f5bd15111fcdef5da9065b47fe33"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
