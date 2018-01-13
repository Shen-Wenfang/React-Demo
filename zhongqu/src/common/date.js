import {fillzero} from "./fillzero";

const date = (time) => {
  var d=new Date();
  d.setTime(time);
  return d.getFullYear()+"."+fillzero(d.getMonth()+1)+"."+fillzero(d.getDay());
};
export default date;