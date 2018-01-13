import React from 'react';
import '../assets/css/loading.css'
export default class Loading extends React.Component {
  render() {
    return (
      <div className="loadingfilter">
        <div className="loading">
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
        </div>
     </div>

    );
  }
}