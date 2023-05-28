import { useContext, createContext, useState ,useEffect} from "react";
import axios from "axios";
import { apiBaseURL } from "../utils/consts";
const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [connectedUser,setConnectedUser]= useState(null);
  const [token,setToken]=useState(null);
  
  useEffect(()=>{
    setConnectedUser(localStorage.getItem("user"))
    setToken(localStorage.getItem("token"))
  },[])

  const register = (payload, onSucess, onFail) => {
    
    let data = JSON.stringify({
      ...payload
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apiBaseURL+"/auth/register",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        const {token,user}=response.data
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("token",token)

        onSucess();
      })
      .catch((error) => {
        const {data,status}=error.response;
        console.log(data,status);
        if (status == 400){
            const {errors}= data
            errors.forEach(error => {
                onFail(error);
            });
        }
        
      });
  };
  const login =(payload,onSucess,onFail)=>{
    let data = JSON.stringify({
      ...payload
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apiBaseURL+"/auth/authenticate",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        const {token,user}=response.data
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("token",token)

        onSucess();
      })
      .catch((error) => {
        // const {data,status}=error.response;
        // console.log(data,status);
        // if (status == 400){
        //     const {errors}= data
        //     errors.forEach(error => {
        //         onFail(error);
        //     });
        // }
        console.log(error);
        
      });

  }
  return (
    <AuthContext.Provider value={{register,login}}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);
