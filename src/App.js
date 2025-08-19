import React from "react";
import "./App.css";

function App() {
  // audio file ka link
  const playSound = () => {
    const audio = new Audio("/mc.mp3"); // ✅ public folder me rakha ho
    audio.loop = true; // 🔁 repeat karne ke liye
    audio.play();
  };

  return (
    <div className="app-container">
      <img
        src="https://i.pinimg.com/originals/4c/b7/d5/4cb7d5c67e669d81fad40ab177de37b3.gif"
        alt="My Gif"
        className="image"
      />
      {/* onClick pe sound repeat hoga */}
      <h1 className="title" onClick={playSound}>
        Bhagg Magdarchod
      </h1>
    </div>
  );
}

export default App;
