'use client';

import { useEffect } from 'react';

export default function WowInit() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.WOW) {
        console.log('WOW найден, запускаем...');
        new window.WOW().init();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
