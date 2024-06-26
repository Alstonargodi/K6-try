import { PostUser, RegisterUser } from '../src/auth/RegisterUser.js';
import { GetAllUsers, getUsers } from '../src/auth/GetAllUsers.js';

export const options = {
  // user dengan pengguna statis
  vus: 5,
  // durasi secara statis
  duration: '10s',

  //penambahan user secara bertahap
  // stages:[
  //   {duration:'10s',target:10},// 1. selama 10 detik bertahap sampai 10 vu
  //   {duration:'10s',target:10},// 2. 10 detik kemudian masih 10 vu
  //   {duration:'5s',target:20},//3. 5 detik kemudian naik 20 vu
  //   {duration:'5s',target:0},//4. 5 detik kemudian turun menjadi 0 vu
  // ],

  //options summary statistic
  //p = percentil
  summaryTrendStats:['avg','min','med','max','p(90)','p(95)']
};


//skenario testing
export default function() {
  RegisterUser()
  GetAllUsers()
  // sleep(1); //sebelum berhenti, tunggu selama 1 detik
}
