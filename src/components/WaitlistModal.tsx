import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, AtSign } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    influencerId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Wordrob! 🎉",
        description: "You've been added to our waitlist. We'll notify you when we launch!",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", influencerId: "" });
      onClose();
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
        <DialogHeader className="text-center">
          <DialogTitle className="font-poppins text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Join Wordrob Waitlist ✨
          </DialogTitle>
          <DialogDescription className="font-inter text-gray-600">
            Be the first to shop creator looks and earn from your style!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-inter font-medium text-gray-700">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="pl-10 font-inter border-gray-300 focus:border-pink-500 focus:ring-pink-500 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-inter font-medium text-gray-700">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10 font-inter border-gray-300 focus:border-pink-500 focus:ring-pink-500 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="influencerId" className="font-inter font-medium text-gray-700">
              Influencer ID <span className="text-gray-400">(optional)</span>
            </Label>
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="influencerId"
                type="text"
                placeholder="@your_instagram_handle"
                value={formData.influencerId}
                onChange={(e) => handleInputChange("influencerId", e.target.value)}
                className="pl-10 font-inter border-gray-300 focus:border-pink-500 focus:ring-pink-500 transition-all duration-300"
              />
            </div>
            <p className="text-xs text-gray-500 font-inter">
              Add your social handle if you're interested in becoming a creator
            </p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-inter font-semibold py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Joining Waitlist...
              </div>
            ) : (
              "Join the Waitlist 🚀"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;