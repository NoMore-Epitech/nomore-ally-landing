import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Slogan principal */}
        <div className="animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter text-foreground mb-6 leading-tight">
            Ton allié dans la lutte<br />
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              contre les addictions
            </span>
          </h2>
        </div>
        
        {/* Description */}
        <div className="animate-slide-up">
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            NoMore t'accompagne au quotidien avec bienveillance et efficacité dans ton parcours vers la liberté.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Reprends le contrôle de ta vie grâce à des outils personnalisés et un soutien constant.
          </p>
        </div>

        {/* Bouton de téléchargement */}
        <div className="animate-slide-up">
          <a 
            href="/NoMore-App.apk" 
            download="NoMore-App.apk"
            className="inline-flex items-center justify-center bg-gradient-warm text-primary-foreground font-semibold px-8 py-4 text-lg shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105 group rounded-lg"
          >
            <Smartphone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Télécharger sur Android
            <Download className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Badge de confiance */}
        <div className="animate-fade-in mt-8">
          <p className="text-sm text-muted-foreground">
            ✨ Application gratuite • Données sécurisées • Support 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;