// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js');
// version: 1
var version = '1.0.0';
var cacheName = 'leofe'+version;
var filesToCache = [
    //通用资源
];
//不需要缓存的内容
var exclude = ['/js/core/jquery.ztree.all.min.js',
    '/jdf-bs/socket.io',
    '/jdf-bs/browser-sync-client.js',
    'pwa.js'
]
self.addEventListener('install', function(e) {
    e.waitUntil(self.skipWaiting());
    console.log('install');
    // e.waitUntil(
    //     caches.open(cacheName).then(function(cache) {
    //         return cache.addAll(filesToCache);
    //     })
    // )
})
self.addEventListener('activate', function(e) {
    console.log('activate',caches.keys());
    // e.waitUntil(self.clients.claim());
    e.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(function(cacheList) {
                return Promise.all(
                    cacheList.map(function(cn) {
                        if(cn !== cacheName) {
                            return caches.delete(cn);
                        }
                    })
                )
            })
        ])
    )
})
self.addEventListener('fetch', function(e) {

    e.respondWith(
        caches.match(e.request)
        .then(function(response){
            if(response) {
                return response;
            }
            var fetchRequest = e.request.clone();
            return fetch(fetchRequest)
            .then(
                
                response => {
                    //请求接口报错时直接返回，不进行缓存
                    if(!response || response.status != 200) {
                        console.log('%c因为错误不缓存：','color: green',e.request.url);
                        return response;
                    }
                    //因为缓存无法缓存POST，所以过滤掉
                    if(e.request.method == 'POST') {
                        console.log('因为POST无法缓存：',e.request.url);
                        return response;
                    }
                    //过滤掉不需要缓存的资源，如监控系统等,
                    var url = e.request.url;
                    if(checkExclue(url)){
                        console.log('因为黑名单不缓存：',e.request.url);
                        return response;
                    }
                    var responseToCache = response.clone();

                    caches.open(cacheName)
                    .then(function(cache) {
                        cache.put(e.request, responseToCache);
                    })
                    return response;     
                }
            )
        })
    )

})

//函数功能区

function checkExclue(url) {
    var ishas = false;
    for(var i = 0; i<exclude.length; i++){
        excludeUrl = exclude[i];
        if(url.indexOf(excludeUrl) > -1 ){
            ishas = true;
            break;
        }
    }
    return ishas;
}