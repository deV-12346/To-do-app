import { useContext } from "react"
import { AppContext } from "./AppContext"

export const useAppContext = () =>{
      const contextConsumer = useContext(AppContext)
      if(!contextConsumer){
            throw new Error("No Provider")
      }
      return contextConsumer
}