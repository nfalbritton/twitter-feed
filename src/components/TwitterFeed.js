import React from 'react';
import Twet from './Tweet';

const TwitterFeed = () => {
  let tweets = props.data.map(tweet => {
    return(
      <Tweet
        key={tweet.id_str}
        name={tweet.user.name}
        screenName={tweet.user.screen_name}
        profileImage={tweet.user.profile_image_url}
        text={tweet.text}
        retweetCount={tweet.retweet_count}
        favoriteCount={tweet.favorite_count}
        retweeted={tweet.retweeted}
        favorited={tweet.favorited}
        timestamp={tweet.timestamp_ms}
      />
    );
  });

  return(
    <ul className="tweets">
      {tweets}
    </ul>
  );
}


export default TwitterFeed;
