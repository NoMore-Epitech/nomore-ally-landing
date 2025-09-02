import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Logo et copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-warm rounded-md flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-foreground font-semibold font-inter">
              © 2024 NoMore
            </span>
          </div>

          {/* Liens du footer */}
          <nav className="flex items-center space-x-8">
            <a 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Confidentialité
            </a>
            <a 
              href="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a 
              href="/support" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </a>
          </nav>
        </div>

        {/* Message d'encouragement */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Chaque jour est une nouvelle opportunité de reprendre le contrôle de ta vie."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;