import http from "k6/http"

const registerData = JSON.stringify({
    firstName : "usera",
    lastName : 'testaaaaaaaaaaa',
    age : 90
})

const urlEnd = "http://dummyjson.com/users/add"

export const options = {
    // user dengan pengguna statis
    vus: 30,
    // durasi secara statis
    duration: '30s',
};
  

export function RegisterUser(){
    http.post(urlEnd,registerData,{
        headers: { 'Content-Type': 'application/json' }
    })
}

export default function() {
    RegisterUser()
}