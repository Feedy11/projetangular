import { Component } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
per: any;
  personnes=new Array<Personne>();
  

  constructor( private empService:PersonneService ,public authService: AuthService) {
    empService.getPersonne().subscribe(response => this.personnes = response )
    }
    
    delPeronne(id:number) {
      console.log(id);
      this.empService.deletePersonne(id).subscribe(response => {
       console.log(`Employee with ID ${id} deleted successfully.`);
      });}
    

      


}
