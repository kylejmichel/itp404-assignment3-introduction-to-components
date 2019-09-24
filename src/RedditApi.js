export async function getPosts(url) {

  let response = await fetch(`https://www.reddit.com/r/` + url + `.json`);
  let posts = await response.json();
  return posts;

}
