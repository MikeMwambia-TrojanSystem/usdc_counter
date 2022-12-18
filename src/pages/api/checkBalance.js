//Check treasury balance

import AxiosInstance from "./axiosInstance";

export default async function getBalance(treasuryAddress) {
  let treasuryBalance = null;

  return await AxiosInstance.get("/getBalance", {
    params: {
      address: treasuryAddress,
    },
  })
    .then((response) => {
      console.log(response);
      //Contains status code & balance
      treasuryBalance = { ...response };
    })
    .catch((error) => {
      console.log(error);
      //Contains status code  & error message
      treasuryBalance = { ...error };
    })
    .finally(() => {
      //alway executed
      //Close connection
      return treasuryBalance;
    });
}
