import { TestBed } from '@angular/core/testing'; 

import { AuthService } from './auth.service'; 
describe('AuthService', () => { 

  let service: AuthService; 
  // Declaration d'une variable pour contenir une instance du service a tester.

  beforeEach(() => { 
    // Cette fonction s'exécute avant chaque test pour initialiser l'environnement.

    TestBed.configureTestingModule({}); 
    // Configuration du module de test avec `TestBed`.

    service = TestBed.inject(AuthService); 
    // Injection d'une instance d'`AuthService` pour le tester.
  });

  it('should be created', () => { 
    // Un test individuel, qui vérifie si le service est correctement créé.

    expect(service).toBeTruthy(); 
    // Vérifie que l'instance du service existe (pas `null` ou `undefined`).
  });
});
