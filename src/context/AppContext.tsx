import  { createContext } from "react";

export type todo = {
      id:string;
      task:string;
      completed:boolean;
      createAt:Date
}
type TodosContext = {
      todos:todo[];
      handleAddTodo:(todo:string)=>void
}
export const AppContext = createContext<TodosContext | null>(null)

