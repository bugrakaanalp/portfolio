import Services from '../components/Services';
import CommandHint from '../components/ui/CommandHint';
import ServiceFab from '../components/ui/ServiceFab';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <CommandHint />
      <ServiceFab />
      <Services /> 
    </motion.div>
  );
}