import { Component } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {

  personne:Personne={
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    sport_type: ""
    
  };

  constructor(private personneservice: PersonneService) {}


  
  submitForm() {
  this.personneservice.addPersonne(this.personne).subscribe(() => {
    alert('account created successfully ');  
    console.log('person added successfully');
  });
}
}
  
  
  

  
  
  
    




