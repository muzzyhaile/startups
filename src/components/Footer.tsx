import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center items-center space-x-8">
          <Link 
            to="/imprint" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Imprint
          </Link>
          <Link 
            to="/privacy" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link 
            to="/terms" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
