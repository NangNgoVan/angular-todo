export enum TodoStatus {
    COMPLETED = 'COMPLETED',
    DOING = 'DOING'
}

export interface Todo {
    id: string
    name: string
    state: string     
}
