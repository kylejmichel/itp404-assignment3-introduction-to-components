import React from 'react';
import Loading from './Loading';
import RedditPostsCard from './RedditPostsCard'
import './App.css';
import { getPosts } from './RedditApi'

// function App() {
//   return (
//     // <div className="App">
//     //
//     // </div>
//
//   );
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    }
  }
  async componentDidMount() {
    // fetch('https://api.github.com/orgs/emberjs/members').then((response) => {
    //   return response.json()
    // }).then((members) => {
    //   console.log(members)
    // });

    let posts = await getPosts();
    this.setState({ posts, loading: false });
  }


  render() {
    return (
      // <div>
      //   <p>Members: {this.state.members.length}</p>
      //   <div>
      //     {this.state.loading ? <Loading /> : this.state.members.map((member) => {
      //       return <MemberImage member={member} key={member.id}/>
      //     })}
      //   </div>
      // </div>
      <div>
        <h1>r/AskReddit</h1>




        {this.state.loading ? <Loading /> :
          <>
          <p id="subs">{this.state.posts.data.children[0].data.subreddit_subscribers.toLocaleString()}</p>
          {this.state.posts.data.children.map(({data}) => {
              return <RedditPostsCard post={data} key={JSON.stringify(data)} />
            })}
          </>
        }
      </div>
    );
  }
}

export default App;
