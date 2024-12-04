export class Personne {
    public id: number;
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public address!: string;
    public sport_type!:string;


    
    constructor(id:number, first_name:string, last_name:string, email:string,address:string,sport_type:string)
     { this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email=email;
    this.address=address;
    this.sport_type=sport_type;
    }
    
    
    
    }