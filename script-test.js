import http from "k6/http";
import { check, sleep } from 'k6';

export const baseUrl = "https://test-api.k6.io/public/crocodiles/"

export const options = {
    stages:[
        { duration: '10s', target: 10 },
    ],
} 

export const params = {
    header:{
        'content-Type' : "application/json",
    },
}


//payload signin
const payload = JSON.stringify({
    email : 'aaa',
    password: 'bbb'
})


export default function (){
    const response = http.post(baseUrl,payload,params)
    check(response,{'status 200':(r)=> console.log(r)})
    // check(response,{'status 200': (r) => r.status == 200})
    // sleep(1)
}