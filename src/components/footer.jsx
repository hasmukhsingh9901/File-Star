const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 border-t-white border-t">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold">FileStar</h3>
            <p className="mt-2 text-gray-400">Revolutionizing file processing with AI.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {['Home', 'Features', 'Pricing', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-cyan-500 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn'].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-cyan-500 transition"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FileStar. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  