import { TailChase } from 'ldrs/react';
import 'ldrs/react/TailChase.css';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-fuchsia-950">
      <TailChase size="80" speed="1.75" color="white" />
    </div>
  );
}
