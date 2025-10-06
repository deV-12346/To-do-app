import React, { useState } from "react"
import { AppContext, type todo} from "./AppContext"

export type TodoProviderProps = {
      children:React.ReactNode
}

export const AppProvider = ({children}:TodoProviderProps) =>{
      const [todos,setTodos] = useState<todo[]>([])

      const handleAddTodo = (task:string) =>{
            setTodos((prev)=>{
             const newTodos:todo[] = [
            {
                  id:Math.random().toString(),
                  task:task,
                  completed:false,
                  createAt:new Date()
            },
            ...prev
            ]
            console.log(prev)
            console.log(newTodos)
            return newTodos
            })
      }
      
      const value = {todos,handleAddTodo }
      return(
            <AppContext.Provider value={value}>
                  {children}
            </AppContext.Provider>
      )
}