
import { Link, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    const tabs = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="navbar fixed top-0 left-0 w-full z-50 bg-base-300 shadow-sm">
            {/* <div className="navbar-start">
                    <img src="./assets/Logo_Transparent_Full_Crop.svg" alt="Logo" className="h-8 w-8 mr-2" />
                </div> */}
            <div className="navbar-center">
                <div role="tablist" className="tabs tabs-border">
                    {tabs.map(({ name, path }) => (
                        <Link
                            key={path}
                            to={path}
                            role="tab"
                            className={`tab ${isActive(path) ? "tab-active" : ""}`}
                            aria-current={isActive(path) ? "page" : undefined}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>


        </nav>
    );
};


export default Navbar;