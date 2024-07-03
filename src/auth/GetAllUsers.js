import http from "k6/http"
import {fail,check} from 'k6'
import exec from 'k6/execution'
import { BaseUrl } from "./BaseUrl.js"

const urlEnd = BaseUrl + '/users'

export function GetAllUsers() {
   const getUser = http.get(urlEnd)

   console.log(`step1: scenario run at ${new Date() - new Date(exec.scenario.startTime)}`)

   const checkUser = check(getUser,{
    'status must 200': (reponse) => reponse.status === 200
   })

   if(getUser.status != 200){
     fail(`response status ${getUser.status}`)
   }
   
}