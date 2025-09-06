import React, { useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex items-center justify-between p-4 bg-gray-800 text-white px-20 w-full transition-all duration-300
        ${isScrolled ? "fixed z-20 top-0 left-0 shadow-lg" : ""}`}
      style={isScrolled ? { position: "fixed", width: "100%" } : {}}
    >
      <h1 className="font-extrabold text-xl">SinobiArchive</h1>
      <ul className="flex gap-6">
        <li className="hover:underline cursor-pointer">Home</li>
      </ul>
      <button className="bg-blue-500 px-4 py-2 rounded-full">Login</button>
    </nav>
  );
};

export default Navbar;
