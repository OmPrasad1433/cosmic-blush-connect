"use client";

import Image from "next/image";
import { Heart, Play, Sparkles, Users, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full background with parallax effect */}
      <div className="absolute inset-0 scale-110">
        <Image
          src="/hero-romantic-v2.jpg"
          alt="Romantic couples in cherry blossom sunset"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-cherry-blossom/20 to-background/90" />
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-8 animate-bounce opacity-70" style={{ animationDelay: "0s", animationDuration: "3s" }}>
          <Heart className="w-8 h-8 text-salmon-pink drop-shadow-lg" fill="currentColor" />
        </div>
        <div className="absolute top-32 right-16 animate-pulse opacity-60" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-10 h-10 text-bright-pink drop-shadow-lg" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce opacity-50" style={{ animationDelay: "2s", animationDuration: "4s" }}>
          <Heart className="w-6 h-6 text-cherry-blossom drop-shadow-lg" fill="currentColor" />
        </div>
        <div className="absolute top-1/2 right-8 animate-pulse opacity-40" style={{ animationDelay: "3s" }}>
          <Star className="w-7 h-7 text-salmon-pink drop-shadow-lg" fill="currentColor" />
        </div>
      </div>

      {/* Main content with enhanced styling */}
      <div className="relative z-10 w-full px-6 max-w-6xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cherry-blossom/80 backdrop-blur-sm text-claret px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Shield className="w-4 h-4" />
          Trusted by 2M+ singles worldwide
        </div>

        {/* Main headline with better typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-extrabold mb-8 leading-tight">
          <span className="bg-gradient-romantic bg-clip-text text-transparent drop-shadow-lg">
            Welcome to
          </span>
          <br />
          <span className="text-chocolate-cosmos drop-shadow-md">
            Santal community
          </span>
        </h1>

        {/* Enhanced subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Join the most romantic dating community where authentic connections bloom into lasting love stories. Your soulmate is waiting.
        </p>

        {/* Enhanced stats with better visual hierarchy */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">
              2M+
            </div>
            <div className="text-muted-foreground font-medium">Active Singles</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">
              500K+
            </div>
            <div className="text-muted-foreground font-medium">Love Stories</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">
              4.9★
            </div>
            <div className="text-muted-foreground font-medium">User Rating</div>
          </div>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button 
            size="lg"
            className="bg-gradient-romantic text-primary-foreground shadow-romantic w-full sm:w-auto px-10 py-4 text-lg rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Heart className="w-6 h-6 mr-3" fill="currentColor" />
            Start Your Love Story
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-salmon-pink/50 text-claret bg-cherry-blossom/30 backdrop-blur-sm w-full sm:w-auto px-10 py-4 text-lg rounded-xl hover:bg-salmon-pink/40 transition-all duration-300"
          >
            <Play className="w-6 h-6 mr-3" />
            See Success Stories
          </Button>
        </div>

        {/* Enhanced trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-foreground/70">
          <div className="flex items-center gap-3 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users className="w-5 h-5 text-accent" />
            <span className="font-medium">Verified Profiles</span>
          </div>
          <div className="flex items-center gap-3 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Heart className="w-5 h-5 text-accent" />
            <span className="font-medium">Real Connections</span>
          </div>
          <div className="flex items-center gap-3 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="font-medium">Smart Matching</span>
          </div>
        </div>
      </div>

      {/* Enhanced bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;