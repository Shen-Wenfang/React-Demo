import React from "react";
import "../assets/css/error.css";
class Error extends React.Component{
  render(){
    return (
      <div className="error">
        <h3>啊哦，您访问的页面不存在</h3>
      </div>
    );
  }
}
export default Error;