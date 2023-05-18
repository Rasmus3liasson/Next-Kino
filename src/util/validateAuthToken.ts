import { verify } from "jsonwebtoken";

const validateAuthToken = (jwtToken: string) => {
  
  try {
    if(jwtToken){
      const userData = verify(jwtToken, process.env.JWTKEY);
      if(typeof userData !== "string")
      return {...userData.user}
    } else return null

  } catch(e) { console.log("Invalid token", e) }
};

export default validateAuthToken;
