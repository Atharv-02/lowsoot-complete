import validator from "validator";
export function decidebuttonstatus(params) {
  const { mail, cmail, pword, cpword } = params;
  const aremailsame = mail === cmail ? true : false;
  const arepwordsame = pword === cpword ? true : false;
  const ispwvalid = validator.isStrongPassword(pword);
  const isemvalid = validator.isEmail(mail);
  const finalset =
    aremailsame && arepwordsame && ispwvalid && ispwvalid && isemvalid
      ? false
      : true;
  return finalset;
}
