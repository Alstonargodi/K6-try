import http from "k6/http"
import { BaseUrl } from "./BaseUrl.js"

const registerData = JSON.stringify({
    firstName : "usera",
    lastName : 'testaaaaaaaaaaa',
    age : 90
})

const urlEnd =  BaseUrl + "/users/add"

export function RegisterUser(){
    http.post(urlEnd,registerData,{
        headers: { 'Content-Type': 'application/json' }
    })
}