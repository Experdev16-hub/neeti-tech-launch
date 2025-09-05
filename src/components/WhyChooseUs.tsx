import { DollarSign, Zap, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Competitive pricing on all premium tech products with exclusive deals and offers.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Latest Gadgets",
      description: "First to market with cutting-edge technology from leading global brands.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Trusted Brand",
      description: "Authentic products with official warranties and reliable customer service.",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Quality Assured",
      description: "Rigorous quality checks ensure you get only the best tech products.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose NEETI SHREE ELECTRICALS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building more than just an e-commerce platform - we're creating the future of tech retail
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 card-gradient rounded-full flex items-center justify-center mx-auto group-hover:neon-glow transition-smooth border border-border/50">
                  <feature.icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;