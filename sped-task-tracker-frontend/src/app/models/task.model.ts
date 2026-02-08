import { TaskStatus } from "./task-status.model";

export interface Task{

    id: number;
    titulo: string;
    descricao: string;
    dataCriacao: string;
    status: TaskStatus;


}