import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Bug, Lightbulb, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi - ici vous pourriez intégrer avec votre backend
    toast({
      title: "Merci pour votre retour !",
      description: "Votre message a été envoyé avec succès. Nous vous répondrons rapidement.",
    });
    
    // Reset du formulaire
    setFormData({ name: "", email: "", type: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Espace Beta Testeur
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aidez-nous à améliorer NoMore ! Partagez vos retours, signalez des bugs 
            ou proposez de nouvelles fonctionnalités.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-accent/20 hover:border-primary/30 transition-colors">
              <CardHeader>
                <Bug className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Signaler un Bug</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rencontré un problème ? Aidez-nous à le corriger rapidement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20 hover:border-primary/30 transition-colors">
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Suggérer une Idée</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Une idée d'amélioration ? Nous sommes à l'écoute !
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20 hover:border-primary/30 transition-colors">
              <CardHeader>
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Retour Général</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Partagez votre expérience globale avec l'application.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="border-accent/20 shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Envoyer un Retour
              </CardTitle>
              <CardDescription>
                Tous les champs sont requis pour que nous puissions vous répondre.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type de retour</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type de retour" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug">🐛 Signaler un bug</SelectItem>
                      <SelectItem value="feature">💡 Suggérer une fonctionnalité</SelectItem>
                      <SelectItem value="improvement">⚡ Proposer une amélioration</SelectItem>
                      <SelectItem value="general">💬 Retour général</SelectItem>
                      <SelectItem value="ui">🎨 Interface utilisateur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Votre message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Décrivez votre retour en détail... Plus vous êtes précis, mieux nous pourrons vous aider !"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-warm text-primary-foreground hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Envoyer mon Retour
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;