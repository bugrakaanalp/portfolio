import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Approach from '../components/Approach';
import Work from '../components/Work';
import CommandHint from '../components/ui/CommandHint';

const Divider = () => (
  <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
    <div className="w-full h-px bg-[var(--text-main)] opacity-20" />
  </div>
);

export default function Home() {
  return (
    <>
      <CommandHint />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Expertise />
      <Divider />
      <Approach />
      <Divider />
      <Work />
      <Divider />
    </>
  );
}