const C='ziri-preview-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','css/style.css','js/app.js','vendor/gsap.min.js','vendor/ScrollTrigger.min.js','media/ambient-poster.jpg']))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
