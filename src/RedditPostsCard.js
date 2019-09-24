import React from 'react';

const RedditPostsCard = ({post, passedFunction}) =>
  (<div><div className="repoCard"><a href={post.url} onClick={passedFunction} target="_blank"><h1>{post.title}</h1></a><p>By {post.author}</p><p>Comments: {post.num_comments.toLocaleString() > 0 ? post.num_comments : 'No comments'}</p><p>Upvotes: {post.ups.toLocaleString()}</p></div></div>)

export default RedditPostsCard;
