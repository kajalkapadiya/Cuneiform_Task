import React from "react";

function Header() {
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "gray",
  };

  return (
    <header>
      <a href="/" style={linkStyle}>
        Home
      </a>
    </header>
  );
}

export default Header;
