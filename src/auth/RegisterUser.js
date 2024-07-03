import http from "k6/http"
import {fail} from 'k6'
import execution from 'k6/execution'
import { BaseUrl } from "./BaseUrl.js"


const urlEnd =  BaseUrl + "/users/add"

export function createUser(){
    const data = []
    for(const i=0;i < 10;i++){
        data.push({
            firstName : `user ${i}`,
            lastName : 'test',
            age : 90
        })
    }
    return data
}

export function RegisterUser(){
    const registerData = JSON.stringify({
        firstName : `user ${execution.vu.idInInstance}`,
        lastName : 'testaaaaaaaaaaa',
        age : 90
    })

    const postRegister = http.post(urlEnd,registerData,{
        headers: { 'Content-Type': 'application/json' }
    })

    if(postRegister.status != 200){
        fail(`response status ${postRegister.status} not 200`)
    }

}