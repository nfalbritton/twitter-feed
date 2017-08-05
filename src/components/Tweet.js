import React from 'react';

const Tweet = props => {
  let retweet;
  if(props.retweeted) {
    retweet = <button className='retweet' onClick={event => alert('retweet')}>{props.retweetCount}</button>
  };

  let favorite;
  if(props.favorited) {
    favorite = <button className='favorite' onClick={event => alert('favorited')}>{props.favoriteCount}</button>
  };


  return(
    <div className="alerts">

  )
}
export default Tweet;
