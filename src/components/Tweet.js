import React from 'react';

const Tweet = props => {
  let time = new Date(Number(props.timestamp));
  let datetoStr = time.toUTCString().split(' ');
  let cleanDate = datetoStr[2] + ' ' + datetoStr[1];

  let retweetAlert;
  if(props.handleRetweetClick){
    retweetAlert = <button className='fa fa-retweet icon green' aria-hidden='true'></button>
} else {
    retweetAlert = <button className='fa fa-retweet icon' aria-hidden='true'></button>
  };

  let likeAlert;
  if(props.handleLikeClick){
    likeAlert = <button className='fa fa-heart icon red' aria-hidden='true'></button>
  } else {
    likeAlert = <button className='fa fa-heart icon' aria-hidden='true' onClick={event => alert('like')}></button>
  }


  return(
    <div>
      <li className="layout">
        <div className="pic column small-2">
          <img src={props.profileImage} />
        </div>
        <div className="names column small-8">
          <span className="name">{props.name}</span>
          <span className="screenName">@{props.screenName}</span>
          <span className="timestamp">{cleanDate}</span>
        </div>
        <div className="row">
          <div className= "text column small-10">
            <span className="text">{props.text}</span>
            <img src={props.mediaUrl} />

          </div>
        </div>
        <div className="icons row small-11">
        <ul>
           <li className="icon"><button className='fa fa-reply' aria-hidden='true' onClick={event => alert('reply')}></button></li>
           <li className="icon"><span onClick={props.handleRetweetClick} className={props.className}>{retweetAlert}{props.retweetCount}</span></li>
           <li className="icon"><span onClick={props.handleLikeClick} className={props.likeName}>{likeAlert}{props.favoriteCount}</span></li>
           <li className="icon"><button className='fa fa-ellipsis-h' aria-hidden='true' onClick={event => alert('favorite')}></button></li>
        </ul>
        </div>
      </li>
    </div>
  )}

    export default Tweet;
