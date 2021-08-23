import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(0);

  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  return <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>;
}

export default Toggle;
