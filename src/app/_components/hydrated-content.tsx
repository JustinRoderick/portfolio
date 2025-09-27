'use client';

import dynamic from 'next/dynamic';

const Content = dynamic(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./content'));
      }, 2000); // ~2s delay
    }),
  { ssr: false, suspense: true }
);

export default Content;
