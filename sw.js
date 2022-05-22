/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01背包/index.html","5c6c1e5ec22775a0413bd176a3a0039c"],["/Electron/index.html","a2bbb1b1f76ec20edeee53e2372a2afe"],["/Java-io/index.html","960eac759c174313c6ecda276ad2f1c4"],["/Linux build exe/index.html","2daddcc044f902d7ffcbd156e7481001"],["/Linux-磁盘分析/index.html","69ee346539a5f032910bfe7825964851"],["/Onedrive5T/index.html","0c48342c5ca1fb26883fe99171c32a21"],["/Others but important/index.html","34917d8d7273bf14d8483a17c5643b3e"],["/Promise/index.html","7029d93bd6574043c7c435c52031ac71"],["/about/index.html","cb59e0a355963bcd5bb0cfbc687ad345"],["/archives/2021/11/index.html","1b551977d87e1fd33cdd09c9cbe3e4a8"],["/archives/2021/11/page/2/index.html","9f484101a8ff9f3732b0eb3b0340767c"],["/archives/2021/12/index.html","2440b216ca5bc1dd448e1261a5a0831e"],["/archives/2021/index.html","9fde39d5f8dec6f11a621e33ee091c10"],["/archives/2021/page/2/index.html","79e0270ad63e06d4d2c5b99cc8021faf"],["/archives/2022/01/index.html","8f5d123c00524b6002d495261a993260"],["/archives/2022/02/index.html","6ea92088b9b0dc5c8c22be859784483f"],["/archives/2022/05/index.html","36f534bbfcf2550a422a7f275b468cee"],["/archives/2022/index.html","57b9cdd4bb1073dfc04c0f77b2fcd5f0"],["/archives/index.html","6c3bc7a15357a892c575d13fa2f997f9"],["/archives/page/2/index.html","9eac9f6365c228f951fb20eae9ce544e"],["/archives/page/3/index.html","5307466127af41c94d6c9e3294e1788e"],["/auto-mount/index.html","ce92cd9beb5e67ce702ea7c892a3e4eb"],["/beauty/index.html","7cc0e52d1ad729916c640e02880362ab"],["/categories/index.html","5e208787d8f2a2c731cbb9e3916e5d6e"],["/categories/letsencrypt/index.html","6d0f66815349df6cf4e9c0126c5edabc"],["/categories/linux/index.html","3d13940acd5593676efe18dda325f4c0"],["/categories/学习/index.html","de917a5250afd1044d2dd272df76fb16"],["/categories/桌面软件/index.html","1372404305e472efa673b4d00b36d10b"],["/categories/白嫖-Onedrive/index.html","0aac7f20fc88ceafc223177a52d6165a"],["/categories/编程/Web/index.html","cc878778c90dff94fe032dd4f33d3df7"],["/categories/编程/cpp/index.html","2f97d73afe75d8978530095910a63d0b"],["/categories/编程/index.html","66bf0b82a42d8d3512a4fea0796c7c48"],["/categories/编程/java/index.html","3c6152d84cf8c9a7e49df9b986216834"],["/categories/编程/page/2/index.html","c969f30ecd946e74f4874d80f7fd6129"],["/categories/编程/python/index.html","672ebdd493d66c07d7d512f4ba3e6b00"],["/categories/网络/index.html","8ba2b4a17b013c09b81cbeebb6c7b2bd"],["/css/custom.css","ac887be1d6ee0ad93f76104988d3bd73"],["/css/index.css","bb67a51e9b003c07836c63735a657f8e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css设计/index.html","977b2fc95de1cf8b4fa4e6cad1c7f9e7"],["/fonts/FiraCode-Medium.ttf","38989befe49ab72063b68518a4531cc8"],["/fonts/Segoe UI.ttf","623c7118249e082fe87a78e08506cb4b"],["/git/index.html","5559214945a821880d7712a6a0748150"],["/hello-world/index.html","7d2bde22bac32a6314d036d6eb1370e4"],["/images/background.jpg","aa52cfaa29fe4855ed0b9bd2a6161cc8"],["/images/onedrive.png","af69994b4e819c71f1a0d92157c2de99"],["/images/toutu.jpg","ccfde37f919104fae502adadca927c1e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c94f63683cc8edda78fd63851f2bed4b"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js获取网络信息/index.html","a55f73e5834375e922cac2290b413ea1"],["/letsencrypt/index.html","1fb650d4eb4b15910872841509c2ebea"],["/messages/index.html","34425a766b5ee6015e9e46a9a8f69b82"],["/page/2/index.html","f061a3c680cc62135394f0809bd744eb"],["/page/3/index.html","c07acf8740b93445026e58b4c022ad69"],["/python-lanzou/index.html","d76524c443706b9c815521920700dd09"],["/sw-register.js","8739324b4f4ca8864ed83baeddcd5c19"],["/tags/Onedrive/index.html","cbca0867462a9eabbffee1f83a32760b"],["/tags/VB/index.html","03d3122deb7998840d670f4a68804aae"],["/tags/c-c/index.html","909e140ef36637361579460a9d156948"],["/tags/c/index.html","d7528657b77e6b241b909b46eb3c6a22"],["/tags/cpp/index.html","023f904cc482e9ba5bed288521a828ee"],["/tags/electron/index.html","e919772aaa1ac525eb2722423cc660d9"],["/tags/git/index.html","d38b727e0641f9c7d56548a79192b72b"],["/tags/index.html","abc76316ffc94e4894452eaee1b591ab"],["/tags/java/index.html","fa33b60135ab16a42027173fb18c3fd2"],["/tags/letsencrypt/index.html","24373d09d47f5e8e45f0a2a20507f844"],["/tags/linux/index.html","a2d91c6322ee642b7df64dd9fdfb2b50"],["/tags/python/index.html","9364690f592cc3b67a79c3a2b316fefc"],["/tags/web/index.html","2db82f73ce1f623f9590cb9879dc94fd"],["/tags/wireshark/index.html","9444c32673df46639f48efbaf01734d4"],["/tags/白嫖/index.html","c0950f1f3e529084bb5714b4cd6f9836"],["/win-磁盘修复/index.html","5560f5510c98e2bf3da5e80d027f9ea4"],["/wireshark抓包入门/index.html","9de20ef4a3623cf64b98d5936b9b2d2c"],["/wstring与string/index.html","f83722f9d7a8566e57dbbae7275fbda8"],["/xmysql/index.html","e22b72093ffdbf33653f25f49516b7c3"],["/xsocket/index.html","eefde6cfd52ed42519eb350621dd5b60"],["/初学VB/index.html","55133255d7cf556414daa22cc3e971cb"],["/动态修改referer/index.html","3c1a37ea4e2dcd74e8fb56759ac69323"],["/最新无备案网站搭建解决方案/index.html","12dcbe6975adbde9909c4603df5ea893"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
