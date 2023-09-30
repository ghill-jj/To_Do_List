import React from "react";

const Footer = ({ length }) => {
  const year = new Date();
  return (
    <footer>
      Copyright &copy; {year.getFullYear()} - Above {length} List{" "}
      {length === 1 ? "item" : "items"} Present
    </footer>
  );
};

export default Footer;
