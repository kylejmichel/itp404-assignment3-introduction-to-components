import React from 'react';

const RedditPostsCard = ({post}) =>
  (<div><div className="repoCard"><a href={post.url}><h1>{post.title}</h1></a><p>By {post.author}</p><p>Comments: {post.num_comments.toLocaleString() > 0 ? post.num_comments : 'No comments'}</p><p>Upvotes: {post.ups.toLocaleString()}</p></div></div>)

export default RedditPostsCard;
