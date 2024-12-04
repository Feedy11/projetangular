import { Component } from '@angular/core'; 

@Component({
  selector: 'app-root', 
  // Le nom du composant utilisé dans le HTML pour l'intégrer (balise `<app-root>`).

  templateUrl: './app.component.html', 
  // Chemin vers le fichier HTML associé a ce component.

  styleUrls: ['./app.component.css'] 
  // Liste des fichiers CSS pour le style du composant.
})
export class AppComponent { 
  // Classe du component principal de l'application.

  title = 'projectsport'; 
  // Une propriete `title` declarée, qui contient le titre de l'application.
}
