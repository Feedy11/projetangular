import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { AjoutComponent } from './ajout/ajout.component'; 
import { ListComponent } from './list/list.component'; 
import { ModifComponent } from './modif/modif.component'; 

import { FootComponent } from './foot/foot.component'; 
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  // Redirection par défaut vers `/list` lorsque l'URL est vide.

  { path: 'ajouter', component: AjoutComponent },
  { path: 'list', component: ListComponent },
  { path: 'modifier/:id', component: ModifComponent }, 
  // Route dynamique pour modifier un élément avec un ID spécifique.

  { path: 'foot', component: FootComponent },

  //{ path: '**', redirectTo: '/list' } 
  // Redirige toutes les URL non définies vers `/list`.
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  // On importe les routes definis dans l'application avec `RouterModule.forRoot`.

  exports: [RouterModule] 
  // On export le RouterModule pour qu'il soit accesible par d'autre modules.
})
export class AppRoutingModule { } 
// Declaration de la classe `AppRoutingModule`, qui configure les routes de l'application.
