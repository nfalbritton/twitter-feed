import React from 'react';
import Tweet from './Tweet';

class TwitterFeed extends React.Component{
  constructor(props) {
    super(props);

      this.state = {
        selectedRetweet: null,
        likedTweet: null,
      }

      this.handleRetweetClick = this.handleRetweetClick.bind(this),
      this.handleLikeClick = this.handleLikeClick.bind(this)
    }

    handleRetweetClick(retweeted) {
      this.setState( {selectedRetweet: retweeted} )
    }

    handleLikeClick(favorited) {
      this.setState( {likedTweet: favorited} )
    }

  render(){

    let className;
    let likeName;
    let tweets = this.props.data.map((tweet => {

      if(tweet.retweeted === this.state.selectedRetweet) {
        className = "selected"
      } else {
        className = ""
      }

      let onRetweetClick = () => this.handleRetweetClick(tweet.retweeted)

      if(tweet.favorited === this.state.likedTweet) {
        likeName = "liked"
      } else {
        likeName = ""
      }

      let onLikeClick = () => this.handleLikeClick(tweet.favorited)

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
          handleRetweetClick={onRetweetClick}
          className={className}
          handleLikeClick={onLikeClick}
          likeName={likeName}
        />
      )
    })
  )

    return(
      <div>
        <ul>
          {tweets}
        </ul>
      </div>
    )
  }
}

export default TwitterFeed;
