import { Suspense } from 'react';
import Content from './_components/content';
import Loading from './_components/loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>
  );
}
