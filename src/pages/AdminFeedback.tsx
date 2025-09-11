import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Bug, Lightbulb, Star, Palette, Zap } from "lucide-react";
import feedbacksData from "@/data/feedbacks.json";

interface Feedback {
  id: number;
  name: string;
  email: string;
  type: string;
  message: string;
  date: string;
  status: string;
}

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  useEffect(() => {
    setFeedbacks(feedbacksData);
  }, []);

  const filteredFeedbacks = feedbacks.filter(feedback => {
    const matchesStatus = statusFilter === "all" || feedback.status === statusFilter;
    const matchesType = typeFilter === "all" || feedback.type === typeFilter;
    return matchesStatus && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "bug": return <Bug className="w-4 h-4" />;
      case "feature": return <Lightbulb className="w-4 h-4" />;
      case "improvement": return <Zap className="w-4 h-4" />;
      case "general": return <Star className="w-4 h-4" />;
      case "ui": return <Palette className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "bug": return "Bug";
      case "feature": return "Fonctionnalité";
      case "improvement": return "Amélioration";
      case "general": return "Général";
      case "ui": return "Interface";
      default: return type;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "new": return "destructive";
      case "in-progress": return "secondary";
      case "resolved": return "default";
      default: return "outline";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "new": return "Nouveau";
      case "in-progress": return "En cours";
      case "resolved": return "Résolu";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Administration - Feedbacks
          </h1>
          <p className="text-muted-foreground">
            Gérez tous les retours utilisateurs de l'application NoMore
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filtrer par statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="new">Nouveau</SelectItem>
              <SelectItem value="in-progress">En cours</SelectItem>
              <SelectItem value="resolved">Résolu</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filtrer par type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="bug">Bug</SelectItem>
              <SelectItem value="feature">Fonctionnalité</SelectItem>
              <SelectItem value="improvement">Amélioration</SelectItem>
              <SelectItem value="general">Général</SelectItem>
              <SelectItem value="ui">Interface</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Feedbacks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{feedbacks.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Nouveaux
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">
                {feedbacks.filter(f => f.status === "new").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                En cours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary-foreground">
                {feedbacks.filter(f => f.status === "in-progress").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Résolus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {feedbacks.filter(f => f.status === "resolved").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tableau des feedbacks */}
        <Card>
          <CardHeader>
            <CardTitle>Liste des Feedbacks ({filteredFeedbacks.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Utilisateur</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFeedbacks.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{feedback.name}</div>
                        <div className="text-sm text-muted-foreground">{feedback.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(feedback.type)}
                        <span className="text-sm">{getTypeLabel(feedback.type)}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-md">
                      <div className="truncate" title={feedback.message}>
                        {feedback.message}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-muted-foreground">
                        {new Date(feedback.date).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(feedback.status)}>
                        {getStatusLabel(feedback.status)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminFeedback;