import http from "k6/http"

const registerData = JSON.stringify({
    firstName : "usera",
    lastName : 'testaaaaaaaaaaa',
    age : 90
})

const urlEnd = "http://dummyjson.com/users/add"

export function PostUser(){
    http.post(urlEnd,registerData,{
        headers: { 'Content-Type': 'application/json' }
    })
}