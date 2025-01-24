import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="hidden sm:block w-24 md:w-64 h-screen fixed top-0 left-0 bg-[#E3D5CA] rounded-tr-badge rounded-br-badge px-2 py-4 md:px-4 md:py-0">
      <div className="flex flex-col items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="size-20 md:size-40 mb-5 md:mb-0"
        />
        <nav className="w-full space-y-4 md:space-y-3">
          <Link
            to="/"
            className="flex items-center md:justify-start justify-center px-4 py-3 text-center font-semibold text-md text-gray-800 bg-[#F5EBE0] hover:bg-[#D6CCC2] gap-3 rounded-xl"
          >
            <Home size={20} />
            <span className="hidden md:block">Home</span>
          </Link>
          <Link
            to="/favorites"
            className="flex items-center md:justify-start justify-center px-4 py-3 text-center font-semibold text-md text-gray-800 bg-[#F5EBE0] hover:bg-[#D6CCC2] gap-3 rounded-xl"
          >
            <Heart size={20} />
            <span className="hidden md:block">Favorites</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div className="flex sm:hidden bottom-0 left-0 fixed w-full py-2 justify-center z-10 bg-[#E3D5CA] gap-20 rounded-tr-3xl rounded-tl-3xl">
      <Link to="/" className=" flex items-center justify-center p-2">
        <Home size={20} />
      </Link>
      <Link to="/favorites" className=" flex items-center justify-center p-2">
        <Heart size={20} />
      </Link>
    </div>
  );
};
