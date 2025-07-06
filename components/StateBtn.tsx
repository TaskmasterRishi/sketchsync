"use client";
import React from "react";

import { Ellipsis, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
const StateBtn = () => {
  const [isRotated, setIsRotated] = useState(false);
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsRotated(!isRotated)}
        style={{ cursor: "pointer" }}
      >
        <motion.div
          animate={{
            rotate: isRotated ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {isRotated ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <Ellipsis className="w-5 h-5" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StateBtn;
