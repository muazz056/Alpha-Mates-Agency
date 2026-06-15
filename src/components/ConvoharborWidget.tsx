'use client';
import { useEffect } from 'react';

export default function ConvoharborWidget() {
  useEffect(() => {
    const id = 13;
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
    i.style.width = '400px';
    i.style.height = '620px';
    i.style.maxWidth = '100vw';
    i.style.maxHeight = '100vh';
    i.style.bottom = '0';
    i.style.right = '0';
    i.allow = 'clipboard-write;';
    mount.appendChild(i);

    return () => { i.remove(); };
  }, []);

  return null;
}
