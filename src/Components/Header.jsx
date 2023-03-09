import React, { useState } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="" id="Home">
      <NavBar open={open} setOpen={setOpen} />
      <Hero open={open} />
    </div>
  );
};

export default Header;
