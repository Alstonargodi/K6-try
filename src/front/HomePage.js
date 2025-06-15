import { check, fail } from "k6";
import http from "k6/http";

export function getHomePage(){
    const getHomePage = http.get("https://quickpizza.grafana.com/")
    const checkGet = check(getHomePage,{
        "response code must be 200"  : (reponse) => reponse.status === 200,
    })
    if(!checkGet){
        fail("fail to fetch home page")
    }
}

