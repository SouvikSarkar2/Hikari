"use client";
import "./cursor.css";
import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);
  /* console.log(position); */
  return (
    <motion.div
      className="hidden md:flex cursor"
      animate={{ x: position.x - 4, y: position.y - 4 }}
    ></motion.div>
  );
};

export default Cursor;
