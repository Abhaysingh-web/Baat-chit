import { onAuthStateChanged } from "firebase/auth"
import { createContext } from "react"
import {useState} from "react"
import { useEffect } from "react"
import {auth} from "../firebase"


export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{ // children represent the component 
    const [currentUser , setCurrentUser] = useState({})
  
    useEffect(()=>{
       const unsub =  onAuthStateChanged(auth,(user)=>{  //fire function to check wheater it is use r or not 

            setCurrentUser(user);   
            console.log(user)
        })

        return()=>{
            unsub();
        }
    },[]);

    return(<AuthContext.Provider value={{currentUser}}>         
        {children}                            
    </AuthContext.Provider> );
     //children can reach value means user can reach component
     
     
    
   
      

}