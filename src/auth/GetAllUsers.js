import http from "k6/http"
import { fail,check } from "k6"
import { BaseUrl } from "./BaseUrl.js"

const urlEnd = BaseUrl + '/users'

export function GetAllUsers() {
    const getUser = http.get(urlEnd)
    const checkGet = check(getUser,{
        "response code must 200"  : (reponse) => reponse.status === 200,
        "response data not be null": (reponse) => reponse.body.data != null
    })
    if(!checkGet){
        fail("failed to fetch data")
    }


}