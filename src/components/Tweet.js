import React from 'react';

const Tweet = props => {
  let retweet;
  if(props.retweeted) {
    retweet = <button className='fa fa-retweet icon green' aria-hidden='true' onClick={event => alert('retweet')}>{props.retweetCount}</button>
  };

  let favorite;
  if(props.favorited) {
    favorite = <button className='fa fa-heart icon red' aria-hidden='true' onClick={event => alert('favorited')}>{props.favoriteCount}</button>
  };

  return(
    <div>
      <li>
        <div className="pic columns small-2">
          <img src={props.profileImage} />
        </div>

        <div className="names column small-8">
          <div className="text row small-12">
            <span className="name">{props.name}</span>
            <span className="screenName">{props.screenName}</span>
          </div>
          <span className="text">{props.text}</span>

        </div>

        <div className="likes row small-2">
          <span className="retweet">{retweet}</span>
          <span className="favorite">{favorite}</span>
        </div>
      </li>
    </div>
  );
}


    export default Tweet;
