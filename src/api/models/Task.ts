class User {
    Id : number;
    Name : string; 
    Email : string; 
    Password : string;
    Foregin_Task : string;  

    constructor(id : number, name : string, email : string, password : string, foregin_Task : string) {
        this.Id = id 
        this.Name = name 
        this.Email = email
        this.Password = password
        this.Foregin_Task = foregin_Task
    }
}