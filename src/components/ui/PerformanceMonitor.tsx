'use client';

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      // Log Web Vitals
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          const perfData = window.performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
          console.log(`⚡ Page Load Time: ${pageLoadTime}ms`);
        });
      }
    }
  }, []);

  return null;
}

