import appScreenshot from "@/assets/nomore-app-screenshot.jpg";

const AppScreenshotSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenu texte */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl sm:text-4xl font-bold font-inter text-foreground mb-6 leading-tight">
              Une interface pensée<br />
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                pour ton bien-être
              </span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Découvre une expérience utilisateur intuitive et apaisante, conçue pour t'accompagner 
              sereinement dans ton parcours de guérison.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Interface claire et rassurante</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Données de progression visualisées</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Messages d'encouragement quotidiens</span>
              </div>
            </div>
          </div>

          {/* Image de l'application */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-warm rounded-3xl opacity-20 blur-xl animate-float"></div>
              <img 
                src={appScreenshot} 
                alt="Capture d'écran de l'application NoMore montrant l'interface de suivi quotidien"
                className="relative w-full max-w-sm mx-auto rounded-3xl shadow-glow border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshotSection;