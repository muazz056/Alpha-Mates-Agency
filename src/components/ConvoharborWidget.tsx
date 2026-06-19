'use client';
import { useEffect } from 'react';

export default function ConvoharborWidget() {
  useEffect(() => {
    const id = 15;
    const PUBLIC_URL = 'https://convoharbor.vercel.app/';

    const ctx = {
      domain: location.hostname,
      url: location.href,
      path: location.pathname,
      referrer: document.referrer,
      title: document.title,
      chatbot_id: id,
      timestamp: new Date().toISOString()
    };
    try { sessionStorage.setItem('convoharbor_website_context', JSON.stringify(ctx)); } catch(e) {}

    var _lastW = 0, _lastH = 0;
    var _applySize = function(w: number, h: number) {
      _lastW = w; _lastH = h;
      var f = document.querySelector('iframe[data-convoharbor]') as HTMLIFrameElement | null;
      if(!f) return;
      var cw = Math.min(w + 20, window.innerWidth);
      var ch = Math.min(h + 20, window.innerHeight);
      f.style.width = cw + 'px';
      f.style.height = ch + 'px';
    };
    function _onMessage(e: MessageEvent) {
      if(e.data && e.data.type === 'convoharbor_resize') _applySize(e.data.width, e.data.height);
    }
    function _onResize() {
      if(_lastW > 0) _applySize(_lastW, _lastH);
    }
    window.addEventListener('message', _onMessage);
    window.addEventListener('resize', _onResize);

    const mount = document.getElementById('convoharbor-widget-container') || (() => {
      const d = document.createElement('div');
      d.id = 'convoharbor-widget-container';
      document.body.appendChild(d);
      return d;
    })();

    Array.from(mount.querySelectorAll('iframe[data-convoharbor]')).forEach(n => n.remove());

    const i = document.createElement('iframe');
    i.setAttribute('data-convoharbor', 'true');
    i.src = `${PUBLIC_URL}/public/chat/${id}?website_context=${encodeURIComponent(JSON.stringify(ctx))}`;
    Object.assign(i.style, {
      border: 'none', outline: 'none', position: 'fixed',
      zIndex: '9999', pointerEvents: 'auto', background: 'transparent'
    });
    i.style.width = '60px';
    i.style.height = '60px';
    i.style.maxWidth = '100vw';
    i.style.maxHeight = '100vh';
    i.style.bottom = '0';
    i.style.right = '0';
    i.allow = 'clipboard-write;';
    mount.appendChild(i);

    return () => { i.remove(); window.removeEventListener('message', _onMessage); window.removeEventListener('resize', _onResize); };
  }, []);

  return null;
}
