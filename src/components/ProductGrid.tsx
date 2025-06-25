
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: "$89",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
      creator: "@fashionista_maya"
    },
    {
      id: 2,
      name: "Vintage Denim Jacket",
      price: "$125",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop",
      creator: "@style_queen_alex"
    },
    {
      id: 3,
      name: "Silk Slip Dress",
      price: "$156",
      image: "https://images.unsplash.com/photo-1566479179817-0dcc8e73ff0e?w=400&h=600&fit=crop",
      creator: "@minimal_chic"
    },
    {
      id: 4,
      name: "Oversized Blazer",
      price: "$199",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      creator: "@boss_babe_style"
    },
    {
      id: 5,
      name: "Boho Maxi Dress",
      price: "$134",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      creator: "@boho_vibes_only"
    },
    {
      id: 6,
      name: "Crop Top Set",
      price: "$78",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
      creator: "@trendy_teen"
    },
    {
      id: 7,
      name: "Evening Gown",
      price: "$299",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
      creator: "@glamour_goddess"
    },
    {
      id: 8,
      name: "Casual Jumpsuit",
      price: "$112",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop",
      creator: "@everyday_elegance"
    }
  ];

  const handleBuyNow = (productName: string) => {
    // Dummy Amazon link - in real app this would be actual affiliate links
    window.open(`https://amazon.com/s?k=${encodeURIComponent(productName)}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 pb-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search influencer looks..." 
                className="pl-10 py-3 font-inter rounded-full border-gray-300 focus:border-purple-500"
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="font-inter rounded-full">
                <Filter className="w-4 h-4 mr-2" />
                All Categories
              </Button>
              <Button variant="outline" className="font-inter rounded-full">Dresses</Button>
              <Button variant="outline" className="font-inter rounded-full">Tops</Button>
              <Button variant="outline" className="font-inter rounded-full">Bottoms</Button>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Featured Creator Picks
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the hottest fashion pieces worn by your favorite influencers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-inter font-medium text-purple-600">{product.creator}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                <p className="font-inter font-bold text-xl text-purple-600 mb-4">{product.price}</p>
                <Button 
                  className="w-full font-inter font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleBuyNow(product.name)}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
