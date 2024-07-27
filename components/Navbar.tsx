import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-secondary w-full h-20">
      <ul>
        <li>
          <a href="/Contacts">Contacts</a>
        </li>
        <li>
          <a href="/pages">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
