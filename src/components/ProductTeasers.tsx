import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Smartphone, Headphones } from "lucide-react";
import laptopsImage from "@/assets/laptops.jpg";
import phonesImage from "@/assets/phones.jpg";
import accessoriesImage from "@/assets/accessories.jpg";

const ProductTeasers = () => {
  const products = [
    {
      title: "Premium Laptops",
      description: "High-performance laptops from leading brands. MacBooks, Windows ultrabooks, and gaming rigs.",
      image: laptopsImage,
      icon: Laptop,
      gradient: "bg-gradient-to-br from-primary/10 to-accent/10"
    },
    {
      title: "Latest Smartphones", 
      description: "Cutting-edge smartphones with the latest features. iPhones, Samsung Galaxy, and more.",
      image: phonesImage,
      icon: Smartphone,
      gradient: "bg-gradient-to-br from-secondary/10 to-primary/10"
    },
    {
      title: "Tech Accessories",
      description: "Premium accessories to complement your devices. Headphones, smartwatches, and gadgets.",
      image: accessoriesImage,
      icon: Headphones,
      gradient: "bg-gradient-to-br from-accent/10 to-secondary/10"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What's Coming to Our Store
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a sneak peek at our carefully curated collection of premium tech products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.title}
              className="group animate-scale-in card-gradient rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-smooth hover:neon-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className={`absolute inset-0 ${product.gradient} mix-blend-overlay`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button variant="glow" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTeasers;