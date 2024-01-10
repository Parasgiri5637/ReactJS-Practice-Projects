import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#333333" : "white";
  }, [darkMode]);
  return (
    <div className="heading">
      <h1 className={darkMode ? "title" : ""}>Take Notes</h1>
      <button
        className={darkMode ? "btn-color" : "toggle-btn"}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <span className="material-symbols-outlined moon">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined">sunny</span>
        )}
      </button>
    </div>
  );
}
