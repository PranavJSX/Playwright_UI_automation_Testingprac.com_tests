
import {Page,TestInfo} from "playwright/test";


type Custom_fixture_1 = {
    Network_capture:Page,
}

type ErrorRequest = {url:string,status:number}

const failerRequests : ErrorRequest[] = [];  
// const testInfo = test.info();
export const Network_request ={ 
    Network_capture:[async({page}:{page:Page},use:(page:Page)=>Promise<void>,testInfo:TestInfo)=>{
        //Setup
        page.on("response",(response)=>{
            const url = response.url();
            const status = response.status();
            console.log("URLS: ",url);
            console.log("STATUS :",status);

            if(status >= 400){
                failerRequests.push({
                    url,
                    status
                })
            }
        })
        await use(page);
        //Teardown
        if(failerRequests.length>0){
            await testInfo.attach("Failed-requests.JSON",{
                body:JSON.stringify(failerRequests,null,2),
                contentType:"application/json"
            })
            throw new Error("HEY THERE WERE FAILED REQUESTS!!");
        }
    },{auto:true}]}