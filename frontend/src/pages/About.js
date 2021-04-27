import React from "react";
import UploadButton from "../components/upload/uploadButton/UploadButton";
import { useSpring, animated } from "react-spring";

export default function Spring() {
  const [isToggled, setToggle] = React.useState(false);
  const fade = useSpring({
    opacity: isToggled ? 1 : 0,
  });
  const color = useSpring({
    color: isToggled ? "purple" : "#000",
  });

  return (
    <div>
      <animated.div style={fade}>
        <UploadButton />
      </animated.div>
      <animated.div style={color}>
        <p>Hello World!</p>
      </animated.div>
      <button onClick={() => setToggle(!isToggled)}> click </button>
    </div>
  );
}
