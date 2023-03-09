import React from "react";

const FooterCols = () => {
  const navItems = ["Home", "About", "Services", "Processes", "Testimonial"];
  return (
    <div className="md:w-1/4 p-4">
      <h2 className="text-lg font-semibold mb-2">Navigations</h2>
      <div>
        <ul>
          {navItems.map((item) => {
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-white hover:text-[#daa520] font-medium"
              >
                {item}
              </a>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterCols;
