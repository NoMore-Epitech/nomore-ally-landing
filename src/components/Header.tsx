import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center shadow-soft">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold font-inter text-foreground tracking-tight">
            NoMore
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            À propos
          </a>
          <a 
            href="#features" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Fonctionnalités
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;