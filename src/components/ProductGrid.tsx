
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Anarkali Kurta Set",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
      creator: "@desi_diva_maya",
      category: "Dresses"
    },
    {
      id: 2,
      name: "Embroidered Saree",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600&fit=crop",
      creator: "@saree_style_queen",
      category: "Sarees"
    },
    {
      id: 3,
      name: "Palazzo Suit Set",
      price: "₹1,899",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=600&fit=crop",
      creator: "@minimal_chic_india",
      category: "Suits"
    },
    {
      id: 4,
      name: "Designer Lehenga",
      price: "₹8,999",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=600&fit=crop",
      creator: "@royal_fashion_hub",
      category: "Lehengas"
    },
    {
      id: 5,
      name: "Cotton Kurti",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1564694099-75c0c32c5fdf?w=400&h=600&fit=crop",
      creator: "@boho_vibes_mumbai",
      category: "Tops"
    },
    {
      id: 6,
      name: "Crop Top & Skirt Set",
      price: "₹1,599",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
      creator: "@trendy_teen_delhi",
      category: "Sets"
    },
    {
      id: 7,
      name: "Sharara Suit",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
      creator: "@glamour_goddess_pune",
      category: "Suits"
    },
    {
      id: 8,
      name: "Indo-Western Jumpsuit",
      price: "₹2,299",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop",
      creator: "@fusion_fashion_bangalore",
      category: "Dresses"
    },
    {
      id: 9,
      name: "Bandhani Dupatta Set",
      price: "₹1,799",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
      creator: "@rajasthani_roots",
      category: "Sets"
    },
    {
      id: 10,
      name: "Silk Blouse Collection",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe64?w=400&h=600&fit=crop",
      creator: "@silk_stories_chennai",
      category: "Tops"
    }
  ];

  const categories = ["All Categories", "Dresses", "Sarees", "Suits", "Lehengas", "Tops", "Sets"];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All Categories" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBuyNow = (productName: string) => {
    // Dummy Amazon India link - in real app this would be actual affiliate links
    window.open(`https://amazon.in/s?k=${encodeURIComponent(productName)}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 pb-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search influencer looks..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 font-inter rounded-full border-gray-300 focus:border-purple-500 transition-all duration-300"
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"} 
                  onClick={() => setActiveCategory(category)}
                  className={`font-inter rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105" 
                      : "hover:bg-pink-50 hover:border-pink-300"
                  }`}
                >
                  {category === "All Categories" && <Filter className="w-4 h-4 mr-2" />}
                  {category}
                </Button>
              ))}
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
          {filteredProducts.map((product, index) => (
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
