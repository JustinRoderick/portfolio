'use client';
import Loader from './loader'; 

import dynamic from 'next/dynamic';

const Content = dynamic(() => import('./content'), {
  ssr: false,
  suspense: true,
});

export default Content;
