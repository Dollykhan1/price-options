import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact Us", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" },
  ];

  const [open, setOpen] = useState(false);


  return (
    <nav>
      <div onClick={() => setOpen(!open)}>
        {open === true ? <IoCloseSharp /> : <FaBars className="lg:hidden" />}
      </div>
      <ul className={`
            lg:flex lg:flex-row gap-10 flex-col
            bg-green-700 p-5 duration-1000
            absolute lg:static
            ${open ? "top-[7rem]" : "-top-40"}
            `}>
        {routes.map((route) => {
          return <li key={route.id}>{route.name}</li>;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
