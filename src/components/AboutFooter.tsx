
import { Instagram, Twitter, Linkedin } from "lucide-react";

const AboutFooter = () => {
  return (
    <section className="bg-gray-900 text-white">
      {/* About Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-8">
              What is{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Wordrob
              </span>
              ?
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Wordrob is building a shopping experience powered by creators. Fans can buy the looks they love 
              while creators earn through affiliate links.
            </p>
            <p className="font-inter text-sm text-gray-400 max-w-3xl mx-auto">
              *We use affiliate links and may earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-poppins font-bold text-2xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Wordrob
              </h3>
              <p className="font-inter text-gray-400 mt-2">
                Shop the looks you love
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="font-inter text-gray-400">
              © 2024 Wordrob. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFooter;
