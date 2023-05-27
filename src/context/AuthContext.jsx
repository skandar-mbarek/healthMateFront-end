import { useContext,createContext,useState } from "react";
const AuthContext=createContext(null);

export default function AuthProvider({children}){
    const [counter,setCounter]=useState(0)
    return(
        <AuthContext.Provider value={{counter,setCounter}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext=()=>useContext(AuthContext)