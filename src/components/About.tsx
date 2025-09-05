import { Target, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Revolutionizing Tech Shopping
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              NEETI SHREE ELECTRICALS is launching soon as your premier destination 
              for cutting-edge technology. We're building something extraordinary 
              to transform how you discover and purchase tech gadgets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:neon-glow transition-smooth">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading tech marketplace offering the latest gadgets 
                with unmatched customer experience.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:purple-glow transition-smooth">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Curating the most innovative and cutting-edge technology products 
                from leading brands worldwide.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:neon-glow transition-smooth">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building a community of tech enthusiasts who share our passion 
                for innovation and quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;