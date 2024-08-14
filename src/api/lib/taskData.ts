export class TaskData {
    private Title! : string;
    private Description! : string;
    private State! : string ;
    private List_id! : number;
    private Member_id! : number; 

    constructor(title: string, description: string, state: string, list_id: number, member_id: number ) {
       this.setTitle(title);
       this.setDescription(description);
       this.setListId(list_id);
       this.setState(state); 
       this.setListId(list_id);
       this.setMemberId(member_id);  
    
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
    setState (state: string) {
        this.State = state
    }
    setListId (list_id: number) {
        if( list_id <= 0) {
            throw new Error("user_id cannot be null")
        }
        this.List_id = list_id
    }
    setMemberId (member_id: number) {
        this.Member_id = member_id
    }
    getTitle() {
        return this.Title
    }
    getDescription() {
        return this.Description
    }
    getState() {
        return this.State
    }
    getListId() {
        return this.List_id
    }
    getMemberId() {
        return this.Member_id
    }
}