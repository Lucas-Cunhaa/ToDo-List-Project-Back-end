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