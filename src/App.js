import React from 'react';
import Loading from './Loading';
import RedditPostsCard from './RedditPostsCard'
import RedditPostsList from './RedditPostsList'
import './App.css';
import { getPosts } from './RedditApi'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
      postsArrived: false,
      searchValue: '',
      previousSearches: [],
      readCount: 1,
      error: false
    }
  }
  async componentDidMount() {

  }
  handleSearchInputChange = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  }
  handleError = () => {
    this.setState({error: true})
  }
  handleSearch = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    let posts
    try {
      this.setState({error: false})
       posts = await getPosts(this.state.searchValue) }
    catch(error) {
      this.setState({error: true})
      alert(error)
    }

    this.setState({
      previousSearches: this.state.previousSearches.concat([this.state.searchValue])
    })
    if (this.state.error) {
      this.setState({ loading: false, postsArrived: false });
    }
    else {
      console.log(posts)
      this.setState({ posts, loading: false, postsArrived: true });
    }
  }
  applyPreviousSearch = async (term) => {
    this.setState({ loading: true });
    let posts;
    try {
      this.setState({error: false})
       posts = await getPosts(term) }
    catch(error) {
      this.setState({error: true})
      alert(error)
    }
    if (this.state.error) {
      this.setState({ loading: false, postsArrived: false });
    }
    else {
      console.log(posts)
      this.setState({ posts, loading: false, postsArrived: true });
    }
  }
  passedFunction = () => {
    this.setState({ readCount: this.state.readCount + 1 })
    document.getElementById('read').innerHTML = this.state.readCount;
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSearch}>
      <input type="text" value={this.state.searchValue} onChange={this.handleSearchInputChange} />
      <button type="submit" >Posts</button>
      </form>
      <div className="history">
      <h3>Search History</h3>
      {this.state.previousSearches.map((term) => {
        return (
          <button type="button" onClick={this.applyPreviousSearch.bind(this, term)}>
          {term}
          </button>
        );
      })}
      </div>
      <div>
      <span id="read">0</span> posts read
      </div>

      {this.state.loading && <Loading />}
      {this.state.postsArrived ? <RedditPostsList posts={this.state.posts} passedFunction={this.passedFunction} /> : '' }

      </div>
    );
  }
}

export default App;
