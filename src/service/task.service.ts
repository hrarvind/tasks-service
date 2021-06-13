import { Task } from '../model/task.model';



let tasks: Task[] = [
    {
        id: 1,
        taskName: 'Cycling',
        description: 'Complete 100 Kms cycling by end of June',
        dueDate: '06/30/2021',
        taskStatus: 1
    },
    {
        id: 2,
        taskName: 'Running',
        description: '50 Kms of running by mid of June',
        dueDate: '06/15/2021',
        taskStatus: 1
    }
];
export function getAllTasks(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({tasks: <Task[]>tasks});
        }, 1000);
    });
}

export function createTask(task:Task) {
    return new Promise(resolve => {
        setTimeout(() => {
            tasks.push(task);
            resolve({...task});
        }, 1000);
    })
}