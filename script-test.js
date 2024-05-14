import http from "k6/http";

export const options = {
    iterations: 1,
}

export default function (){
    const reponse = http.get("https://test-api.k6.io/public/crocodiles/");
}