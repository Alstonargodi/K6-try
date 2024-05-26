import http from "k6/http"

const urlEnd = 'http://dummyjson.com/users'

export function getUsers() {
    http.get(urlEnd)
}