import React from "react";

function Navbar() {
  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="navbar">
      <h1>Recipe App</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#recipes">Recipes</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            {/* Using button element to handle click event */}
            <button onClick={scrollToBottom}>End of Page</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
