import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  return (
    <motion.div 
      className="w-fill h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image 
          src="/logo.png" 
          alt="sketchsync logo" 
          width={100} 
          height={100}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
