import { Button } from "@/components/ui/button";
import { Heart, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-salmon-pink/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center animate-romantic-glow overflow-hidden">
            <img 
              src="/lovable-uploads/f6f77930-ba48-4dbf-bc97-5fb28b43607b.png" 
              alt="Nawa Napam Logo" 
              className="w-full h-full object-cover filter hue-rotate-[300deg] saturate-150 brightness-110"
            />
          </div>
          <span className="text-xl font-bold font-playfair bg-gradient-romantic bg-clip-text text-transparent">
            Nawa Napam
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            How it Works
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            Safety
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            Premium
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="soft" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4" />
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="romantic" size="sm">
              Join Now
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;