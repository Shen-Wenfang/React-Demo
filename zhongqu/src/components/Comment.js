
import React from 'react';
import $ from 'jquery';
import '../assets/css/article.css'
import date from '../common/date'

const Comment = (props) => {
  // console.log(props.comData)
  return (
    <section className="talkbox2">
      <ul className="talk">
        {
          props.comData.map((item, index) => {
            return (
              <li key={index}>
                <figure><img src={item.headPhoto} /></figure>
                <dl>
                  <dt>
                    <p>{item.username}</p>
                    <time>{date(item.time)}</time>
                    <div className="star">
                      {
                        item.iconImg.map((value, index) => {
                          return(
                            <span key={index}>
                            <img src={value} />
                          </span>
                          )
                        })
                      }

                    </div>
                  </dt>
                  <dd>{item.userTalk}</dd>
                  <small>颜色：{item.color}</small>
                  <div className="picbox">
                    {
                      item.detailImg.map((value, index) => {
                        return(
                          <img src={value} key={index} />
                        )
                      })
                    }
                  </div>
                </dl>
              </li>
            )
          })
        }

      </ul>
    </section>
  )
}
export default Comment