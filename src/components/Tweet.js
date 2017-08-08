import React from 'react';

const Tweet = props => {
  let retweetAlert;
  if(props.handleRetweetClick){
    retweetAlert = <button className='fa fa-retweet icon green' aria-hidden='true'>{props.retweet_count}</button>
} else {
    retweetAlert = <button className='fa fa-retweet icon' aria-hidden='true'>{props.retweet_count}</button>
  };

  let likeAlert;
  if(props.handleLikeClick){
    likeAlert = <button className='fa fa-heart icon red' aria-hidden='true'>{props.favorite_count}</button>
  } else {
    likeAlert = <button className='fa fa-heart icon' aria-hidden='true' onClick={event => alert('like')}>{props.favorite_count}</button>
  }

  return(
    <div>
      <li>
        <div className="pic column small-2">
          <img src={props.profileImage} />
        </div>
        <div className="names column small-8">
          <span className="name">{props.name}</span>
          <span className="screenName">@{props.screenName}</span>
        </div>
        <div className="row">
          <div className= "text column small-10">
            <span className="text">{props.text}</span>
          </div>
        </div>
        <div className="icons row small-4">
           <button className='fa fa-reply' aria-hidden='true' onClick={event => alert('reply')}></button>
           <span onClick={props.handleRetweetClick} className={props.className}>{retweetAlert}</span>
           <span onClick={props.handleLikeClick} className={props.likeName}>{likeAlert}</span>
           <button className='fa fa-ellipsis-h' aria-hidden='true' onClick={event => alert('favorite')}></button>
        </div>
      </li>
    </div>
  )}

    export default Tweet;
