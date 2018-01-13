
import React from 'react';
import $ from 'jquery';
import '../assets/css/article.css'

const Information=(props)=>{
  // console.log(props.banData)
  return (
    <div className="talkbox1">
     {
        props.banData.map((item,index)=>{
          return(
            <img src={item}  key={index} style={{width:'100%'}}/>
          )
        })
     }
   </div>
  )
}

export default Information