import React from 'react';
import RedditPostsCard from './RedditPostsCard'

export default function RedditPostsList(props) {

  return (
    <div>
    {props.posts.data.children.map((post) => {
        return <RedditPostsCard post={post.data} key={JSON.stringify(post)} passedFunction={props.passedFunction} />
      })}
      </div>
  );
}
