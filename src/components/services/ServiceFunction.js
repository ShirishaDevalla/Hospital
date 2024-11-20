import axios from "axios"
import { basepath } from "./Url"
const headers = {
    Authorization: "Bearer your-token",
    "Content-Type": "application/json",
  };

export const loginfunction=async (url,data)=>{
    let result=await axios.post(basepath+url,data,{headers})
    console.log(result)
    return result

}