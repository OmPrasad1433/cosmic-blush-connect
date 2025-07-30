import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate-cosmos text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-romantic rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">LoveConnect</span>
            </div>
            <p className="text-salmon-pink leading-relaxed">
              Connecting hearts worldwide through authentic relationships and meaningful connections.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-salmon-pink hover:text-white transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-salmon-pink hover:text-white transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-salmon-pink hover:text-white transition-colors cursor-pointer" />
              <Youtube className="w-5 h-5 text-salmon-pink hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-cherry-blossom">Product</h3>
            <ul className="space-y-2 text-salmon-pink">
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-cherry-blossom">Support</h3>
            <ul className="space-y-2 text-salmon-pink">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-cherry-blossom">Legal</h3>
            <ul className="space-y-2 text-salmon-pink">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-salmon-pink/20 mt-8 pt-8 text-center text-salmon-pink">
          <p>&copy; 2024 LoveConnect. Made with <Heart className="w-4 h-4 inline text-accent" /> for meaningful connections.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;