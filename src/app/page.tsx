import { Suspense } from 'react';
import Content from './_components/content';
import Loader from './_components/loader';

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Content />
    </Suspense>
  );
}
