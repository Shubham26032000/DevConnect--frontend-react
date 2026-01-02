import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { useContext, useEffect, useState } from "react";
import { usersPost } from "../services/PostApi";
import { getUser } from "../services/UserApi";
import UserContext from "../context/UserContext";

function UserProfile() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log("ID RECEIVED", userId);
    getUser(userId)
      .then((response) => {
        console.log("User Receive .", response.data);
        setCurrentUser(response.data);
        console.log("CURRENT USER :: ", currentUser);
      })
      .catch((error) => console.error("User not found", error));
    usersPost(userId)
      .then((response) => {
        setPosts(response.data);
        console.log(response);
      })
      .catch((error) => console.error(error));
  }, [userId]);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title">{currentUser?.username}</div>
          </div>
        </div>
        <hr />
        <div className="row">
          {posts.map((post) => (
            <div className="col-4">
              <Post post={post} user={currentUser} key={post.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
