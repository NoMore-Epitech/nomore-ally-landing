import { Card } from "@/components/ui/card";
import { Calendar, Users, Target } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Suivi quotidien",
    description: "Enregistre tes progrès jour après jour et visualise ton évolution avec des statistiques personnalisées."
  },
  {
    icon: Users,
    title: "Soutien personnalisé",
    description: "Bénéficie d'un accompagnement adapté à ton profil et de conseils bienveillants selon tes besoins."
  },
  {
    icon: Target,
    title: "Motivation constante",
    description: "Reçois des encouragements quotidiens et atteins tes objectifs étape par étape avec des défis adaptés."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold font-inter text-foreground mb-4">
            Pourquoi choisir NoMore ?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvre les fonctionnalités qui font de NoMore ton meilleur allié dans ce combat important.
          </p>
        </div>

        {/* Grille des avantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 text-center border-border/50 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h4 className="text-xl font-semibold font-inter text-foreground mb-4">
                  {feature.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;