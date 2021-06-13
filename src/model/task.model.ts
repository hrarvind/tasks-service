export interface PostTask {
    taskName: string;
    description: string;
    dueDate: any;
    taskStatus: number;
}

export interface Task extends PostTask {
    id: number;
}