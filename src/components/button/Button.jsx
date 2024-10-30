import React from "react";
import { motion } from "framer-motion";
export const Button = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      Mostrar Frase
    </motion.button>
  );
};
