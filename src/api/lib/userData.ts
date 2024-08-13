export class UserData {
    private Name! : string
    private Email! : string
    private Password! : string 

    constructor(name: string, email: string, password: string ) {
       this.setName(name)
       this.setemail(email)
       this.setUserId(password)
    }

    setName (name: string) {
        if(name == null || name.trim() === "") {
            throw new Error("name cannot be null or empty")
        }
        this.Name = name
    }
    setemail (email: string) {
        if (email == null || email.trim() === " ") {
            throw new Error("email cannot be null or empty");
          }
        this.Email = email
    }
    setUserId (password: string) {
        if(password == null || password.trim() === " ") {
            throw new Error("password cannot be null")
        }
        this.Password = password
    }
    getName() {
        return this.Name
    }
    getEmail() {
        return this.Email
    }
    getPassword() {
        return this.Password
    }
}