import moment from "moment";

export default function DateWithFormat({ time }) {
  console.log("time", time);
  const result =
    time && typeof time === "number" ? time : time && time.split("+")[0];
  console.log("result", result);
  return result
    ? moment(result).format("YYYY/MM/DD HH:mm:ss")
    : "Invalid Date Time Format";
}
