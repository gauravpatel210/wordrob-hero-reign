
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 animate-gradient-shift bg-[length:400%_400%]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-indigo-300/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-poppins font-black text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-6 leading-tight">
            Shop the{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:400%_400%]">
              Looks
            </span>{" "}
            You Love
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Buy the outfits your favorite influencers wear
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="font-inter font-semibold text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Explore Products
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-inter font-semibold text-lg px-8 py-4 border-2 border-purple-300 text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
