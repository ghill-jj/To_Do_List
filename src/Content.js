import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("?");
  function handleValueChange() {
    const values = ["Fame", "Power", "Money", "Love"];
    const change = Math.floor(Math.random() * 4);
    setName(values[change]);
  }
  return (
    <main>
      <p>We Live for {name}</p>
      <button onClick={handleValueChange}>Submit</button>
    </main>
  );
};

export default Content;
