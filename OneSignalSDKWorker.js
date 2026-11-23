/* OneSignalSDKWorker.js – Service Worker für Nutzer, die Benachrichtigungen aktiviert haben.
   Lädt den Push-Teil von OneSignal und leitet ansonsten jede Anfrage unverändert ans Netz weiter (kein Zwischenspeicher). */
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){e.respondWith(fetch(e.request))});
