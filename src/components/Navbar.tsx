import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Shield, Zap, Star, TrendingUp } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">NEETI SHREE ELECTRICALS</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="glow" size="sm">Sign Up</Button>
            <Button variant="electric" size="sm">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;