'use client';
import Loader from './loader';

import dynamic from 'next/dynamic';

const Content = dynamic(() => import('./content'), {
  ssr: true,
  suspense: true,
});

export default Content;
