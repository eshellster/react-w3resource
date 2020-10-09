import React, { useState } from "react";

const Mouse = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setState({ x: event.clientX, y: event.clientY });
  };
  return (
    <div style={{ height: "100%" }} onMouseMove={handleMouseMove}>
      <p>
        The current mouse position is ({state.x}, {state.y})
      </p>
    </div>
  );
};

export const MouseTracker = () => {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse />
    </div>
  );
};
