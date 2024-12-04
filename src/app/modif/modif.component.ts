import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';


@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})

export class ModifComponent implements OnInit{
  

personne:Personne={id:0,first_name:'',last_name:'',email:'',address:'',sport_type:''}
  


constructor(
  private route: ActivatedRoute,
  private personneService: PersonneService
) {}

  ngOnInit(): void {
 
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam !== null) {
      const id = +idParam;
      this.personneService.getPersonneById(id).subscribe((personne) => {
        this.personne=personne;
      });
    } else {
      console.error('Employee ID is null.');
      
    }
  }

  updatePersonne(): void {
    this.personneService.updatePersonne(this.personne).subscribe(() => {
      
    });
  }
}
