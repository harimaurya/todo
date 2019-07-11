export class Todo {
    key:string = null;
    task:string = null;
    type:string = 'general';
    status:boolean = true;
    date:string = String(new Date());
}