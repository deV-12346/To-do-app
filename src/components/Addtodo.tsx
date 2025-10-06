import React, { useState} from 'react'
import { useAppContext } from '../context/UseAppContext'

const Addtodo = () => {
      const [todo,setTodo] = useState("")
      const {handleAddTodo} = useAppContext()
      const HandleTodo = (e:React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault()
            setTodo("")
            handleAddTodo(todo)
      }
  return (
    <div>
      <form onSubmit={HandleTodo}>
      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} name='todo' />
      <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Addtodo