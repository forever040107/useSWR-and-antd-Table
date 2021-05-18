import axios from "axios";

export default function ({
  endpoint,
  method = "get",
  body,
  responseType,
  params,
  exportMode
}) {
  return axios({
    method,
    url: `${endpoint}`,
    data: body,
    responseType,
    params
  })
    .then((res) => {
      if (exportMode) {
        console.log("res", res);
        return res;
      }
      if (!res.data.Status) {
        return Promise.reject(res.data);
      }
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
