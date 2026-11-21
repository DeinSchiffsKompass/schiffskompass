/* Minimaler Service Worker für DEIN SchiffsKompass.
   Er sorgt nur dafür, dass Android die Seite als richtige App mit eigenem Symbol installiert.
   Er speichert nichts zwischen: Jede Anfrage geht direkt ans Netz, damit immer die neuesten Daten kommen. */
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){e.respondWith(fetch(e.request))});
