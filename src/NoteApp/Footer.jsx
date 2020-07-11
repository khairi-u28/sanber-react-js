import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Sanbercode ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
