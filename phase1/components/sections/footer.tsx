const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Yuta Nishizaki
            </h3>
            <p className="text-gray-400">Frontend & WordPress Developer</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-gray-400">
            <span>The Hague, Netherlands</span>
            <span className="hidden sm:block">•</span>
            <span>nszk.yuta@gmail.com</span>
            <span className="hidden sm:block">•</span>
            <span>+31 617766418</span>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Yuta Nishizaki. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Crafted with passion using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
