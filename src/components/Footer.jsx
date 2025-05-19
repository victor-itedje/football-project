import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Football</h3>
          <p className="text-sm text-gray-400">
            Your personalized dashboard to manage everything in one place.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <ul className="flex space-x-4 text-gray-400">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Football. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
