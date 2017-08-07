import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
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
    <div>
      <ul>
        {tweets}
      </ul>
    </div>
  );
};


export default TwitterFeed;
