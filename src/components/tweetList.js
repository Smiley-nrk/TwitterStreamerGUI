import React,{ Component } from 'react';

class TweetList extends Component{
  constructor(props: TweetListProps) {
    super(props);

    this.state = {
      tweets:[],
    };

    this.clearTweets = this.clearTweets.bind(this);
    this.stopTweets = this.stopTweets.bind(this);
    this.startTweets = this.startTweets.bind(this);
  }

  async componentDidMount() {
    this.startTweets();
  }

  clearTweets(){
    this.setState({tweets: []});
  }

  stopTweets(){
    console.log("Tried to stop");
    this.connector.close();
  }

  async startTweets(){
    const eventSource = new EventSource('http://localhost:8080/getTweets');
    eventSource.onmessage = (event: any) => {
      const tweet = JSON.parse(event.data).data;
      if(tweet != null){
        this.state.tweets.push(tweet);
        this.setState({tweets: this.state.tweets});
      }
    };
    this.connector = eventSource;
  }

  render() {
    const {tweets} = this.state;
    const tweetsAvail = tweets.length == 0? false:true;

    return (
      <div>
		<table style={{marginLeft:"40%"}}><tbody><tr>
          <td><input type="button" value="Start" onClick={this.startTweets}/></td>
          <td><input type="button" value="Clear" onClick={this.clearTweets}/></td>
          <td><input type="button" value="Stop" onClick={this.stopTweets}/></td>
        </tr></tbody></table>
        <ul>
          {tweetsAvail?
            (tweets.map((tweet:Tweet) => <li key={tweet.id}>{tweet.text}</li>))
            :"-- No Tweets Yet --"
          }
        </ul>
      </div>
    );
  }
}

export default TweetList;
