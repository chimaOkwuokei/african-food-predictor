import { useState } from "react";

const UserHeader: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-800 to-[#013c05] text-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          {/* <img src={logo} alt="E-learn" className="h-6" /> */}
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          <a href={'/'} className="hover:text-blue-300">
            Home
          </a>
          <a href={'/predict-food'} className="hover:text-blue-300">
            Predict Food
          </a>

        </div>

        {/* Hamburger Icon (small screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white"
          >
            ☰
          </button>
        </div>
      </div>



      {/* Sidebar (small screens) */}
      {
        isSidebarOpen && (
          <div className="fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-green-800 to-[#013c05] shadow-lg z-50">
            <button
              className="absolute top-5 right-5 text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col items-start space-y-6 p-6 text-white">
              <a href={'/'} className="hover:text-blue-300">
                Home
              </a>
              <a href={'/predict-food'} className="hover:text-blue-300">
                Predict Food
              </a>
            </div>
          </div>
        )
      }
    </nav >
  );
};

export default UserHeader;
