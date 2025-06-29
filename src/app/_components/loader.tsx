import { TailChase } from 'ldrs/react';
import 'ldrs/react/TailChase.css';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-fuchsia-950">
      <TailChase size="40" speed="1.75" color="black" />
    </div>
  );
}
