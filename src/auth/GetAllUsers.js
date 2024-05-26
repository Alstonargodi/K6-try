import http from "k6/http"

const urlEnd = 'http://dummyjson.com/users'

export const options = {
    // user dengan pengguna statis
    vus: 5,
    // durasi secara statis
    duration: '5s',
};
  
export default function() {
    http.get(urlEnd)
}