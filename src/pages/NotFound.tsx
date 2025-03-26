
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5E9]">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-[#0D503C] font-serif">404</h1>
        <p className="text-xl text-[#0D503C]/80 mb-4">Oops! Page not found</p>
        <p className="text-[#0D503C]/70 mb-6">
          The page "{location.pathname}" could not be found.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-5 py-2.5 text-sm font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
