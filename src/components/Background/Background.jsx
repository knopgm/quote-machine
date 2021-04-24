import React from "react";
import { motion } from "framer-motion";

import "./style.scss";

export function Background({ color }) {
  return (
    <motion.div
      className="background"
      initial={{ backgroundColor: color }}
      animate={{ backgroundColor: color }}
    />
  );
}
