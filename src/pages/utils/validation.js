export default function validate(flag, value) {
  //Maximum Amount in Kshs
  let maxAmount = process.env.NEXT_PUBLIC_maxAmount;

  //Minimum Amount in Kshs
  let minAmount = process.env.NEXT_PUBLIC_minAmount;

  //Validate
  switch (flag) {
    case "amount":
      //Check amount more than minimum and less than maximum
      return Number(value) > Number(minAmount) &&
        Number(maxAmount) > Number(value)
        ? true
        : false;

    case "usdc":
      //Check USDC address needs reaserch for now just check is not empty
      return value === null || value == "" ? false : true;

    case "phone":
      //Check phone number Improve this
      return value === null || value == "" ? false : true;
    case 3:
    //Show if number verified success

    case 4:
    //Show if error verifying number

    default:
      null;
  }
}
