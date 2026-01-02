import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import { allPosts } from "../services/PostApi";
import { feeds } from "../services/UiApi";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    feeds()
      .then((response) => {
        setPosts(response.data);
        console.log("response :: ", response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="container" style={{ width: "40%", heigh: "100%" }}>
        {posts.map((post) => (
          <Post post={post.post} user={post.user} key={post.post.id} />
        ))}
      </div>
    </>
  );
}

export default Feed;
<></>;
