import { Button } from "@/components/ui/button";
import { Heart, Play, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/hero-romantic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-soft"></div>
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="w-6 h-6 text-salmon-pink opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-8 h-8 text-accent opacity-50" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Heart className="w-5 h-5 text-blush opacity-70" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 leading-tight">
            <span className="bg-gradient-romantic bg-clip-text text-transparent">
              Welcome to 
            </span>
            <br />
            <span className="text-chocolate-cosmos">
              Santal community
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-inter text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover meaningful connections and find your perfect match in a safe, vibrant community. Join us today and start your romantic journey!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">2M+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">500K+</div>
              <div className="text-sm text-muted-foreground">Matches Made</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Heart className="w-5 h-5" />
              Start Dating Now
            </Button>
            <Button variant="soft" size="lg" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Watch How It Works
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>Safe & Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              <span>Real Connections</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Smart Matching</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;