'use client';

import dynamic from 'next/dynamic';

const Content = dynamic(() => import('./content'), { ssr: false });

export default Content;
