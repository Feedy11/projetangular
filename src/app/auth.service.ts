import { Injectable } from '@angular/core'; 
// Importation du decorateur `Injectable`, utilisé pour déclarer un service Angular.

@Injectable({
  providedIn: 'root' 
  // Configuration de l'injection de dépendance. 
  // `providedIn: 'root'` signifie que ce service est disponible dans toute l'application.
})
export class AuthService { 
  // Declaration de la classe `AuthService`, qui gére l'authentification.

  constructor() { } 

  isLoggedIn = false; 
  // Une propriété boolean pour suivre si l'utilisateur est connecté ou pas.
}
