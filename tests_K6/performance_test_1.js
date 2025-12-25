import http from 'k6/http';
import {check,sleep } from 'k6'

//Test Configuration
export const options = {
    stages : [
        {duration:"5s",target:15}
    ],
}
const url = 'https://practice.expandtesting.com/api/my-ip/';

export default function(){
    let res = http.get(url);

    check(res,{"status was 200 ":(r)=>{
        return r.status == 200
    }});
    sleep(1);
}