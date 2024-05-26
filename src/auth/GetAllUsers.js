import http from "k6/http"
import { BaseUrl } from "./BaseUrl.js"

const urlEnd = BaseUrl + '/users'

export function GetAllUsers() {
    http.get(urlEnd)
}