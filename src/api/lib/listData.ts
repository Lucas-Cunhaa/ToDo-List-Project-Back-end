export class ListData {
    private Title! : string
    private Description! : string
    private User_id! : number 

    constructor(title: string, description: string, user_id: number ) {
       this.setTitle(title)
       this.setDescription(description)
       this.setUserId(user_id)
    }

    setTitle (title: string) {
        if(title == null || title.trim() === "") {
            throw new Error("Title cannot be null or empty")
        }
        this.Title = title
    }
    setDescription (description: string) {
        if (description == null || description.trim() === " ") {
            throw new Error("Description cannot be null or empty");
          }
        this.Description = description
    }
    setUserId (user_id: number) {
        if( user_id <= 0) {
            throw new Error("user_id cannot be null on class")
        }
        this.User_id = user_id
    }
    getTitle() {
        return this.Title
    }
    getDescription() {
        return this.Description
    }
    getUserId() {
        return this.User_id
    }
}