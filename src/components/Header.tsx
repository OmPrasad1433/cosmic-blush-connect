import { Button } from "@/components/ui/button";
import { Heart, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-salmon-pink/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-romantic rounded-full flex items-center justify-center animate-romantic-glow">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
            LoveConnect
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
          <Button variant="soft" size="sm" className="hidden sm:flex">
            <User className="w-4 h-4" />
            Sign In
          </Button>
          <Button variant="romantic" size="sm">
            Join Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;