class User {
    private readonly Id : number;
    private readonly Name : string; 
    private readonly Email : string; 
    private readonly Password : string; 
    
    constructor(id : number, name : string, email : string, password : string) {
        this.Id = id 
        this.Name = name 
        this.Email = email
        this.Password = password
    }

    getId() {
        return this.Id
    }

}
class Task{
    id: number;
    title : string; 
    description : string; 
    progress : string ;
    members : string; 

   constructor(id: number, title : string,  description : string, progress:string, members : string) {
       this.id= id
       this.title = title
       this.description = description
       this.progress = progress
       this.members= members
   }

   getId() {
       return this.id
   }

}
class List {
    id: number;
    title : string; 
    description : string; 
    members : string; 
    user_id : string;

   constructor(id: number, title : string,   description : string, members : string, user_id : string) {
       this.id= id
       this.title = title
       this.description = description
       this.members = members
       this.user_id = user_id
   }
   
   getId() {
       return this.id
   }

}