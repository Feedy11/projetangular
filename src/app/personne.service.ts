import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
import { Personne } from './personne';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  private readonly apiUrl = 'http://localhost:3000/personnes';

  constructor(private http: HttpClient, private router: Router) {}

  public getPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des personnes:', error);
        return throwError(error);
      })
    );
  }

  addPersonne(npersonne: Personne): Observable<Personne[]> {
    return this.http.post<Personne[]>(this.apiUrl, npersonne).pipe(
      tap(() => {
        console.log('Nouvelle personne ajoutée.');
        this.router.navigate(['']);
      }),
      catchError((error) => {
        console.error('Erreur lors de l’ajout de la personne:', error);
        return throwError(error);
      })
    );
  }

  deletePersonne(id: number): Observable<Personne[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Personne[]>(url).pipe(
      tap(() => {
        console.log(`Personne avec ID ${id} supprimée.`);
      }),
      catchError((error) => {
        console.error('Erreur lors de la suppression de la personne:', error);
        return throwError(error);
      })
    );
  }

  public updatePersonne(updatedPersonne: Personne): Observable<Personne> {
    const url = `${this.apiUrl}/${updatedPersonne.id}`;
    return this.http.put<Personne>(url, updatedPersonne).pipe(
      tap(() => {
        console.log('Personne mise à jour.');
        this.router.navigate(['']);
      }),
      catchError((error) => {
        console.error('Erreur lors de la mise à jour de la personne:', error);
        return throwError(error);
      })
    );
  }

  public getPersonneById(id: number): Observable<Personne> {
    const url = `${this.apiUrl}/${id}`; 
    return this.http.get<Personne>(url).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération de la personne:', error);
        return throwError(error);
      })
    );
  }
}
