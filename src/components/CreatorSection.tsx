
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Users, Sparkles } from "lucide-react";

const CreatorSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Earn Money",
      description: "Make money from every outfit you share"
    },
    {
      icon: TrendingUp,
      title: "Grow Your Brand",
      description: "Build your personal fashion brand"
    },
    {
      icon: Users,
      title: "Connect with Fans",
      description: "Share your style with followers"
    },
    {
      icon: Sparkles,
      title: "Be Creative",
      description: "Express your unique fashion sense"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-indigo-400/10 animate-gradient-shift bg-[length:400%_400%]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-purple-300/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Want to{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              earn
            </span>{" "}
            from your outfits?
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join Wordrob as a creator and earn your pocket money from everyday fashion
          </p>
          <Button 
            size="lg"
            className="font-inter font-semibold text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Join the Waitlist
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
