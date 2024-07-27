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