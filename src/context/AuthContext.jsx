import { useContext, createContext, useState } from "react";
import axios from "axios";
import { apiBaseURL } from "../utils/consts";
const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  
  const login = (payload, onSucess, onFail) => {
    
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
        console.log(JSON.stringify(response.data));
        onSucess();
      })
      .catch((error) => {
        const {data,status}=error.response;
        console.log(data,status);
        if (status==400){
            const {errors}= data
            errors.forEach(error => {
                onFail(error);
            });
        }
        
      });
  };
  return (
    <AuthContext.Provider value={{login}}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);
