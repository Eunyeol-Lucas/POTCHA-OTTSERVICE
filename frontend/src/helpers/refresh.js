import axios from "axios";
import cookie  from "react-cookies";

const refreshToken = async (signin) => {
    try {
      console.log("token", `Bearer ${cookie.load("refresh_token")}`);
    const response = await axios.get("/api/refresh", {
      Authorization: `Bearer ${cookie.load("refresh_token")}`,
    });
    console.log("response", response.data);
  } catch (e) {
    console.log(e);
  }
};

export default refreshToken;
