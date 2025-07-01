import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center"> 
          <img
            className="h-8 w-auto mr-4" 
            src="public/Logo_Transparent_Full_Crop.svg"
            alt="Logo"
          />
          <NavButton to="/" active>Home</NavButton>
          <NavButton to="/about">About</NavButton>
          <NavButton to="/portfolio">Portfolio</NavButton>
          <NavButton to="/contact">Contact</NavButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;