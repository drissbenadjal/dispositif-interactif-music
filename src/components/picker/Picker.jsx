import { useState } from "react";
import s from "./Picker.module.scss";
import Scene from "../../webgl/Scene";

const Picker = () => {
  const [picked, setPicked] = useState(0);

  const pickVisualizer = (index) => {
    Scene.changeVisualizer(index);
  };

  const handlePick = (index) => {
    setPicked(index);
    pickVisualizer(index);
  }

  return (
    <div className={s.picker}>
      <button onClick={() => handlePick(0)} className={picked === 0 ? s.active : ""}>Cube</button>
      <button onClick={() => handlePick(1)} className={picked === 1 ? s.active : ""}>Line</button>
      <button onClick={() => handlePick(2)} className={picked === 2 ? s.active : ""}>Board</button>
    </div>
  );
};

export default Picker;
