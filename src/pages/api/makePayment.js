//Confirm MPESA payment

import AxiosInstance from "./axiosInstance";

export default async function confirmMpesa(phoneNumber) {

    let paymentConfrimed = false;
    return await AxiosInstance.get("/confirm",{
        params: {
            phoneNumber : phoneNumber
        },
    })
        .then((response)=>{
            console.log(response);
            //If the response is 200 paymentConfrimed -- true
            paymentConfrimed = true;
        })
        .catch((error)=>{
            console.log(error)
            //Give error response to status pan
        })
        .finally(()=>{
            //always executed
            return paymentConfrimed;
        })
}