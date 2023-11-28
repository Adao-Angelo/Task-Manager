  
import { baseURL } from "./baseUrl.js";
  class createTask  {
     constructor(){

     }
     postTask(task){
        const url =  baseURL();
        fetch(`${url}/task`, {
            method: "POST"
        })
     }
  }

   


