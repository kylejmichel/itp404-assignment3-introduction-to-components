export async function getPosts() {
  let response = await fetch(`https://www.reddit.com/r/askreddit.json`);
  let posts = await response.json();
  return posts;
}
