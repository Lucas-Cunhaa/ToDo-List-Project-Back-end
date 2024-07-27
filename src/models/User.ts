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