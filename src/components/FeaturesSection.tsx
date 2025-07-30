import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, MessageSquare, Filter, Heart, Gift, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Video Chat",
      description: "Connect face-to-face with instant video calls and see real chemistry",
      gradient: "from-accent to-salmon-pink"
    },
    {
      icon: MessageSquare,
      title: "Smart Messaging",
      description: "Send messages, photos, and voice notes with our intuitive chat system",
      gradient: "from-claret to-amaranth-purple"
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      description: "Find your perfect match with age, location, interests, and preference filters",
      gradient: "from-primary to-chocolate-cosmos"
    },
    {
      icon: Heart,
      title: "Smart Matching",
      description: "Our AI learns your preferences to suggest the most compatible people",
      gradient: "from-accent to-blush"
    },
    {
      icon: Gift,
      title: "Virtual Gifts",
      description: "Express your feelings with beautiful virtual gifts and premium features",
      gradient: "from-salmon-pink to-cherry-blossom"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Advanced verification, reporting tools, and 24/7 moderation for your safety",
      gradient: "from-chocolate-cosmos to-claret"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-romantic bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-chocolate-cosmos">For Real Connections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform combines the best of modern dating with authentic human connection
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group border-salmon-pink/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-4 group-hover:animate-romantic-glow`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-chocolate-cosmos">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="passion" size="lg">
            <Heart className="w-5 h-5" />
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;