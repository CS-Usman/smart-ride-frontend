import axios from "axios";
export const postData = async (data) => {
  //   console.log(data);
  axios
    .post("http://192.168.43.49:3000/", data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
