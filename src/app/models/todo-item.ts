export class TodoItem {
    priority: string; // HIGH or MID or LOW
    description: string;
    status: string; // TODO or DONE --> or as boolean

    constructor(priority: string, description: string, status: string) {
        this.priority = priority;
        this.description = description; 
        this.status = status;
    }
}