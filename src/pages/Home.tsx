import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Approach from '../components/Approach';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Work />
      <About />
      <Expertise />
      <Approach />
    </motion.div>
  );
}