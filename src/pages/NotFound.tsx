
import { useLocation, Link, useEffect } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Page Not Found | Just Launch</title>
        <meta name="description" content="The page you were looking for could not be found." />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://justlaunch.lovable.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Not Found",
                  "item": "https://justlaunch.lovable.app${location.pathname}"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-[#0D503C] font-serif">404</h1>
        <p className="text-xl text-[#0D503C]/80 mb-4">Oops! Page not found</p>
        <p className="text-[#0D503C]/70 mb-6">
          The page "{location.pathname}" could not be found.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-full bg-[#0D503C] px-5 py-2.5 text-sm font-medium text-[#F5F5E9] shadow-sm hover:bg-[#0A4231] transition-all"
          aria-label="Return to Home Page"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
