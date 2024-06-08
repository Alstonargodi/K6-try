import http from "k6/http"
import execution from "k6/execution"
import { fail,check } from "k6"
import { BaseUrl } from "./BaseUrl.js"

export default function RegisterUser(){
    const registerData = JSON.stringify({
        firstName : `user${execution.vu.idInInstance}`,
        lastName : 'testaaaaaaaaaaa',
        age : 90
    })
    const urlEnd =  BaseUrl + "/users/add"
    const register = http.post(urlEnd,registerData,{
        headers: { 
            'Accept' : 'application/json',
            'Content-Type': 'application/json' 
        }
    })
    const checkGet = check(register,{
        "response code must 200"  : (reponse) => {
            console.log(reponse.status)
            reponse.status === 200
        },
    })
    if(!checkGet){
        fail("failed to register user")
    }

}