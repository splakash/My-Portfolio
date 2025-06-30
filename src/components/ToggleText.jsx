import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ToggleText() {
  const texts = ["Full Stack Developer", "Java Developer", "Spring boot Developer", "Frontend developer"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // change text every 2 seconds

    return () => clearInterval(interval); // clean up interval on unmount
  }, [texts.length]);

  return (
   
      <div >
        <AnimatePresence mode="wait">
          <motion.div
            key={texts[textIndex]}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            {texts[textIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    
  );
}

export default ToggleText;
