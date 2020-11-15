import React, { useState, useEffect } from "react";

const HookMouseCoords = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => setMouseCoords({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    console.log("useEffect called.");
    document.addEventListener("mousemove", handleMouseMove);
    let cleanUp = () =>
      document.removeEventListener("mousemove", handleMouseMove);
    return cleanUp;
  }, []);
  return (
    <div>
      Mouse X: {mouseCoords.x}, Mouse Y: {mouseCoords.y}
    </div>
  );
};

export default HookMouseCoords;
