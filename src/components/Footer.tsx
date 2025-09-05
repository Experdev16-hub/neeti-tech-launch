import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">NEETI SHREE ELECTRICALS</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Your ultimate tech destination launching soon. Stay connected for updates and exclusive offers.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-muted/20 hover:bg-primary/20 rounded-full flex items-center justify-center transition-smooth hover:neon-glow group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              © 2024 NEETI SHREE ELECTRICALS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;